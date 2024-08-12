<template>
  <div class="dashboard-container">
    <h1>{{ username }} Dashboard</h1>

    <!-- Умовне відображення UserList тільки для адміністратора -->
    <UserList v-if="is_superuser" @userCreated="refreshUserList" ref="userList"/>

    <!-- Кнопка створення нового користувача тільки для адміністратора -->
    <div class="create-user-section" v-if="isAdmin">
      <button @click="openCreateUserModal">Create New User</button>
    </div>

    <!-- Модальне вікно створення користувача -->
    <div v-if="showCreateUserModal" class="modal">
      <div class="modal-content">
        <h3>Create User</h3>
        <UserForm
            :form="newUser"
            submit-button-text="Create User"
            @submit="createUser"
        />
        <button @click="closeCreateUserModal" class="cancel-button">Cancel</button>
      </div>
    </div>

    <!-- Панель консультацій доступна для всіх користувачів -->
    <ConsultationList/>
  </div>
</template>

<script>
import UserList from '@/components/UserList.vue';
import ConsultationList from "@/components/ConsultationList.vue";
import UserForm from '@/components/UserForm.vue';
import apiClient from '@/services/api';

export default {
  name: 'DashboardPage',
  components: {
    UserList,
    ConsultationList,
    UserForm,
  },
  data() {
    return {
      username: '',
      isAdmin: false, // Початкове значення
      showCreateUserModal: false,
      newUser: {
        username: '',
        email: '',
      },
    };
  },
  async created() {
    await this.checkUserRole(); // Перевірка ролі користувача при завантаженні компонента
  },
  methods: {
    async checkUserRole() {
      try {
        const response = await apiClient.get('/auth/user/'); // Передбачаємо, що API повертає дані користувача
        this.username = response.data.username;
        this.isAdmin = response.data.is_superuser; // Використовуємо поле is_superuser для перевірки ролі
      } catch (error) {
        console.error('Failed to check user role', error);
      }
    },
    openCreateUserModal() {
      this.showCreateUserModal = true;
    },
    closeCreateUserModal() {
      this.showCreateUserModal = false;
    },
    async createUser(formData) {
      try {
        const response = await apiClient.post('/users/', formData);
        console.log('User created:', response.data);
        this.showCreateUserModal = false;
        this.refreshUserList(); // Оновлюємо список користувачів після створення нового користувача
      } catch (error) {
        console.error('Failed to create user', error.response ? error.response.data : error.message);
      }
    },
    refreshUserList() {
      // Викликаємо метод для оновлення списку користувачів у компоненті UserList
      this.$refs.userList.fetchUsers();
    },
  },
};
</script>
