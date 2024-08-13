<template>
  <div class="user-profile">
    <h2>Профіль користувача</h2>

    <div v-if="!isEditingData && !isEditingPhoto">
      <div class="profile-info">
        <div v-if="profile.photo">
          <img :src="profile.photo" alt="Фото профілю" class="profile-photo" />
        </div>
        <p><strong>Ім'я користувача:</strong> {{ profile.username }}</p>
        <p><strong>Email:</strong> {{ profile.email }}</p>
        <p><strong>Телефон:</strong> {{ profile.phone || 'Не вказано' }}</p>
        <p><strong>Адреса:</strong> {{ profile.address || 'Не вказано' }}</p>
        <p><strong>Біографія:</strong> {{ profile.bio || 'Не вказано' }}</p>

      </div>
      <div class="buttons">
        <button @click="isEditingData = true">Редагувати дані</button>
        <button @click="isEditingPhoto = true">Змінити фото</button>
      </div>
    </div>

    <!-- Форма для редагування даних користувача -->
    <div v-else-if="isEditingData">
      <form @submit.prevent="updateProfileData">
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

        <div class="buttons">
          <button type="submit">Зберегти зміни</button>
          <button type="button" @click="cancelEditData">Скасувати</button>
        </div>
      </form>
    </div>

    <!-- Форма для зміни фото профілю -->
    <div v-else-if="isEditingPhoto">
      <form @submit.prevent="updateProfilePhoto">
        <div class="form-group">
          <label for="photo">Фото профілю</label>
          <input type="file" @change="onFileChange" id="photo" required />
        </div>

        <div class="buttons">
          <button type="submit">Зберегти фото</button>
          <button type="button" @click="cancelEditPhoto">Скасувати</button>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import apiClient from '@/services/apiClient';

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
      isEditingData: false,
      isEditingPhoto: false,
    };
  },
  methods: {
    fetchUserProfile() {
      apiClient
        .get('profile/')
        .then((response) => {
          this.profile = response.data;
        })
        .catch((error) => {
          console.error('Error fetching profile:', error);
          if (error.response && error.response.status === 401) {
            this.$router.push('/login');
          }
        });
    },
    updateProfileData() {
      const data = {
        username: this.profile.username,
        email: this.profile.email,
        phone: this.profile.phone,
        address: this.profile.address,
        bio: this.profile.bio,
      };

      apiClient
        .put('profile/', data)
        .then(() => {
          alert('Дані профілю оновлено успішно');
          this.isEditingData = false;
          this.fetchUserProfile();
        })
        .catch((error) => {
          console.error('Error updating profile data:', error);
        });
    },
    updateProfilePhoto() {
  if (!this.profile.photo) {
    alert('Будь ласка, оберіть фото для завантаження.');
    return;
  }

  const formData = new FormData();
  formData.append('username', this.profile.username);
  formData.append('email', this.profile.email);
  formData.append('phone', this.profile.phone || '');
  formData.append('address', this.profile.address || '');
  formData.append('bio', this.profile.bio || '');
  formData.append('photo', this.profile.photo, this.profile.photo.name);

  apiClient
    .put('profile/', formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    })
    .then(() => {
      alert('Фото профілю оновлено успішно');
      this.isEditingPhoto = false;
      this.fetchUserProfile();
    })
    .catch((error) => {
      console.error('Error updating profile photo:', error);
      alert('Сталася помилка при оновленні фото.');
    });
},
    onFileChange(e) {
      this.profile.photo = e.target.files[0];
    },
    cancelEditData() {
      this.isEditingData = false;
      this.fetchUserProfile(); // Повторне завантаження профілю для скасування змін
    },
    cancelEditPhoto() {
      this.isEditingPhoto = false;
      this.profile.photo = null; // Скидаємо вибране фото
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
  max-width: 500px;
  margin: 0 auto;
  background-color: #f9f9f9;
  border-radius: 8px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
}

h2 {
  font-size: 2rem;
  margin-bottom: 20px;
  text-align: center;
  color: #333;
}

.profile-info p {
  font-size: 1.2rem;
  margin: 10px 0;
  color: #555;
}

.profile-photo {
  max-width: 120px;
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
  color: #333;
}

input,
textarea {
  width: 100%;
  padding: 10px;
  font-size: 1rem;
  border: 1px solid #ccc;
  border-radius: 4px;
  margin-bottom: 10px;
}

input:focus,
textarea:focus {
  outline: none;
  border-color: #42b983;
  box-shadow: 0 0 5px rgba(66, 185, 131, 0.5);
}

.buttons {
  display: flex;
  justify-content: space-between;
}

button {
  font-size: 1rem;
  padding: 10px 20px;
  background-color: #42b983;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.3s ease;
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
