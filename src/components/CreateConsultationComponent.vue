<template>
  <div class="create-consultation">
    <h2>Створити нову консультацію</h2>
    <form @submit.prevent="submitConsultation">
      <div class="form-group">
        <label for="patient">Пацієнт</label>
        <select v-model="form.patient" id="patient" required>
          <option v-for="patient in patients" :key="patient.id" :value="patient.id">
            {{ patient.name }}
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
  </div>
</template>

<script>
import axios from 'axios';

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
    };
  },
  methods: {
    fetchPatients() {
      const token = localStorage.getItem('accessToken');
      axios
        .get('/api/users/', {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        })
        .then((response) => {
          this.patients = response.data.filter(user => !user.is_doctor | !user.is_superuser | !user.is_staff);
        })
        .catch((error) => {
          console.error('Error fetching patients:', error);
          if (error.response.status === 401) {
            this.$router.push('/login');
          }
        });
    },
    submitConsultation() {
      const token = localStorage.getItem('accessToken');
      axios
        .post('/api/consultations/', this.form, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        })
        .then(() => {
          this.$router.push('/dashboard'); // Після успішного створення консультації перенаправляємо на Dashboard
        })
        .catch((error) => {
          console.error('Error creating consultation:', error);
        });
    },
  },
  created() {
    this.fetchPatients(); // Завантажуємо список пацієнтів при створенні компонента
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
</style>
