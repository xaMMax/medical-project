<template>
  <div class="consultation-details-page">
    <ConsultationDetailsComponent :consultationId="$route.params.id" />
    <ConsultationActionsComponent
      :consultationId="$route.params.id"
      :isDoctor="isDoctor"
      :isSuperuser="isSuperuser"
    />
  </div>
</template>

<script>
import ConsultationDetailsComponent from '@/components/ConsultationDetailsComponent.vue';
import ConsultationActionsComponent from '@/components/ConsultationActionsComponent.vue';
import { UserRoleMixin } from '@/mixins/UserRoleMixin';

export default {
  name: 'ConsultationDetailsPage',
  components: {
    ConsultationDetailsComponent,
    ConsultationActionsComponent,
  },
  mixins: [UserRoleMixin],
};
</script>

<style scoped>
.consultation-details-page {
  padding: 20px;
}
</style>
