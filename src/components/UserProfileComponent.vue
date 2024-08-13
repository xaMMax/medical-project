<template>
  <div class="user-profile">
    <h2>Профіль користувача</h2>

    <div v-if="!isEditing">
      <div class="profile-info">
        <p><strong>Ім'я користувача:</strong> {{ profile.username }}</p>
        <p><strong>Email:</strong> {{ profile.email }}</p>
        <p><strong>Телефон:</strong> {{ profile.phone || 'Не вказано' }}</p>
        <p><strong>Адреса:</strong> {{ profile.address || 'Не вказано' }}</p>
        <p><strong>Біографія:</strong> {{ profile.bio || 'Не вказано' }}</p>
        <div v-if="profile.photo">
          <img :src="profile.photo" alt="Фото профілю" class="profile-photo" />
        </div>
      </div>
      <button @click="isEditing = true">Редагувати профіль</button>
    </div>

    <div v-else>
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
          <input type="file" @change="onFileChange" id="photo"/>
        </div>

        <button type="submit">Зберегти зміни</button>
        <button type="button" @click="cancelEdit">Скасувати</button>
      </form>
    </div>
  </div>
</template>

<script>
import apiClient from '@/services/apiClient'; // Імпортуємо apiClient

export default {
  name: 'UserProfileComponent',
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
      isEditing: false, // Додаємо стан редагування
      originalProfile: null, // Зберігаємо оригінальні дані для скасування змін
    };
  },
  methods: {
    fetchUserProfile() {
      apiClient
          .get('profile/')
          .then((response) => {
            this.profile = response.data;
            this.originalProfile = {...response.data}; // Зберігаємо оригінальні дані
          })
          .catch((error) => {
            console.error('Error fetching profile:', error);
            if (error.response && error.response.status === 401) {
              this.$router.push('/login');
            }
          });
    },
    updateProfile() {
      const formData = new FormData();

      for (const key in this.profile) {
        if (key === 'photo' && this.profile[key]) {
          formData.append(key, this.profile[key], this.profile[key].name);
        } else {
          formData.append(key, this.profile[key]);
        }
      }

      apiClient
          .put('profile/', formData, {
            headers: {
              'Content-Type': 'multipart/form-data',
            },
          })
          .then(() => {
            alert('Профіль оновлено успішно');
            this.isEditing = false; // Виходимо з режиму редагування після успішного оновлення
          })
          .catch((error) => {
            console.error('Error updating profile:', error);
          });
    },
    onFileChange(e) {
      this.profile.photo = e.target.files[0];
    },
    cancelEdit() {
      this.isEditing = false;
      this.profile = {...this.originalProfile}; // Повертаємо оригінальні дані
    },
  },
  created() {
    this.fetchUserProfile();
  },
};
</script>

<style scoped>
.user-profile {
  padding: 20px;
  max-width: 600px;
  margin: 0 auto;
}

h2 {
  font-size: 2rem;
  margin-bottom: 20px;
  text-align: center;
}

.profile-info p {
  font-size: 1.2rem;
  margin: 10px 0;
}

.profile-photo {
  max-width: 150px;
  margin-top: 20px;
  border-radius: 50%;
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
  margin-top: 10px;
  margin-right: 10px;
  background-color: #42b983;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

button:hover {
  background-color: #369f72;
}

button[type="button"] {
  background-color: #f44336;
}

button[type="button"]:hover {
  background-color: #d32f2f;
}
</style>
