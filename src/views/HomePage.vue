<template>
  <div class="home-page">
    <WelcomeComponent />
<!--    <ConsultationsListComponent />-->
  </div>
</template>

<script>
import WelcomeComponent from '@/components/WelcomeComponent.vue';
// import ConsultationsListComponent from '@/components/ConsultationsListComponent.vue';

export default {
  name: 'HomePage',
  components: {
    WelcomeComponent,
    // ConsultationsListComponent,
  },
};
</script>

<style scoped>
.home-page {
  padding: 20px;
}

.home-page > *:not(:last-child) {
  margin-bottom: 20px;
}
</style>
