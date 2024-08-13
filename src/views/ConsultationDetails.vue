<template>
  <div class="consultation-details-page">
    <h1>Деталі консультації</h1>
    <!-- Відображення деталей консультації -->
    <ConsultationDetailsComponent :consultationId="$route.params.id" />
    <!-- Дії з консультацією, доступні лише для ролей лікаря або суперкористувача -->
    <ConsultationActionsComponent
      :consultationId="$route.params.id"
      :isDoctor="isDoctor"
      :isSuperuser="isSuperuser"
    />
  </div>
</template>

<script>
import ConsultationDetailsComponent from '@/components/ConsultationDetailsComponent.vue';
import ConsultationActionsComponent from '@/components/ConsultationActionsComponent.vue';

export default {
  name: 'ConsultationDetailsPage',
  components: {
    ConsultationDetailsComponent,
    ConsultationActionsComponent,
  },
  data() {
    return {
      isDoctor: false,
      isSuperuser: false,
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
      };

      this.isDoctor = user.is_doctor;
      this.isSuperuser = user.is_superuser;
    },
  },
};
</script>

<style scoped>
.consultation-details-page {
  padding: 20px;
}

h1 {
  font-size: 2.5rem;
  margin-bottom: 20px;
  text-align: center;
}

.consultation-details-page > *:not(:last-child) {
  margin-bottom: 20px;
}
</style>
