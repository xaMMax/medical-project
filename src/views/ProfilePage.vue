<template>
  <div class="profile-page">
    <h1>Профіль користувача</h1>
    <div class="profile-section">
      <UserProfileComponent />
    </div>
    <div class="profile-section">
      <EditProfileComponent />
    </div>
    <div class="profile-section">
      <ChangePasswordComponent />
    </div>
  </div>
</template>

<script>
import UserProfileComponent from '@/components/UserProfileComponent.vue';
import ChangePasswordComponent from '@/components/ChangePasswordComponent.vue';
import EditProfileComponent from '@/components/EditProfileComponent.vue';

export default {
  name: 'ProfilePage',
  components: {
    UserProfileComponent,
    ChangePasswordComponent,
    EditProfileComponent,
  },
};
</script>

<style scoped>
.profile-page {
  padding: 20px;
}

h1 {
  font-size: 2.5rem;
  margin-bottom: 20px;
  text-align: center;
}

.profile-section {
  margin-bottom: 20px;
  padding: 20px;
  background-color: #f9f9f9;
  border: 1px solid #ddd;
  border-radius: 4px;
}
</style>
