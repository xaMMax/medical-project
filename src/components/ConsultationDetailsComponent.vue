<template>
  <div class="consultation-details" v-if="consultation">
    <h2>Деталі консультації</h2>
    <div class="details">
      <p><strong>Доктор:</strong> {{ consultation.doctor_name }}</p>
      <p><strong>Пацієнт:</strong> {{ consultation.patient_name }}</p>
      <p><strong>Дата:</strong> {{ consultation.date }}</p>
      <p><strong>Час:</strong> {{ consultation.time }}</p>
      <p><strong>Примітки:</strong></p>
      <p>{{ consultation.notes }}</p>
    </div>
    <div class="actions" v-if="isDoctor || isSuperuser">
      <button @click="editConsultation">Редагувати</button>
      <button @click="deleteConsultation">Видалити</button>
    </div>
  </div>
  <p v-else>Завантаження деталей консультації...</p>
</template>

<script>
import apiClient from '@/services/apiClient';  // Імпортуємо apiClient

export default {
  name: 'ConsultationDetailsComponent',
  data() {
    return {
      consultation: null,
      isDoctor: false,
      isSuperuser: false,
    };
  },
  methods: {
    fetchConsultationDetails() {
      const consultationId = this.$route.params.id;

      apiClient
        .get(`consultations/${consultationId}/`)
        .then((response) => {
          this.consultation = response.data;
          this.isDoctor = response.data.is_doctor; // Якщо API повертає цю інформацію
          this.isSuperuser = response.data.is_superuser; // Якщо API повертає цю інформацію
        })
        .catch((error) => {
          console.error('Error fetching consultation details:', error);
          if (error.response && error.response.status === 401) {
            this.$router.push('/login');
          }
        });
    },
    editConsultation() {
      // Логіка редагування консультації
      this.$router.push(`/consultation/edit/${this.consultation.id}`);
    },
    deleteConsultation() {
      const consultationId = this.consultation.id;

      apiClient
        .delete(`consultations/${consultationId}/`)
        .then(() => {
          this.$router.push('/dashboard');
        })
        .catch((error) => {
          console.error('Error deleting consultation:', error);
        });
    },
  },
  created() {
    this.fetchConsultationDetails();
  },
};
</script>

<style scoped>
.consultation-details {
  padding: 20px;
}

h2 {
  font-size: 2rem;
  margin-bottom: 20px;
}

.details {
  margin-bottom: 20px;
}

.details p {
  font-size: 1.25rem;
  margin: 10px 0;
}

.actions button {
  font-size: 1rem;
  padding: 10px 20px;
  margin-right: 10px;
  background-color: #42b983;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

.actions button:hover {
  background-color: #369f72;
}
</style>
