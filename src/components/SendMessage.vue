<template>
  <div class="send-message">
    <h1>Надіслати повідомлення</h1>
    <form @submit.prevent="submitMessage">
      <div>
        <label for="content">Повідомлення</label>
        <textarea v-model="content" id="content" required></textarea>
      </div>
      <button type="submit">Надіслати</button>
    </form>
  </div>
</template>

<script>
import apiClient from "@/services/apiClient";

export default {
  name: 'SendMessage',
  props: {
    recipientId: {
      type: [Number, String],
      required: true,
    },
  },
  data() {
    return {
      content: '',
    };
  },
  methods: {
    submitMessage() {
      apiClient.post('/messages/', {
        sender: this.recipientId,
        recipient: this.recipientId,
        content: this.content,
      })
          .then(() => {
            this.$router.push('/dashboard');
            alert('Повідомлення надіслано успішно!');
          })
          .catch(error => {
            console.error('Error sending message:', error);
          });
    }
  }
};
</script>

<style scoped>
.send-message {
  padding: 20px;
}

h1 {
  font-size: 2rem;
  margin-bottom: 20px;
}

form {
  display: flex;
  flex-direction: column;
}

textarea {
  padding: 10px;
  font-size: 1rem;
  margin-bottom: 20px;
}

button {
  background-color: #42b983;
  color: white;
  padding: 10px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

button:hover {
  background-color: #369f72;
}
</style>
