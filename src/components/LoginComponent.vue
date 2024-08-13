<template>
  <div class="login">
    <h2>Вхід</h2>
    <form @submit.prevent="login">
      <div class="form-group">
        <label for="email">Email</label>
        <input type="email" v-model="form.email" id="email" required />
      </div>

      <div class="form-group">
        <label for="password">Пароль</label>
        <input type="password" v-model="form.password" id="password" required />
      </div>

      <button type="submit">Увійти</button>
    </form>
    <p v-if="errorMessage" class="error">{{ errorMessage }}</p>
  </div>
</template>

<script>
import apiClient from '@/services/apiClient';  // Імпортуємо apiClient

export default {
  name: 'LoginComponent',
  data() {
    return {
      form: {
        email: '',
        password: '',
      },
      errorMessage: '',
    };
  },
  methods: {
    login() {
      apiClient
        .post('login/', this.form)  // Використовуємо apiClient для запиту
        .then((response) => {
          console.log('Login successful:', response.data);
          // Зберігаємо токени у localStorage
          localStorage.setItem('accessToken', response.data.access);
          localStorage.setItem('refreshToken', response.data.refresh);
          localStorage.setItem('userEmail', this.form.email);

          // Отримуємо список користувачів
          return apiClient.get('users/', {  // Використовуємо apiClient для запиту
            headers: {
              Authorization: `Bearer ${response.data.access}`,
            },
          });
        })
        .then((usersResponse) => {
          console.log('Fetched users:', usersResponse.data);
          // Знаходимо поточного користувача за email
          const currentUser = usersResponse.data.find(user => user.email === this.form.email);

          if (currentUser) {
            console.log('Current user found:', currentUser);
            // Зберігаємо ролі користувача у localStorage
            localStorage.setItem('isDoctor', currentUser.is_doctor);
            localStorage.setItem('isSuperuser', currentUser.is_superuser);
            localStorage.setItem('isStaff', currentUser.is_staff);

            // Перенаправляємо користувача на dashboard після успішного входу
            this.$router.push('/dashboard');
          } else {
            this.errorMessage = 'Користувача не знайдено.';
            console.error('User not found');
          }
        })
        .catch((error) => {
          console.error('Error logging in or fetching users:', error);
          this.errorMessage = 'Неправильний email або пароль. Спробуйте ще раз.';
        });
    },
  },
};
</script>

<style scoped>
.login {
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

input {
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
}

button:hover {
  background-color: #369f72;
}

.error {
  color: #f44336;
  margin-top: 15px;
}
</style>
