<template>
  <div class="messages">
    <h2>Мої Повідомлення</h2>
    <p v-if="!messages.length">У вас немає повідомлень.</p>
    <ul v-else>
      <li v-for="message in messages" :key="message.id" :class="{ unread: !message.is_read }">
        <strong>Від {{ message.sender_name }}</strong> до {{ message.recipient_name }}: {{ message.content }}
        <span class="timestamp">{{ formatDate(message.created_at) }}</span>
        <button v-if="message.sender !== currentUserId" @click="replyToMessage(message.sender)">Відповісти</button>
      </li>
    </ul>
  </div>
</template>


<script>
import apiClient from '@/services/apiClient';

export default {
  name: 'MessagesComponent',
  data() {
    return {
      messages: [],
      currentUserId: null,
    };
  },
  methods: {
    fetchMessages() {
      apiClient
        .get('/messages/')
        .then((response) => {
          const messages = response.data;
          const userRequests = messages.map(message => {
            return Promise.all([
              apiClient.get(`/users/${message.sender}/`),
              apiClient.get(`/users/${message.recipient}/`)
            ]).then(([senderResponse, recipientResponse]) => {
              message.sender_name = `${senderResponse.data.first_name} ${senderResponse.data.last_name}`;
              message.recipient_name = `${recipientResponse.data.first_name} ${recipientResponse.data.last_name}`;
              return message;
            });
          });
          return Promise.all(userRequests);
        })
        .then((messagesWithNames) => {
          this.messages = messagesWithNames;
          console.log(this.messages);
        })
        .catch((error) => {
          console.error('Error fetching messages:', error);
          if (error.response && error.response.status === 401) {
            this.$router.push('/login');
          }
        });
    },
    fetchCurrentUser() {
      apiClient
        .get('/profile/')
        .then((response) => {
          this.currentUserId = response.data.id;
        })
        .catch((error) => {
          console.error('Error fetching current user:', error);
        });
    },
    formatDate(dateString) {
      const options = {year: 'numeric', month: 'long', day: 'numeric', hour: '2-digit', minute: '2-digit'};
      return new Date(dateString).toLocaleDateString(undefined, options);
    },
    replyToMessage(senderId) {
      this.$router.push({name: 'SendMessage', params: {recipientId: senderId}});
    },
  },
  created() {
    this.fetchMessages();
    this.fetchCurrentUser(); // Завантаження даних про поточного користувача
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

button {
  margin-top: 10px;
  padding: 5px 10px;
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
