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
  </div>
  <p v-else>Завантаження деталей консультації...</p>
</template>

<script>
import apiClient from "@/services/apiClient";

export default {
  name: 'ConsultationDetailsComponent',
  props: {
    consultationId: {
      type: [Number, String],
      required: true,
    },
  },
  data() {
    return {
      consultation: null,
    };
  },
  methods: {
    fetchConsultationDetails() {
      apiClient.get(`consultations/${this.consultationId}/`)
        .then((response) => {
          this.consultation = response.data;
        })
        .catch((error) => {
          console.error('Error fetching consultation details:', error);
          if (error.response && error.response.status === 401) {
            this.$router.push('/login');
          }
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
</style>
