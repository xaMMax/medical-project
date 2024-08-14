<template>
  <div class="doctor-list">
    <h1>Список Лікарів</h1>
    <ul v-if="doctors.length">
      <li v-for="doctor in doctors" :key="doctor.id">
        <div class="doctor-info">
          <img v-if="doctor.photo" :src="doctor.photo" alt="Фото лікаря" class="doctor-photo"/>
          <p><strong>{{ doctor.first_name }} {{ doctor.last_name }}</strong></p>
          <p>{{ doctor.email }}</p>
          <button @click="sendMessage(doctor.id)">Написати повідомлення</button>
        </div>
      </li>
    </ul>
    <p v-else>Завантаження списку лікарів...</p>
  </div>
</template>

<script>
import apiClient from "@/services/apiClient";

export default {
  name: 'DoctorList',
  data() {
    return {
      doctors: [],
    };
  },
  methods: {
    fetchDoctors() {
      apiClient.get('/api/users/doctors/')
        .then(response => {
          this.doctors = response.data;
        })
        .catch(error => {
          console.error('Error fetching doctors:', error);
        });
    },
    sendMessage(doctorId) {
      // Перенаправляємо користувача на сторінку надсилання повідомлення або відкриваємо модальне вікно
      this.$router.push({ name: 'SendMessage', params: { recipientId: doctorId } });
    }
  },
  created() {
    this.fetchDoctors();
  },
};
</script>

<style scoped>
.doctor-list {
  padding: 20px;
}

h1 {
  font-size: 2rem;
  margin-bottom: 20px;
}

.doctor-info {
  display: flex;
  align-items: center;
  margin-bottom: 20px;
}

.doctor-photo {
  width: 50px;
  height: 50px;
  border-radius: 50%;
  margin-right: 15px;
}

button {
  background-color: #42b983;
  color: white;
  padding: 10px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  margin-left: auto;
}

button:hover {
  background-color: #369f72;
}
</style>
