<template>
  <div class="login-page">
    <div class="auth-container">
      <div class="auth-section">
        <LoginComponent />
      </div>
<!--      <div class="auth-section">-->
<!--        <h2>Реєстрація</h2>-->
<!--        <RegisterComponent />-->
<!--      </div>-->
    </div>
  </div>
</template>

<script>
import LoginComponent from '@/components/LoginComponent.vue';
// import RegisterComponent from '@/components/RegisterComponent.vue';

export default {
  name: 'LoginPage',
  components: {
    LoginComponent,
    // RegisterComponent,
  },
};
</script>

<style scoped>
.login-page {
  padding: 20px;
  max-width: 800px;
  margin: 0 auto;
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 20px;
}

h1 {
  font-size: 2.5rem;
  margin-bottom: 20px;
}

.auth-container {
  display: flex;
  justify-content: center;
  gap: 20px;
  width: 500px;
  min-width: 400px;
}

.auth-section {
  flex: 1;
  background-color: #f9f9f9;
  padding: 20px;
  border: 1px solid #ddd;
  border-radius: 4px;
}

h2 {
  font-size: 1.5rem;
  margin-bottom: 15px;
}
</style>
