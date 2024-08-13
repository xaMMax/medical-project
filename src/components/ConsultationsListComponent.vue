<template>
  <div class="consultations-list">
    <h2>Мої Консультації</h2>
    <p v-if="!consultations.length">У вас немає запланованих консультацій.</p>
    <ul v-else>
      <li v-for="consultation in consultations" :key="consultation.id">
        <router-link :to="`/consultation/${consultation.id}`">
          Консультація з {{ consultation.doctor_name }} для {{ consultation.patient_name }} на {{ consultation.date }} о {{ consultation.time }}
        </router-link>
      </li>
    </ul>
  </div>
</template>

<script>
import apiClient from '@/services/apiClient';  // Імпортуємо apiClient

export default {
  name: 'ConsultationsListComponent',
  data() {
    return {
      consultations: [],
    };
  },
  methods: {
    fetchConsultations() {
      apiClient
        .get('consultations/')  // Використовуємо apiClient для запиту
        .then((response) => {
          this.consultations = response.data;
        })
        .catch((error) => {
          console.error('Error fetching consultations:', error);
          if (error.response && error.response.status === 401) {
            this.$router.push('/login');
          }
        });
    },
  },
  created() {
    this.fetchConsultations();
  },
};
</script>

<style scoped>
.consultations-list {
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
