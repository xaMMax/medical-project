export const UserRoleMixin = {
  data() {
    return {
      isDoctor: false,
      isSuperuser: false,
      isUser: false,
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
        is_user: localStorage.getItem('isUser') === 'true',
      };

      this.isDoctor = user.is_doctor;
      this.isSuperuser = user.is_superuser;
      this.isUser = user.is_user;
    },
  },
};
