<template>
  <div class="welcome">
    <h1>Welcome to the Consultation App</h1>
    <p>
      Це додаток для проведення онлайн-консультацій. Ви можете увійти до системи, щоб переглянути свої консультації, надіслати повідомлення або оновити свій профіль.
    </p>
    <p v-if="!isAuthenticated">
      Будь ласка, <router-link to="/login">увійдіть</router-link> або <router-link to="/register">зареєструйтесь</router-link>, щоб отримати доступ до повного функціоналу.
    </p>
    <p v-if="isAuthenticated">
      Ви увійшли до системи як {{ userEmail }}. Перейдіть до <router-link to="/dashboard">Панелі управління</router-link>, щоб переглянути свої консультації або оновити профіль.
    </p>
  </div>
</template>

<script>
export default {
  name: 'WelcomeComponent',
  data() {
    return {
      isAuthenticated: !!localStorage.getItem('accessToken'),
      userEmail: localStorage.getItem('userEmail'), // Якщо email зберігається після входу
    };
  },
};
</script>

<style scoped>
.welcome {
  text-align: center;
  padding: 20px;
}

h1 {
  font-size: 2.5rem;
  margin-bottom: 20px;
}

p {
  font-size: 1.25rem;
  color: #555;
}

a {
  color: #42b983;
  text-decoration: none;
}

a:hover {
  text-decoration: underline;
}
</style>
