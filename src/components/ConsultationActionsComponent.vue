<template>
  <div class="consultation-actions" v-if="isAuthorized">
    <h3>Дії з консультацією</h3>
    <button @click="editConsultation">Редагувати консультацію</button>
    <button @click="deleteConsultation" class="danger">Видалити консультацію</button>
  </div>
</template>

<script>
import apiClient from '@/services/apiClient';  // Імпортуємо apiClient

export default {
  name: 'ConsultationActionsComponent',
  props: {
    consultationId: {
      type: Number,
      required: true,
    },
    isDoctor: {
      type: Boolean,
      default: false,
    },
    isSuperuser: {
      type: Boolean,
      default: false,
    },
  },
  computed: {
    isAuthorized() {
      return this.isDoctor || this.isSuperuser;
    },
  },
  methods: {
    editConsultation() {
      // Припустимо, що редагування може бути через форму або іншу дію.
      alert('Редагування консультації ще не налаштоване.');
    },
    deleteConsultation() {
      if (confirm('Ви впевнені, що хочете видалити цю консультацію?')) {
        apiClient
          .delete(`consultations/${this.consultationId}/`)
          .then(() => {
            this.$router.push('/dashboard');
          })
          .catch((error) => {
            console.error('Error deleting consultation:', error);
            alert('Сталася помилка при видаленні консультації.');
          });
      }
    },
  },
};
</script>

<style scoped>
.consultation-actions {
  margin-top: 20px;
  padding: 20px;
  background-color: #f9f9f9;
  border: 1px solid #ddd;
  border-radius: 4px;
}

h3 {
  font-size: 1.5rem;
  margin-bottom: 15px;
}

button {
  font-size: 1rem;
  padding: 10px 20px;
  margin-right: 10px;
  background-color: #42b983;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

button.danger {
  background-color: #f44336;
}

button:hover {
  background-color: #369f72;
}

button.danger:hover {
  background-color: #d32f2f;
}
</style>
