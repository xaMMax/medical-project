<template>
  <div class="user-list">
    <h2>{{ isDoctorOrSuperuser ? 'Список Користувачів' : 'Список Лікарів' }}</h2>
    <ul v-if="filteredUsers.length">
      <li v-for="user in filteredUsers" :key="user.id">
        <div class="user-info">
          <img v-if="user.photo" :src="user.photo" alt="Фото користувача" class="user-photo"/>
          <p><strong>{{ user.first_name }} {{ user.last_name }}</strong></p><br>
          <p> {{ user.email }} </p>
          <button @click="sendMessage(user.id)">Написати повідомлення</button>
        </div>
      </li>
    </ul>
    <p v-else>Завантаження списку...</p>
  </div>
</template>

<script>
import apiClient from "@/services/apiClient";

export default {
  name: 'UserList',
  data() {
    return {
      users: [],
      currentUser: null,
      isLoaded: false,
    };
  },
  computed: {
    isDoctorOrSuperuser() {
      return this.currentUser && (this.currentUser.is_doctor || this.currentUser.is_superuser);
    },
    filteredUsers() {
      // Якщо користувач лікар або суперкористувач, повертаємо всіх користувачів. Інакше, повертаємо тільки лікарів.
      return this.isDoctorOrSuperuser ? this.users : this.users.filter(user => user.is_doctor);
    }
  },
  methods: {
    fetchUsers() {
      apiClient.get('/users/')
          .then(response => {
            this.users = response.data;
            this.currentUser = this.users.find(user => user.email === localStorage.getItem('userEmail'));
          })
          .catch(error => {
            console.error('Error fetching users:', error);
          })
          .finally(() => {
            this.isLoaded = true;
          });
    },
    sendMessage(userId) {
      this.$router.push({name: 'SendMessage', params: {recipientId: userId}});
    }
  },
  created() {
    this.fetchUsers();
  },
};
</script>

<style scoped>
.user-list {
  padding: 20px;
}

h2 {
  font-size: 2rem;
  margin-bottom: 20px;
}

.user-info {
  display: flex;
  align-items: center;
  margin-bottom: 20px;
}

.user-photo {
  width: 50px;
  height: 50px;
  border-radius: 50%;
  margin-right: 15px;
}

button {
  background-color: #42b983;
  color: white;
  padding: 10px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  margin-left: auto;
}

button:hover {
  background-color: #369f72;
}
</style>
