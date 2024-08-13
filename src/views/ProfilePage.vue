<template>
  <div class="profile-page">
    <h1>Профіль користувача</h1>
    <div class="profile-section">
      <UserProfileComponent />
    </div>
    <div class="profile-section">
      <ChangePasswordComponent />
    </div>
  </div>
</template>

<script>
import UserProfileComponent from '@/components/UserProfileComponent.vue';
import ChangePasswordComponent from '@/components/ChangePasswordComponent.vue';

export default {
  name: 'ProfilePage',
  components: {
    UserProfileComponent,
    ChangePasswordComponent,
  },
};
</script>

<style scoped>
.profile-page {
  padding: 40px 20px;
  max-width: 800px;
  margin: 0 auto;
  background-color: #f4f4f9;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}

h1 {
  font-size: 2.5rem;
  margin-bottom: 30px;
  text-align: center;
  color: #333;
}

.profile-section {
  margin-bottom: 30px;
  padding: 20px;
  background-color: #fff;
  border: 1px solid #e0e0e0;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);
}
</style>
