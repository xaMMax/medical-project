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
    <div v-if="errorMessage" class="error">
      <p v-for="(message, index) in errorMessage" :key="index">{{ message }}</p>
    </div>
    <p v-if="successMessage" class="success">{{ successMessage }}</p>
  </div>
</template>

<script>
import apiClient from '@/services/apiClient';

export default {
  name: 'ChangePasswordComponent',
  data() {
    return {
      form: {
        oldPassword: '',
        newPassword: '',
        confirmPassword: '',
      },
      errorMessage: [],
      successMessage: '',
    };
  },
  methods: {
    changePassword() {
      if (this.form.newPassword !== this.form.confirmPassword) {
        this.errorMessage = ['Новий пароль та підтвердження пароля не збігаються.'];
        return;
      }

      apiClient
        .put('change-password/', {
          old_password: this.form.oldPassword,
          new_password: this.form.newPassword,
        })
        .then(() => {
          this.successMessage = 'Пароль успішно змінено.';
          this.errorMessage = [];
          this.form.oldPassword = '';
          this.form.newPassword = '';
          this.form.confirmPassword = '';
        })
        .catch((error) => {
          if (error.response && error.response.data) {
            const errors = error.response.data;
            this.errorMessage = [];

            if (errors.old_password) {
              this.errorMessage.push(`Старий пароль: ${errors.old_password.join(' ')}`);
            }

            if (errors.new_password) {
              this.errorMessage.push(`Новий пароль: ${errors.new_password.join(' ')}`);
            }

            if (!errors.old_password && !errors.new_password) {
              this.errorMessage.push('Помилка при зміні пароля. Перевірте введені дані.');
            }
          } else {
            this.errorMessage = ['Невідома помилка. Спробуйте ще раз пізніше.'];
          }
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
