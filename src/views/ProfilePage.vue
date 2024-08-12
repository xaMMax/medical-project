<template>
  <div class="user-page-container">
    <h1>{{ user.username }}'s Profile</h1>
    <div class="profile-section">
      <p><strong>Email:</strong> {{ user.email }}</p>
      <p><strong>First Name:</strong> {{ user.first_name }}</p>
      <p><strong>Last Name:</strong> {{ user.last_name }}</p>
      <p><strong>Phone:</strong> {{ user.phone }}</p>
      <p><strong>Address:</strong> {{ user.address }}</p>
      <p><strong>Bio:</strong> {{ user.bio }}</p>
      <div v-if="user.photo">
        <p><strong>Profile Photo:</strong></p>
        <img :src="user.photo" alt="Profile Photo" class="profile-photo"/>
      </div>
    </div>
    <button @click="openUpdateForm">Edit Profile</button>
    <UserUpdate v-if="showUpdateForm" :user="user" @close="closeUpdateForm" />
  </div>
</template>

<script>
import apiClient from '@/services/api';
import UserUpdate from '@/components/UserUpdate.vue';

export default {
  name: 'UserPage',
  components: {
    UserUpdate,
  },
  data() {
    return {
      user: {},
      showUpdateForm: false,
    };
  },
  async created() {
    try {
      const response = await apiClient.get('profile');
      this.user = response.data;
    } catch (error) {
      console.error('Failed to load user profile', error);
    }
  },
  methods: {
    openUpdateForm() {
      this.showUpdateForm = true;
    },
    closeUpdateForm(updatedUser) {
      this.showUpdateForm = false;
      if (updatedUser) {
        this.user = updatedUser; // Оновлюємо дані користувача після успішного збереження
      }
    },
  },
};
</script>

<style scoped>
.user-page-container {
  max-width: 800px;
  margin: 40px auto;
  padding: 30px;
  background-color: #ffffff;
  border-radius: 12px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  color: #333;
}

h1 {
  text-align: center;
  color: #2c3e50;
  font-size: 2.5em;
  margin-bottom: 30px;
  border-bottom: 2px solid #42b983;
  padding-bottom: 10px;
}

.profile-section p {
  font-size: 1.2em;
  margin-bottom: 15px;
  line-height: 1.5;
  color: #4d4d4d;
}

.profile-section strong {
  color: #42b983;
}

.profile-section ul {
  list-style-type: disc;
  padding-left: 20px;
  margin-top: 10px;
}

.profile-section ul li {
  font-size: 1.1em;
  color: #555;
  margin-bottom: 8px;
}

.profile-photo {
  max-width: 200px;
  border-radius: 50%;
  border: 3px solid #42b983;
  display: block;
  margin: 20px auto;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}

.edit-button {
  padding: 12px 24px;
  background-color: #42b983;
  color: white;
  border: none;
  border-radius: 6px;
  cursor: pointer;
  transition: background-color 0.3s ease;
  font-size: 1.2em;
  display: block;
  margin: 30px auto;
}

.edit-button:hover {
  background-color: #368a6d;
}
</style>


