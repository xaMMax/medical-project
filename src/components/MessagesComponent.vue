<template>
  <div class="messages">
    <h2>Мої Повідомлення</h2>
    <p v-if="!messages.length">У вас немає повідомлень.</p>
    <ul v-else>
      <li v-for="message in messages" :key="message.id" :class="{ unread: !message.is_read }">
        <strong>{{ message.sender_name }}</strong> до {{ message.recipient_name }}: {{ message.content }}
        <span class="timestamp">{{ formatDate(message.created_at) }}</span>
      </li>
    </ul>
  </div>
</template>

<script>
import apiClient from '@/services/apiClient';  // Імпортуємо apiClient

export default {
  name: 'MessagesComponent',
  data() {
    return {
      messages: [],
    };
  },
  methods: {
    fetchMessages() {
      apiClient
        .get('messages/')  // Використовуємо apiClient для запиту
        .then((response) => {
          this.messages = response.data;
        })
        .catch((error) => {
          console.error('Error fetching messages:', error);
          if (error.response && error.response.status === 401) {
            this.$router.push('/login');
          }
        });
    },
    formatDate(dateString) {
      const options = { year: 'numeric', month: 'long', day: 'numeric', hour: '2-digit', minute: '2-digit' };
      return new Date(dateString).toLocaleDateString(undefined, options);
    },
  },
  created() {
    this.fetchMessages();
  },
};
</script>

<style scoped>
.messages {
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
  padding: 10px;
  border-bottom: 1px solid #ddd;
}

li.unread {
  font-weight: bold;
  background-color: #f5f5f5;
}

.timestamp {
  display: block;
  font-size: 0.9rem;
  color: #888;
  margin-top: 5px;
}

strong {
  color: #42b983;
}
</style>
