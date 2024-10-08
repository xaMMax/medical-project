<template>
  <div class="consultations-list">
    <h2>Мої Консультації</h2>
    <p v-if="!consultations.length">У вас немає запланованих консультацій.</p>
    <ul v-else>
      <li v-for="consultation in filteredConsultations" :key="consultation.id">
        <router-link :to="`/consultations/${consultation.id}`">
          Консультація з {{ consultation.doctor_name }} для {{ consultation.patient_name }} на {{ consultation.date }} о {{ consultation.time }}
        </router-link>
      </li>
    </ul>
  </div>
</template>

<script>
import apiClient from '@/services/apiClient';

export default {
  name: 'ConsultationsListComponent',
  data() {
    return {
      consultations: [],
      users: [],
      currentUser: null,  // Додаємо стан для поточного користувача
    };
  },
  computed: {
    filteredConsultations() {
      if (!this.currentUser) return [];
      return this.consultations.filter(consultation =>
          consultation.doctor === this.currentUser.id || consultation.patient === this.currentUser.id
      );
    }
  },
  methods: {
    fetchConsultations() {
      apiClient
          .get('consultations/')
          .then((response) => {
            this.consultations = response.data;
            this.fetchUsers();  // Після отримання консультацій завантажуємо користувачів
          })
          .catch((error) => {
            console.error('Error fetching consultations:', error);
            if (error.response && error.response.status === 401) {
              this.$router.push('/login');
            }
          });
    },
    fetchUsers() {
      apiClient
          .get('users/')
          .then((response) => {
            this.users = response.data;
            this.currentUser = this.users.find(user => user.email === localStorage.getItem('userEmail'));
            this.mapUserDetailsToConsultations();
          })
          .catch((error) => {
            console.error('Error fetching users:', error);
          });
    },
    mapUserDetailsToConsultations() {
      this.consultations = this.consultations.map(consultation => {
        const doctor = this.users.find(user => user.id === consultation.doctor);
        const patient = this.users.find(user => user.id === consultation.patient);
        return {
          ...consultation,
          doctor_name: doctor ? `${doctor.first_name} ${doctor.last_name}` : 'Не вказано',
          patient_name: patient ? `${patient.first_name} ${patient.last_name}` : 'Не вказано',
        };
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
