<template>
  <div class="create-consultation">
    <h2>Створити нову консультацію</h2>
    <form @submit.prevent="submitConsultation">
      <div class="form-group">
        <label for="doctor">Лікар</label>
        <p id="doctor"> {{ doctorName }} </p>

        <label for="patient">Пацієнт</label>
        <select v-model="form.patient" id="patient" required>
          <option v-for="patient in patients" :key="patient.id" :value="patient.id">
            {{ patient.first_name }} {{ patient.last_name }}
          </option>
        </select>
      </div>

      <div class="form-group">
        <label for="date">Дата</label>
        <input type="date" v-model="form.date" id="date" required />
      </div>

      <div class="form-group">
        <label for="time">Час</label>
        <input type="time" v-model="form.time" id="time" required />
      </div>

      <div class="form-group">
        <label for="notes">Примітки</label>
        <textarea v-model="form.notes" id="notes" rows="4" placeholder="Введіть примітки..."></textarea>
      </div>

      <button type="submit">Створити консультацію</button>
    </form>
    <p v-if="successMessage" class="success">{{ successMessage }}</p>
  </div>
</template>

<script>
import apiClient from '@/services/apiClient';

export default {
  name: 'CreateConsultationComponent',
  data() {
    return {
      form: {
        patient: '',
        date: '',
        time: '',
        notes: '',
      },
      patients: [],
      doctorId: null,  // Зберігаємо ID доктора
      doctorName: '',  // Зберігаємо ім'я доктора
      successMessage: '',  // Повідомлення про успіх
    };
  },
  methods: {
    fetchPatients() {
      apiClient
          .get('users/')
          .then((response) => {
            // Фільтруємо тільки пацієнтів
            this.patients = response.data.filter(user => !user.is_doctor && !user.is_superuser && !user.is_staff);
          })
          .catch((error) => {
            console.error('Error fetching patients:', error);
            if (error.response && error.response.status === 401) {
              this.$router.push('/login');
            }
          });
    },
    submitConsultation() {
      if (!this.doctorId) {
        console.error('Доктор не знайдений у localStorage');
        return;
      }

      const consultationData = {
        ...this.form,
        doctor: this.doctorId,  // Додаємо ID доктора до даних для відправки
      };

      apiClient
          .post('consultations/', consultationData)
          .then(() => {
            this.successMessage = 'Консультацію успішно створено!';

            // Очищуємо форму після успішного створення консультації
            this.form.patient = '';
            this.form.date = '';
            this.form.time = '';
            this.form.notes = '';

            // Очищаємо повідомлення через 5 секунд
            setTimeout(() => {
              this.successMessage = '';
            }, 5000);
          })
          .catch((error) => {
            console.error('Error creating consultation:', error);
          });
    },
  },
  created() {
    // Завантажуємо дані лікаря з localStorage
    this.doctorId = localStorage.getItem('doctorId');
    this.doctorName = localStorage.getItem('doctorName');

    console.log('Loaded doctorId:', this.doctorId);
    console.log('Loaded doctorName:', this.doctorName);

    // Завантажуємо список пацієнтів
    this.fetchPatients();
  },
};
</script>

<style scoped>
.create-consultation {
  padding: 20px;
}

h2 {
  font-size: 2rem;
  margin-bottom: 20px;
}

.form-group {
  margin-bottom: 15px;
}

label {
  display: block;
  margin-bottom: 5px;
  font-weight: bold;
}

input,
select,
textarea {
  width: 100%;
  padding: 8px;
  font-size: 1rem;
  border: 1px solid #ccc;
  border-radius: 4px;
}

button {
  font-size: 1rem;
  padding: 10px 20px;
  background-color: #42b983;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

button:hover {
  background-color: #369f72;
}

.success {
  color: #4caf50;
  margin-top: 15px;
  font-weight: bold;
}
</style>
