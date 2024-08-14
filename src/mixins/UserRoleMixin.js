// src/mixins/UserRoleMixin.js
export const UserRoleMixin = {
  data() {
    return {
      isDoctor: false,
      isSuperuser: false,
    };
  },
  created() {
    this.checkUserRoles();
  },
  methods: {
    checkUserRoles() {
      const user = {
        is_doctor: localStorage.getItem('isDoctor') === 'true',
        is_superuser: localStorage.getItem('isSuperuser') === 'true',
      };

      this.isDoctor = user.is_doctor;
      this.isSuperuser = user.is_superuser;
    },
  },
};
