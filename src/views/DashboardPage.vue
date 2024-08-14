<template>
  <div class="dashboard-page">
    <h1>Панель управління</h1>
    <div class="grid-container">
      <div class="grid-item">
        <UserConsultationsComponent />
      </div>
      <div class="grid-item">
        <MessagesComponent />
      </div>
      <div class="grid-item" v-if="isDoctor">
        <CreateConsultationComponent />
      </div>
      <div class="grid-item" v-if="isSuperuser || isStaff">
        <UserManagementComponent />
      </div>
      <div class="grid-item">
        <DoctorList />
      </div>
    </div>
  </div>
</template>

<script>
import UserConsultationsComponent from '@/components/UserConsultationsComponent.vue';
import MessagesComponent from '@/components/MessagesComponent.vue';
import CreateConsultationComponent from '@/components/CreateConsultationComponent.vue';
import UserManagementComponent from '@/components/UserManagementComponent.vue';
import DoctorList from '@/components/DoctorList.vue'; // Імпортуємо новий компонент

export default {
  name: 'DashboardPage',
  components: {
    UserConsultationsComponent,
    MessagesComponent,
    CreateConsultationComponent,
    UserManagementComponent,
    DoctorList, // Підключаємо новий компонент
  },
  data() {
    return {
      isDoctor: false,
      isSuperuser: false,
      isStaff: false,
    };
  },
  created() {
    this.checkUserRoles();
  },
  methods: {
    checkUserRoles() {
      // Логіка для перевірки ролей користувача
      const user = {
        is_doctor: localStorage.getItem('isDoctor') === 'true',
        is_superuser: localStorage.getItem('isSuperuser') === 'true',
        is_staff: localStorage.getItem('isStaff') === 'true',
      };

      this.isDoctor = user.is_doctor;
      this.isSuperuser = user.is_superuser;
      this.isStaff = user.is_staff;
    },
  },
};
</script>

<style scoped>
.dashboard-page {
  padding: 20px;
}

h1 {
  font-size: 2.5rem;
  margin-bottom: 20px;
  text-align: center;
}

.grid-container {
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 20px;
}

.grid-item {
  background-color: #f9f9f9;
  padding: 20px;
  border: 1px solid #ddd;
  border-radius: 4px;
}
</style>
