<template>
  <div class="register-main">
    <div class="auth-section">
      <div class="register">
      <h2>Реєстрація</h2>
      </div>
      <form @submit.prevent="register">
        <div class="form-group">
          <label for="username">Ім'я користувача</label>
          <input type="text" v-model="form.username" id="username" required />
        </div>

        <div class="form-group">
          <label for="email">Email</label>
          <input type="email" v-model="form.email" id="email" required />
        </div>

        <div class="form-group">
          <label for="password">Пароль</label>
          <input type="password" v-model="form.password" id="password" required />
        </div>

        <div class="form-group">
          <label for="confirmPassword">Підтвердження пароля</label>
          <input type="password" v-model="form.confirmPassword" id="confirmPassword" required />
        </div>

        <button type="submit">Зареєструватись</button>
      </form>
    </div>
    <p v-if="errorMessage" class="error">{{ errorMessage }}</p>
    <p v-if="successMessage" class="success">{{ successMessage }}</p>
  </div>
</template>

<script>
import apiClient from '@/services/apiClient';  // Імпортуємо apiClient

export default {
  name: 'RegisterComponent',
  data() {
    return {
      form: {
        username: '',
        email: '',
        password: '',
        confirmPassword: '',
      },
      errorMessage: '',
      successMessage: '',
    };
  },
  methods: {
    register() {
      if (this.form.password !== this.form.confirmPassword) {
        this.errorMessage = 'Пароль та підтвердження пароля не збігаються.';
        return;
      }

      apiClient
        .post('register/', {
          username: this.form.username,
          email: this.form.email,
          password: this.form.password,
        })
        .then(() => {
          this.successMessage = 'Реєстрація пройшла успішно. Тепер ви можете увійти до системи.';
          this.errorMessage = '';
          this.clearForm();
        })
        .catch((error) => {
          console.error('Error during registration:', error);
          this.errorMessage = 'Помилка при реєстрації. Перевірте введені дані.';
          this.successMessage = '';
        });
    },
    clearForm() {
      this.form.username = '';
      this.form.email = '';
      this.form.password = '';
      this.form.confirmPassword = '';
    },
  },
};
</script>

<style scoped>
.register-main{
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 20px;
}
.register {
  padding: 20px;
  text-align: center;
}

h2 {
  font-size: 2rem;
  margin-bottom: 20px;
}

.auth-section {
  flex: 1;
  background-color: #f9f9f9;
  padding: 20px;
  border: 1px solid #ddd;
  border-radius: 4px;
  width: 500px;
  min-width: 400px;
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
  width: 90%;
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

.success {
  color: #4caf50;
  margin-top: 15px;
}
</style>
