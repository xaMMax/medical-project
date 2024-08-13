<template>
  <div class="change-password">
    <h2>Зміна пароля</h2>
    <form @submit.prevent="changePassword">
      <div class="form-group">
        <label for="oldPassword">Старий пароль</label>
        <input type="password" v-model="form.oldPassword" id="oldPassword" required />
      </div>

      <div class="form-group">
        <label for="newPassword">Новий пароль</label>
        <input type="password" v-model="form.newPassword" id="newPassword" required />
      </div>

      <div class="form-group">
        <label for="confirmPassword">Підтвердження нового пароля</label>
        <input type="password" v-model="form.confirmPassword" id="confirmPassword" required />
      </div>

      <button type="submit">Змінити пароль</button>
    </form>
    <p v-if="errorMessage" class="error">{{ errorMessage }}</p>
    <p v-if="successMessage" class="success">{{ successMessage }}</p>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  name: 'ChangePasswordComponent',
  data() {
    return {
      form: {
        oldPassword: '',
        newPassword: '',
        confirmPassword: '',
      },
      errorMessage: '',
      successMessage: '',
    };
  },
  methods: {
    changePassword() {
      if (this.form.newPassword !== this.form.confirmPassword) {
        this.errorMessage = 'Новий пароль та підтвердження пароля не збігаються.';
        return;
      }

      const token = localStorage.getItem('accessToken');
      axios
        .put(
          '/api/change-password/',
          {
            old_password: this.form.oldPassword,
            new_password: this.form.newPassword,
          },
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        )
        .then(() => {
          this.successMessage = 'Пароль успішно змінено.';
          this.errorMessage = '';
          this.form.oldPassword = '';
          this.form.newPassword = '';
          this.form.confirmPassword = '';
        })
        .catch((error) => {
          console.error('Error changing password:', error);
          this.errorMessage = 'Помилка при зміні пароля. Перевірте введені дані.';
          this.successMessage = '';
        });
    },
  },
};
</script>

<style scoped>
.change-password {
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

.success {
  color: #4caf50;
  margin-top: 15px;
}
</style>
