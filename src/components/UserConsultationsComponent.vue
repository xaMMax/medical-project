<template>
  <div class="user-consultations">
    <h2>Консультації для {{ isDoctor ? 'Доктора' : 'Пацієнта' }}</h2>
    <p v-if="isLoaded && filteredConsultations.length === 0">У вас немає запланованих консультацій.</p>
    <ul v-else-if="isLoaded && filteredConsultations.length">
      <li v-for="consultation in filteredConsultations" :key="consultation.id">
          <router-link :to="{ name: 'consultationDetails', params: { id: consultation.id } }">
          Консультація з {{ isDoctor ? consultation.patient_name : consultation.doctor_name }}
          на {{ consultation.date }} о {{ consultation.time }}
        </router-link>
      </li>
    </ul>
    <p v-else>Завантаження даних...</p>
  </div>
</template>

<script>
import apiClient from '@/services/apiClient';

export default {
  name: 'UserConsultationsComponent',
  data() {
    return {
      consultations: [],
      users: [],
      currentUser: null,
      isLoaded: false,
    };
  },
  computed: {
    isDoctor() {
      return this.currentUser && this.currentUser.is_doctor;
    },
    filteredConsultations() {
      if (!this.currentUser) return [];
      return this.consultations.filter(consultation =>
        consultation.doctor === this.currentUser.id || consultation.patient === this.currentUser.id
      ).map(consultation => ({
        ...consultation,
        id: consultation.id.toString() // переконайтеся, що id - це рядок
      }));
    }
  },
  methods: {
    fetchConsultations() {
      apiClient
        .get('consultations/')
        .then((response) => {
          this.consultations = response.data;
          this.fetchUsers();
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
          })
          .finally(() => {
            this.isLoaded = true;
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
