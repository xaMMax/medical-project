<template>
  <div class="edit-profile">
    <h2>Редагувати профіль</h2>
    <form @submit.prevent="updateProfile">
      <div class="form-group">
        <label for="username">Ім'я користувача</label>
        <input type="text" v-model="profile.username" id="username" required />
      </div>

      <div class="form-group">
        <label for="email">Email</label>
        <input type="email" v-model="profile.email" id="email" required />
      </div>

      <div class="form-group">
        <label for="phone">Телефон</label>
        <input type="tel" v-model="profile.phone" id="phone" />
      </div>

      <div class="form-group">
        <label for="address">Адреса</label>
        <input type="text" v-model="profile.address" id="address" />
      </div>

      <div class="form-group">
        <label for="bio">Біографія</label>
        <textarea v-model="profile.bio" id="bio" rows="4"></textarea>
      </div>

      <div class="form-group">
        <label for="photo">Фото профілю</label>
        <input type="file" @change="onFileChange" id="photo" />
      </div>

      <button type="submit">Оновити профіль</button>
      <button @click="cancelEdit">Скасувати</button>
    </form>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  name: 'EditProfileComponent',
  data() {
    return {
      profile: {
        username: '',
        email: '',
        phone: '',
        address: '',
        bio: '',
        photo: null,
      },
    };
  },
  methods: {
    fetchUserProfile() {
      const token = localStorage.getItem('accessToken');
      axios
        .get('/api/profile/', {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        })
        .then((response) => {
          this.profile = response.data;
        })
        .catch((error) => {
          console.error('Error fetching profile:', error);
          if (error.response.status === 401) {
            this.$router.push('/login');
          }
        });
    },
    updateProfile() {
      const token = localStorage.getItem('accessToken');
      const formData = new FormData();

      for (const key in this.profile) {
        if (key === 'photo' && this.profile[key]) {
          formData.append(key, this.profile[key], this.profile[key].name);
        } else {
          formData.append(key, this.profile[key]);
        }
      }

      axios
        .put('/api/profile/', formData, {
          headers: {
            Authorization: `Bearer ${token}`,
            'Content-Type': 'multipart/form-data',
          },
        })
        .then(() => {
          alert('Профіль оновлено успішно');
          this.$router.push('/profile'); // Перенаправляємо користувача назад до профілю після успішного оновлення
        })
        .catch((error) => {
          console.error('Error updating profile:', error);
        });
    },
    onFileChange(e) {
      this.profile.photo = e.target.files[0];
    },
    cancelEdit() {
      this.$router.push('/profile'); // Перенаправлення назад до профілю при скасуванні редагування
    },
  },
  created() {
    this.fetchUserProfile(); // Завантажуємо профіль користувача при створенні компонента
  },
};
</script>

<style scoped>
.edit-profile {
  padding: 20px;
}

h2 {
  font-size: 2rem;
  margin-bottom: 20px;
}

.form-group {
  margin-bottom: 15px;
}

label {
  display: block;
  margin-bottom: 5px;
  font-weight: bold;
}

input,
textarea {
  width: 100%;
  padding: 8px;
  font-size: 1rem;
  border: 1px solid #ccc;
  border-radius: 4px;
}

button {
  font-size: 1rem;
  padding: 10px 20px;
  background-color: #42b983;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  margin-right: 10px;
}

button:hover {
  background-color: #369f72;
}
</style>
