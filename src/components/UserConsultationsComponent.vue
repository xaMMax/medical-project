<template>
  <div class="user-consultations">
    <h2>Консультації для {{ isDoctor ? 'Доктора' : 'Пацієнта' }}</h2>
    <p v-if="isLoaded && consultations.length === 0">У вас немає запланованих консультацій.</p>
    <ul v-else-if="isLoaded && consultations.length">
      <li v-for="consultation in consultations" :key="consultation.id">
        <router-link :to="`/consultation/${consultation.id}`">
          Консультація з {{ isDoctor ? consultation.patient_name : consultation.doctor_name }}
          на {{ consultation.date }} о {{ consultation.time }}
        </router-link>
      </li>
    </ul>
  </div>
</template>

<script>
import apiClient from '@/services/apiClient';  // Імпортуємо apiClient

export default {
  name: 'UserConsultationsComponent',
  data() {
    return {
      consultations: [],  // Ініціалізуйте як порожній масив
      isDoctor: false,    // Визначає, чи користувач є доктором
      isLoaded: false,    // Позначка для завершення завантаження даних
    };
  },
  methods: {
    fetchUserConsultations() {
      apiClient
        .get('consultations/')  // Використовуємо apiClient для запиту
        .then((response) => {
          this.consultations = response.data.consultations || [];  // Переконайтеся, що дані є масивом
          this.isDoctor = response.data.is_doctor;
        })
        .catch((error) => {
          console.error('Error fetching consultations:', error);
          if (error.response && error.response.status === 401) {
            this.$router.push('/login');
          }
        })
        .finally(() => {
          this.isLoaded = true;  // Оновлення позначки після завершення завантаження
        });
    },
  },
  created() {
    this.fetchUserConsultations();
  },
};
</script>

<style scoped>
.user-consultations {
  padding: 20px;
}

h2 {
  font-size: 2rem;
  margin-bottom: 20px;
}

ul {
  list-style: none;
  padding: 0;
}

li {
  font-size: 1.25rem;
  margin-bottom: 10px;
}

a {
  color: #42b983;
  text-decoration: none;
}

a:hover {
  text-decoration: underline;
}
</style>
