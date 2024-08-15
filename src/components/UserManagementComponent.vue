<template>
  <div v-if="isSuperUserOrStaff" class="user-management">
    <h2>Управління користувачами</h2>
    <p v-if="!users.length">Користувачі відсутні.</p>
    <table v-else>
      <thead>
        <tr>
          <th>Ім'я</th>
          <th>Email</th>
          <th>Роль</th>
          <th>Дії</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="user in users" :key="user.id">
          <td>{{ user.username }}</td>
          <td>{{ user.email }}</td>
          <td>
            <span v-if="user.is_superuser">Superuser</span>
            <span v-else-if="user.is_staff">Staff</span>
            <span v-else-if="user.is_doctor">Doctor</span>
            <span v-else>User</span>
          </td>
          <td>
            <button @click="editUser(user)">Редагувати</button>
            <button @click="deleteUser(user.id)">Видалити</button>
          </td>
        </tr>
      </tbody>
    </table>
    <div v-if="selectedUser" class="edit-user-modal">
      <h3>Редагувати користувача: {{ selectedUser.username }}</h3>
      <form @submit.prevent="updateUser">
        <div class="form-group">
          <label for="username">Ім'я</label>
          <input type="text" v-model="selectedUser.username" id="username" required />
        </div>
        <div class="form-group">
          <label for="email">Email</label>
          <input type="email" v-model="selectedUser.email" id="email" required />
        </div>
        <div class="form-group">
          <label for="role">Роль</label>
          <select v-model="selectedUser.role" id="role">
            <option value="user">User</option>
            <option value="doctor">Doctor</option>
            <option value="staff">Staff</option>
            <option value="superuser">Superuser</option>
          </select>
        </div>
        <button type="submit">Оновити</button>
        <button @click="selectedUser = null">Скасувати</button>
      </form>
    </div>
  </div>
  <div v-else>
    <p>У вас немає доступу до цього розділу.</p>
  </div>
</template>

<script>
import apiClient from '@/services/apiClient';  // Імпортуємо apiClient

export default {
  name: 'UserManagementComponent',
  data() {
    return {
      users: [],
      selectedUser: null, // Обраний користувач для редагування
      isSuperUserOrStaff: false, // Флаг для перевірки, чи є користувач суперюзером або staff
    };
  },
  methods: {
    fetchUsers() {
      apiClient
        .get('users/')  // Використовуємо apiClient для запиту
        .then((response) => {
          this.users = response.data;
          this.checkAccess(); // Перевіряємо доступ після отримання користувачів
        })
        .catch((error) => {
          console.error('Error fetching users:', error);
          if (error.response && error.response.status === 401) {
            this.$router.push('/login');
          }
        });
    },
    checkAccess() {
      // Заміна з використанням this.$store.state на дані з localStorage
      const currentUserEmail = localStorage.getItem('userEmail');
      const currentUser = this.users.find(user => user.email === currentUserEmail);

      if (currentUser) {
        this.isSuperUserOrStaff = currentUser.is_superuser || currentUser.is_staff;
      }
    },
    editUser(user) {
      this.selectedUser = { ...user, role: this.getRole(user) };
    },
    getRole(user) {
      if (user.is_superuser) return 'superuser';
      if (user.is_staff) return 'staff';
      if (user.is_doctor) return 'doctor';
      if (user.is_user) return 'user';
      return 'user';
    },
    updateUser() {
      const updatedUser = {
        ...this.selectedUser,
        is_superuser: this.selectedUser.role === 'superuser',
        is_staff: this.selectedUser.role === 'staff',
        is_doctor: this.selectedUser.role === 'doctor',
        is_user: this.selectedUser.role === 'user',
      };
      apiClient
        .put(`users/${this.selectedUser.id}/`, updatedUser)  // Використовуємо apiClient для запиту
        .then(() => {
          this.selectedUser = null;
          this.fetchUsers(); // Оновлюємо список користувачів після успішного оновлення
        })
        .catch((error) => {
          console.error('Error updating user:', error);
        });
    },
    deleteUser(userId) {
      apiClient
        .delete(`users/${userId}/`)  // Використовуємо apiClient для запиту
        .then(() => {
          this.fetchUsers(); // Оновлюємо список користувачів після успішного видалення
        })
        .catch((error) => {
          console.error('Error deleting user:', error);
        });
    },
  },
  created() {
    this.fetchUsers(); // Завантажуємо список користувачів при створенні компонента
  },
};
</script>

<style scoped>
.user-management {
  padding: 20px;
}

h2 {
  font-size: 2rem;
  margin-bottom: 20px;
}

table {
  width: 100%;
  border-collapse: collapse;
  margin-bottom: 20px;
}

th, td {
  padding: 10px;
  border: 1px solid #ddd;
  text-align: left;
}

button {
  font-size: 1rem;
  padding: 5px 10px;
  margin-right: 5px;
  background-color: #42b983;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

button:hover {
  background-color: #369f72;
}

.edit-user-modal {
  padding: 20px;
  background-color: #f9f9f9;
  border: 1px solid #ddd;
  border-radius: 4px;
}

.form-group {
  margin-bottom: 15px;
}

label {
  display: block;
  margin-bottom: 5px;
  font-weight: bold;
}

input, select {
  width: 100%;
  padding: 8px;
  font-size: 1rem;
  border: 1px solid #ccc;
  border-radius: 4px;
}
</style>
