(function(){"use strict";var e={736:function(e,t,o){var s=o(5130),r=o(6768);const a={id:"app"};function n(e,t,o,s,n,i){const l=(0,r.g2)("router-link"),u=(0,r.g2)("router-view");return(0,r.uX)(),(0,r.CE)("div",a,[(0,r.Lk)("header",null,[(0,r.Lk)("nav",null,[(0,r.bF)(l,{to:"/"},{default:(0,r.k6)((()=>[(0,r.eW)("Home")])),_:1}),(0,r.eW)(" | "),n.isAuthenticated?(0,r.Q3)("",!0):((0,r.uX)(),(0,r.Wv)(l,{key:0,to:"/login"},{default:(0,r.k6)((()=>[(0,r.eW)("Login")])),_:1})),(0,r.eW)(" | "),n.isAuthenticated?(0,r.Q3)("",!0):((0,r.uX)(),(0,r.Wv)(l,{key:1,to:"/register"},{default:(0,r.k6)((()=>[(0,r.eW)("Register")])),_:1})),(0,r.eW)(" | "),n.isAuthenticated?((0,r.uX)(),(0,r.Wv)(l,{key:2,to:"/profile"},{default:(0,r.k6)((()=>[(0,r.eW)("Profile")])),_:1})):(0,r.Q3)("",!0),(0,r.eW)(" | "),n.isAuthenticated?((0,r.uX)(),(0,r.Wv)(l,{key:3,to:"/dashboard"},{default:(0,r.k6)((()=>[(0,r.eW)("Dashboard")])),_:1})):(0,r.Q3)("",!0),(0,r.eW)(" | "),n.isAuthenticated?((0,r.uX)(),(0,r.Wv)(l,{key:4,to:"/consultations"},{default:(0,r.k6)((()=>[(0,r.eW)("Consultations")])),_:1})):(0,r.Q3)("",!0),(0,r.eW)(" | "),n.isAuthenticated?((0,r.uX)(),(0,r.CE)("button",{key:5,onClick:t[0]||(t[0]=(...e)=>i.logout&&i.logout(...e))},"Logout")):(0,r.Q3)("",!0)])]),(0,r.Lk)("main",null,[(0,r.bF)(u)])])}o(4114);var i={name:"App",data(){return{isAuthenticated:!!localStorage.getItem("accessToken")}},methods:{logout(){localStorage.removeItem("accessToken"),localStorage.removeItem("refreshToken"),this.isAuthenticated=!1,this.$router.push("/login")},checkAuthStatus(){this.isAuthenticated=!!localStorage.getItem("accessToken")}},created(){this.checkAuthStatus(),this.$router.beforeEach(((e,t,o)=>{this.checkAuthStatus(),o()}))}},l=o(1241);const u=(0,l.A)(i,[["render",n]]);var c=u,d=o(1387);const p={class:"home-page"};function m(e,t,o,s,a,n){const i=(0,r.g2)("WelcomeComponent");return(0,r.uX)(),(0,r.CE)("div",p,[(0,r.bF)(i)])}var f=o(4232);const h=e=>((0,r.Qi)("data-v-02da878c"),e=e(),(0,r.jt)(),e),g={class:"welcome"},k=h((()=>(0,r.Lk)("h1",null,"Welcome to the Consultation App",-1))),v=h((()=>(0,r.Lk)("p",null," Це додаток для проведення онлайн-консультацій. Ви можете увійти до системи, щоб переглянути свої консультації, надіслати повідомлення або оновити свій профіль. ",-1))),L={key:0},b={key:1};function C(e,t,o,s,a,n){const i=(0,r.g2)("router-link");return(0,r.uX)(),(0,r.CE)("div",g,[k,v,a.isAuthenticated?(0,r.Q3)("",!0):((0,r.uX)(),(0,r.CE)("p",L,[(0,r.eW)(" Будь ласка, "),(0,r.bF)(i,{to:"/login"},{default:(0,r.k6)((()=>[(0,r.eW)("увійдіть")])),_:1}),(0,r.eW)(" або "),(0,r.bF)(i,{to:"/register"},{default:(0,r.k6)((()=>[(0,r.eW)("зареєструйтесь")])),_:1}),(0,r.eW)(", щоб отримати доступ до повного функціоналу. ")])),a.isAuthenticated?((0,r.uX)(),(0,r.CE)("p",b,[(0,r.eW)(" Ви увійшли до системи як "+(0,f.v_)(a.userEmail)+". Перейдіть до ",1),(0,r.bF)(i,{to:"/dashboard"},{default:(0,r.k6)((()=>[(0,r.eW)("Панелі управління")])),_:1}),(0,r.eW)(", щоб переглянути свої консультації або оновити профіль. ")])):(0,r.Q3)("",!0)])}var _={name:"WelcomeComponent",data(){return{isAuthenticated:!!localStorage.getItem("accessToken"),userEmail:localStorage.getItem("userEmail")}}};const y=(0,l.A)(_,[["render",C],["__scopeId","data-v-02da878c"]]);var E=y,w={name:"HomePage",components:{WelcomeComponent:E}};const U=(0,l.A)(w,[["render",m],["__scopeId","data-v-c05cd244"]]);var S=U;const P=e=>((0,r.Qi)("data-v-8596208c"),e=e(),(0,r.jt)(),e),A={class:"login-page"},X=P((()=>(0,r.Lk)("h1",null,"Вхід до системи",-1))),I={class:"auth-container"},D={class:"auth-section"},$=P((()=>(0,r.Lk)("h2",null,"Увійти",-1))),M={class:"auth-section"},F=P((()=>(0,r.Lk)("h2",null,"Реєстрація",-1)));function W(e,t,o,s,a,n){const i=(0,r.g2)("LoginComponent"),l=(0,r.g2)("RegisterComponent");return(0,r.uX)(),(0,r.CE)("div",A,[X,(0,r.Lk)("div",I,[(0,r.Lk)("div",D,[$,(0,r.bF)(i)]),(0,r.Lk)("div",M,[F,(0,r.bF)(l)])])])}const Q=e=>((0,r.Qi)("data-v-7c748360"),e=e(),(0,r.jt)(),e),j={class:"login"},q=Q((()=>(0,r.Lk)("h2",null,"Вхід",-1))),T={class:"form-group"},V=Q((()=>(0,r.Lk)("label",{for:"email"},"Email",-1))),J={class:"form-group"},x=Q((()=>(0,r.Lk)("label",{for:"password"},"Пароль",-1))),O=Q((()=>(0,r.Lk)("button",{type:"submit"},"Увійти",-1))),R={key:0,class:"error"};function z(e,t,o,a,n,i){return(0,r.uX)(),(0,r.CE)("div",j,[q,(0,r.Lk)("form",{onSubmit:t[2]||(t[2]=(0,s.D$)(((...e)=>i.login&&i.login(...e)),["prevent"]))},[(0,r.Lk)("div",T,[V,(0,r.bo)((0,r.Lk)("input",{type:"email","onUpdate:modelValue":t[0]||(t[0]=e=>n.form.email=e),id:"email",required:""},null,512),[[s.Jo,n.form.email]])]),(0,r.Lk)("div",J,[x,(0,r.bo)((0,r.Lk)("input",{type:"password","onUpdate:modelValue":t[1]||(t[1]=e=>n.form.password=e),id:"password",required:""},null,512),[[s.Jo,n.form.password]])]),O],32),n.errorMessage?((0,r.uX)(),(0,r.CE)("p",R,(0,f.v_)(n.errorMessage),1)):(0,r.Q3)("",!0)])}var B=o(4373);const K="https://xammax.pythonanywhere.com/api/",H=B.A.create({baseURL:K,headers:{"Content-Type":"application/json"}});H.interceptors.request.use((e=>{const t=localStorage.getItem("accessToken");return t&&(e.headers["Authorization"]=`Bearer ${t}`),e})),H.interceptors.response.use((e=>e),(async e=>{const t=e.config;if(401===e.response.status&&!t._retry){t._retry=!0;const e=localStorage.getItem("refreshToken");if(e)try{const{data:o}=await B.A.post(`${K}token/refresh/`,{refresh:e});return localStorage.setItem("accessToken",o.access),t.headers["Authorization"]=`Bearer ${o.access}`,H(t)}catch(o){console.error("Refresh token failed",o),localStorage.removeItem("accessToken"),localStorage.removeItem("refreshToken"),await Gs.push("/login")}else localStorage.removeItem("accessToken"),localStorage.removeItem("refreshToken"),await Gs.push("/login")}return Promise.reject(e)}));var N=H,G={name:"LoginComponent",data(){return{form:{email:"",password:""},errorMessage:""}},methods:{login(){N.post("login/",this.form).then((e=>(console.log("Login successful:",e.data),localStorage.setItem("accessToken",e.data.access),localStorage.setItem("refreshToken",e.data.refresh),localStorage.setItem("userEmail",this.form.email),N.get("users/",{headers:{Authorization:`Bearer ${e.data.access}`}})))).then((e=>{console.log("Fetched users:",e.data);const t=e.data.find((e=>e.email===this.form.email));t?(console.log("Current user found:",t),localStorage.setItem("isDoctor",t.is_doctor),localStorage.setItem("isSuperuser",t.is_superuser),localStorage.setItem("isStaff",t.is_staff),this.$router.push("/dashboard")):(this.errorMessage="Користувача не знайдено.",console.error("User not found"))})).catch((e=>{console.error("Error logging in or fetching users:",e),this.errorMessage="Неправильний email або пароль. Спробуйте ще раз."}))}}};const Y=(0,l.A)(G,[["render",z],["__scopeId","data-v-7c748360"]]);var Z=Y;const ee=e=>((0,r.Qi)("data-v-77dd080a"),e=e(),(0,r.jt)(),e),te={class:"register"},oe=ee((()=>(0,r.Lk)("h2",null,"Реєстрація",-1))),se={class:"form-group"},re=ee((()=>(0,r.Lk)("label",{for:"username"},"Ім'я користувача",-1))),ae={class:"form-group"},ne=ee((()=>(0,r.Lk)("label",{for:"email"},"Email",-1))),ie={class:"form-group"},le=ee((()=>(0,r.Lk)("label",{for:"password"},"Пароль",-1))),ue={class:"form-group"},ce=ee((()=>(0,r.Lk)("label",{for:"confirmPassword"},"Підтвердження пароля",-1))),de=ee((()=>(0,r.Lk)("button",{type:"submit"},"Зареєструватись",-1))),pe={key:0,class:"error"},me={key:1,class:"success"};function fe(e,t,o,a,n,i){return(0,r.uX)(),(0,r.CE)("div",te,[oe,(0,r.Lk)("form",{onSubmit:t[4]||(t[4]=(0,s.D$)(((...e)=>i.register&&i.register(...e)),["prevent"]))},[(0,r.Lk)("div",se,[re,(0,r.bo)((0,r.Lk)("input",{type:"text","onUpdate:modelValue":t[0]||(t[0]=e=>n.form.username=e),id:"username",required:""},null,512),[[s.Jo,n.form.username]])]),(0,r.Lk)("div",ae,[ne,(0,r.bo)((0,r.Lk)("input",{type:"email","onUpdate:modelValue":t[1]||(t[1]=e=>n.form.email=e),id:"email",required:""},null,512),[[s.Jo,n.form.email]])]),(0,r.Lk)("div",ie,[le,(0,r.bo)((0,r.Lk)("input",{type:"password","onUpdate:modelValue":t[2]||(t[2]=e=>n.form.password=e),id:"password",required:""},null,512),[[s.Jo,n.form.password]])]),(0,r.Lk)("div",ue,[ce,(0,r.bo)((0,r.Lk)("input",{type:"password","onUpdate:modelValue":t[3]||(t[3]=e=>n.form.confirmPassword=e),id:"confirmPassword",required:""},null,512),[[s.Jo,n.form.confirmPassword]])]),de],32),n.errorMessage?((0,r.uX)(),(0,r.CE)("p",pe,(0,f.v_)(n.errorMessage),1)):(0,r.Q3)("",!0),n.successMessage?((0,r.uX)(),(0,r.CE)("p",me,(0,f.v_)(n.successMessage),1)):(0,r.Q3)("",!0)])}var he={name:"RegisterComponent",data(){return{form:{username:"",email:"",password:"",confirmPassword:""},errorMessage:"",successMessage:""}},methods:{register(){this.form.password===this.form.confirmPassword?N.post("register/",{username:this.form.username,email:this.form.email,password:this.form.password}).then((()=>{this.successMessage="Реєстрація пройшла успішно. Тепер ви можете увійти до системи.",this.errorMessage="",this.clearForm()})).catch((e=>{console.error("Error during registration:",e),this.errorMessage="Помилка при реєстрації. Перевірте введені дані.",this.successMessage=""})):this.errorMessage="Пароль та підтвердження пароля не збігаються."},clearForm(){this.form.username="",this.form.email="",this.form.password="",this.form.confirmPassword=""}}};const ge=(0,l.A)(he,[["render",fe],["__scopeId","data-v-77dd080a"]]);var ke=ge,ve={name:"LoginPage",components:{LoginComponent:Z,RegisterComponent:ke}};const Le=(0,l.A)(ve,[["render",W],["__scopeId","data-v-8596208c"]]);var be=Le;const Ce=e=>((0,r.Qi)("data-v-eacae972"),e=e(),(0,r.jt)(),e),_e={class:"profile-page"},ye=Ce((()=>(0,r.Lk)("h1",null,"Профіль користувача",-1))),Ee={class:"profile-section"},we={class:"profile-section"},Ue={class:"profile-section"};function Se(e,t,o,s,a,n){const i=(0,r.g2)("UserProfileComponent"),l=(0,r.g2)("EditProfileComponent"),u=(0,r.g2)("ChangePasswordComponent");return(0,r.uX)(),(0,r.CE)("div",_e,[ye,(0,r.Lk)("div",Ee,[(0,r.bF)(i)]),(0,r.Lk)("div",we,[(0,r.bF)(l)]),(0,r.Lk)("div",Ue,[(0,r.bF)(u)])])}const Pe=e=>((0,r.Qi)("data-v-ba910676"),e=e(),(0,r.jt)(),e),Ae={class:"user-profile"},Xe=Pe((()=>(0,r.Lk)("h2",null,"Профіль користувача",-1))),Ie={class:"form-group"},De=Pe((()=>(0,r.Lk)("label",{for:"username"},"Ім'я користувача",-1))),$e={class:"form-group"},Me=Pe((()=>(0,r.Lk)("label",{for:"email"},"Email",-1))),Fe={class:"form-group"},We=Pe((()=>(0,r.Lk)("label",{for:"phone"},"Телефон",-1))),Qe={class:"form-group"},je=Pe((()=>(0,r.Lk)("label",{for:"address"},"Адреса",-1))),qe={class:"form-group"},Te=Pe((()=>(0,r.Lk)("label",{for:"bio"},"Біографія",-1))),Ve={class:"form-group"},Je=Pe((()=>(0,r.Lk)("label",{for:"photo"},"Фото профілю",-1))),xe=Pe((()=>(0,r.Lk)("button",{type:"submit"},"Оновити профіль",-1)));function Oe(e,t,o,a,n,i){return(0,r.uX)(),(0,r.CE)("div",Ae,[Xe,(0,r.Lk)("form",{onSubmit:t[6]||(t[6]=(0,s.D$)(((...e)=>i.updateProfile&&i.updateProfile(...e)),["prevent"]))},[(0,r.Lk)("div",Ie,[De,(0,r.bo)((0,r.Lk)("input",{type:"text","onUpdate:modelValue":t[0]||(t[0]=e=>n.profile.username=e),id:"username",required:""},null,512),[[s.Jo,n.profile.username]])]),(0,r.Lk)("div",$e,[Me,(0,r.bo)((0,r.Lk)("input",{type:"email","onUpdate:modelValue":t[1]||(t[1]=e=>n.profile.email=e),id:"email",required:""},null,512),[[s.Jo,n.profile.email]])]),(0,r.Lk)("div",Fe,[We,(0,r.bo)((0,r.Lk)("input",{type:"tel","onUpdate:modelValue":t[2]||(t[2]=e=>n.profile.phone=e),id:"phone"},null,512),[[s.Jo,n.profile.phone]])]),(0,r.Lk)("div",Qe,[je,(0,r.bo)((0,r.Lk)("input",{type:"text","onUpdate:modelValue":t[3]||(t[3]=e=>n.profile.address=e),id:"address"},null,512),[[s.Jo,n.profile.address]])]),(0,r.Lk)("div",qe,[Te,(0,r.bo)((0,r.Lk)("textarea",{"onUpdate:modelValue":t[4]||(t[4]=e=>n.profile.bio=e),id:"bio",rows:"4"},null,512),[[s.Jo,n.profile.bio]])]),(0,r.Lk)("div",Ve,[Je,(0,r.Lk)("input",{type:"file",onChange:t[5]||(t[5]=(...e)=>i.onFileChange&&i.onFileChange(...e)),id:"photo"},null,32)]),xe],32)])}var Re={name:"UserProfileComponent",data(){return{profile:{username:"",email:"",phone:"",address:"",bio:"",photo:null}}},methods:{fetchUserProfile(){const e=localStorage.getItem("accessToken");B.A.get("/api/profile/",{headers:{Authorization:`Bearer ${e}`}}).then((e=>{this.profile=e.data})).catch((e=>{console.error("Error fetching profile:",e),401===e.response.status&&this.$router.push("/login")}))},updateProfile(){const e=localStorage.getItem("accessToken"),t=new FormData;for(const o in this.profile)"photo"===o&&this.profile[o]?t.append(o,this.profile[o],this.profile[o].name):t.append(o,this.profile[o]);B.A.put("/api/profile/",t,{headers:{Authorization:`Bearer ${e}`,"Content-Type":"multipart/form-data"}}).then((()=>{alert("Профіль оновлено успішно")})).catch((e=>{console.error("Error updating profile:",e)}))},onFileChange(e){this.profile.photo=e.target.files[0]}},created(){this.fetchUserProfile()}};const ze=(0,l.A)(Re,[["render",Oe],["__scopeId","data-v-ba910676"]]);var Be=ze;const Ke=e=>((0,r.Qi)("data-v-2a23bc44"),e=e(),(0,r.jt)(),e),He={class:"change-password"},Ne=Ke((()=>(0,r.Lk)("h2",null,"Зміна пароля",-1))),Ge={class:"form-group"},Ye=Ke((()=>(0,r.Lk)("label",{for:"oldPassword"},"Старий пароль",-1))),Ze={class:"form-group"},et=Ke((()=>(0,r.Lk)("label",{for:"newPassword"},"Новий пароль",-1))),tt={class:"form-group"},ot=Ke((()=>(0,r.Lk)("label",{for:"confirmPassword"},"Підтвердження нового пароля",-1))),st=Ke((()=>(0,r.Lk)("button",{type:"submit"},"Змінити пароль",-1))),rt={key:0,class:"error"},at={key:1,class:"success"};function nt(e,t,o,a,n,i){return(0,r.uX)(),(0,r.CE)("div",He,[Ne,(0,r.Lk)("form",{onSubmit:t[3]||(t[3]=(0,s.D$)(((...e)=>i.changePassword&&i.changePassword(...e)),["prevent"]))},[(0,r.Lk)("div",Ge,[Ye,(0,r.bo)((0,r.Lk)("input",{type:"password","onUpdate:modelValue":t[0]||(t[0]=e=>n.form.oldPassword=e),id:"oldPassword",required:""},null,512),[[s.Jo,n.form.oldPassword]])]),(0,r.Lk)("div",Ze,[et,(0,r.bo)((0,r.Lk)("input",{type:"password","onUpdate:modelValue":t[1]||(t[1]=e=>n.form.newPassword=e),id:"newPassword",required:""},null,512),[[s.Jo,n.form.newPassword]])]),(0,r.Lk)("div",tt,[ot,(0,r.bo)((0,r.Lk)("input",{type:"password","onUpdate:modelValue":t[2]||(t[2]=e=>n.form.confirmPassword=e),id:"confirmPassword",required:""},null,512),[[s.Jo,n.form.confirmPassword]])]),st],32),n.errorMessage?((0,r.uX)(),(0,r.CE)("p",rt,(0,f.v_)(n.errorMessage),1)):(0,r.Q3)("",!0),n.successMessage?((0,r.uX)(),(0,r.CE)("p",at,(0,f.v_)(n.successMessage),1)):(0,r.Q3)("",!0)])}var it={name:"ChangePasswordComponent",data(){return{form:{oldPassword:"",newPassword:"",confirmPassword:""},errorMessage:"",successMessage:""}},methods:{changePassword(){this.form.newPassword===this.form.confirmPassword?N.put("change-password/",{old_password:this.form.oldPassword,new_password:this.form.newPassword}).then((()=>{this.successMessage="Пароль успішно змінено.",this.errorMessage="",this.form.oldPassword="",this.form.newPassword="",this.form.confirmPassword=""})).catch((e=>{console.error("Error changing password:",e),this.errorMessage="Помилка при зміні пароля. Перевірте введені дані.",this.successMessage=""})):this.errorMessage="Новий пароль та підтвердження пароля не збігаються."}}};const lt=(0,l.A)(it,[["render",nt],["__scopeId","data-v-2a23bc44"]]);var ut=lt;const ct=e=>((0,r.Qi)("data-v-b45cf400"),e=e(),(0,r.jt)(),e),dt={class:"edit-profile"},pt=ct((()=>(0,r.Lk)("h2",null,"Редагувати профіль",-1))),mt={class:"form-group"},ft=ct((()=>(0,r.Lk)("label",{for:"username"},"Ім'я користувача",-1))),ht={class:"form-group"},gt=ct((()=>(0,r.Lk)("label",{for:"email"},"Email",-1))),kt={class:"form-group"},vt=ct((()=>(0,r.Lk)("label",{for:"phone"},"Телефон",-1))),Lt={class:"form-group"},bt=ct((()=>(0,r.Lk)("label",{for:"address"},"Адреса",-1))),Ct={class:"form-group"},_t=ct((()=>(0,r.Lk)("label",{for:"bio"},"Біографія",-1))),yt={class:"form-group"},Et=ct((()=>(0,r.Lk)("label",{for:"photo"},"Фото профілю",-1))),wt=ct((()=>(0,r.Lk)("button",{type:"submit"},"Оновити профіль",-1)));function Ut(e,t,o,a,n,i){return(0,r.uX)(),(0,r.CE)("div",dt,[pt,(0,r.Lk)("form",{onSubmit:t[7]||(t[7]=(0,s.D$)(((...e)=>i.updateProfile&&i.updateProfile(...e)),["prevent"]))},[(0,r.Lk)("div",mt,[ft,(0,r.bo)((0,r.Lk)("input",{type:"text","onUpdate:modelValue":t[0]||(t[0]=e=>n.profile.username=e),id:"username",required:""},null,512),[[s.Jo,n.profile.username]])]),(0,r.Lk)("div",ht,[gt,(0,r.bo)((0,r.Lk)("input",{type:"email","onUpdate:modelValue":t[1]||(t[1]=e=>n.profile.email=e),id:"email",required:""},null,512),[[s.Jo,n.profile.email]])]),(0,r.Lk)("div",kt,[vt,(0,r.bo)((0,r.Lk)("input",{type:"tel","onUpdate:modelValue":t[2]||(t[2]=e=>n.profile.phone=e),id:"phone"},null,512),[[s.Jo,n.profile.phone]])]),(0,r.Lk)("div",Lt,[bt,(0,r.bo)((0,r.Lk)("input",{type:"text","onUpdate:modelValue":t[3]||(t[3]=e=>n.profile.address=e),id:"address"},null,512),[[s.Jo,n.profile.address]])]),(0,r.Lk)("div",Ct,[_t,(0,r.bo)((0,r.Lk)("textarea",{"onUpdate:modelValue":t[4]||(t[4]=e=>n.profile.bio=e),id:"bio",rows:"4"},null,512),[[s.Jo,n.profile.bio]])]),(0,r.Lk)("div",yt,[Et,(0,r.Lk)("input",{type:"file",onChange:t[5]||(t[5]=(...e)=>i.onFileChange&&i.onFileChange(...e)),id:"photo"},null,32)]),wt,(0,r.Lk)("button",{onClick:t[6]||(t[6]=(...e)=>i.cancelEdit&&i.cancelEdit(...e))},"Скасувати")],32)])}var St={name:"EditProfileComponent",data(){return{profile:{username:"",email:"",phone:"",address:"",bio:"",photo:null}}},methods:{fetchUserProfile(){const e=localStorage.getItem("accessToken");B.A.get("/api/profile/",{headers:{Authorization:`Bearer ${e}`}}).then((e=>{this.profile=e.data})).catch((e=>{console.error("Error fetching profile:",e),401===e.response.status&&this.$router.push("/login")}))},updateProfile(){const e=localStorage.getItem("accessToken"),t=new FormData;for(const o in this.profile)"photo"===o&&this.profile[o]?t.append(o,this.profile[o],this.profile[o].name):t.append(o,this.profile[o]);B.A.put("/api/profile/",t,{headers:{Authorization:`Bearer ${e}`,"Content-Type":"multipart/form-data"}}).then((()=>{alert("Профіль оновлено успішно"),this.$router.push("/profile")})).catch((e=>{console.error("Error updating profile:",e)}))},onFileChange(e){this.profile.photo=e.target.files[0]},cancelEdit(){this.$router.push("/profile")}},created(){this.fetchUserProfile()}};const Pt=(0,l.A)(St,[["render",Ut],["__scopeId","data-v-b45cf400"]]);var At=Pt,Xt={name:"ProfilePage",components:{UserProfileComponent:Be,ChangePasswordComponent:ut,EditProfileComponent:At}};const It=(0,l.A)(Xt,[["render",Se],["__scopeId","data-v-eacae972"]]);var Dt=It;const $t=e=>((0,r.Qi)("data-v-4e12210c"),e=e(),(0,r.jt)(),e),Mt={class:"consultation-details-page"},Ft=$t((()=>(0,r.Lk)("h1",null,"Деталі консультації",-1)));function Wt(e,t,o,s,a,n){const i=(0,r.g2)("ConsultationDetailsComponent"),l=(0,r.g2)("ConsultationActionsComponent");return(0,r.uX)(),(0,r.CE)("div",Mt,[Ft,(0,r.bF)(i,{consultationId:e.$route.params.id},null,8,["consultationId"]),(0,r.bF)(l,{consultationId:e.$route.params.id,isDoctor:a.isDoctor,isSuperuser:a.isSuperuser},null,8,["consultationId","isDoctor","isSuperuser"])])}const Qt=e=>((0,r.Qi)("data-v-984780ea"),e=e(),(0,r.jt)(),e),jt={key:0,class:"consultation-details"},qt=Qt((()=>(0,r.Lk)("h2",null,"Деталі консультації",-1))),Tt={class:"details"},Vt=Qt((()=>(0,r.Lk)("strong",null,"Доктор:",-1))),Jt=Qt((()=>(0,r.Lk)("strong",null,"Пацієнт:",-1))),xt=Qt((()=>(0,r.Lk)("strong",null,"Дата:",-1))),Ot=Qt((()=>(0,r.Lk)("strong",null,"Час:",-1))),Rt=Qt((()=>(0,r.Lk)("p",null,[(0,r.Lk)("strong",null,"Примітки:")],-1))),zt={key:0,class:"actions"},Bt={key:1};function Kt(e,t,o,s,a,n){return a.consultation?((0,r.uX)(),(0,r.CE)("div",jt,[qt,(0,r.Lk)("div",Tt,[(0,r.Lk)("p",null,[Vt,(0,r.eW)(" "+(0,f.v_)(a.consultation.doctor_name),1)]),(0,r.Lk)("p",null,[Jt,(0,r.eW)(" "+(0,f.v_)(a.consultation.patient_name),1)]),(0,r.Lk)("p",null,[xt,(0,r.eW)(" "+(0,f.v_)(a.consultation.date),1)]),(0,r.Lk)("p",null,[Ot,(0,r.eW)(" "+(0,f.v_)(a.consultation.time),1)]),Rt,(0,r.Lk)("p",null,(0,f.v_)(a.consultation.notes),1)]),a.isDoctor||a.isSuperuser?((0,r.uX)(),(0,r.CE)("div",zt,[(0,r.Lk)("button",{onClick:t[0]||(t[0]=(...e)=>n.editConsultation&&n.editConsultation(...e))},"Редагувати"),(0,r.Lk)("button",{onClick:t[1]||(t[1]=(...e)=>n.deleteConsultation&&n.deleteConsultation(...e))},"Видалити")])):(0,r.Q3)("",!0)])):((0,r.uX)(),(0,r.CE)("p",Bt,"Завантаження деталей консультації..."))}var Ht={name:"ConsultationDetailsComponent",data(){return{consultation:null,isDoctor:!1,isSuperuser:!1}},methods:{fetchConsultationDetails(){const e=this.$route.params.id;N.get(`consultations/${e}/`).then((e=>{this.consultation=e.data,this.isDoctor=e.data.is_doctor,this.isSuperuser=e.data.is_superuser})).catch((e=>{console.error("Error fetching consultation details:",e),e.response&&401===e.response.status&&this.$router.push("/login")}))},editConsultation(){this.$router.push(`/consultation/edit/${this.consultation.id}`)},deleteConsultation(){const e=this.consultation.id;N.delete(`consultations/${e}/`).then((()=>{this.$router.push("/dashboard")})).catch((e=>{console.error("Error deleting consultation:",e)}))}},created(){this.fetchConsultationDetails()}};const Nt=(0,l.A)(Ht,[["render",Kt],["__scopeId","data-v-984780ea"]]);var Gt=Nt;const Yt=e=>((0,r.Qi)("data-v-035d17c7"),e=e(),(0,r.jt)(),e),Zt={key:0,class:"consultation-actions"},eo=Yt((()=>(0,r.Lk)("h3",null,"Дії з консультацією",-1)));function to(e,t,o,s,a,n){return n.isAuthorized?((0,r.uX)(),(0,r.CE)("div",Zt,[eo,(0,r.Lk)("button",{onClick:t[0]||(t[0]=(...e)=>n.editConsultation&&n.editConsultation(...e))},"Редагувати консультацію"),(0,r.Lk)("button",{onClick:t[1]||(t[1]=(...e)=>n.deleteConsultation&&n.deleteConsultation(...e)),class:"danger"},"Видалити консультацію")])):(0,r.Q3)("",!0)}var oo={name:"ConsultationActionsComponent",props:{consultationId:{type:Number,required:!0},isDoctor:{type:Boolean,default:!1},isSuperuser:{type:Boolean,default:!1}},computed:{isAuthorized(){return this.isDoctor||this.isSuperuser}},methods:{editConsultation(){alert("Редагування консультації ще не налаштоване.")},deleteConsultation(){confirm("Ви впевнені, що хочете видалити цю консультацію?")&&N.delete(`consultations/${this.consultationId}/`).then((()=>{this.$router.push("/dashboard")})).catch((e=>{console.error("Error deleting consultation:",e),alert("Сталася помилка при видаленні консультації.")}))}}};const so=(0,l.A)(oo,[["render",to],["__scopeId","data-v-035d17c7"]]);var ro=so,ao={name:"ConsultationDetailsPage",components:{ConsultationDetailsComponent:Gt,ConsultationActionsComponent:ro},data(){return{isDoctor:!1,isSuperuser:!1}},created(){this.checkUserRoles()},methods:{checkUserRoles(){const e={is_doctor:"true"===localStorage.getItem("isDoctor"),is_superuser:"true"===localStorage.getItem("isSuperuser")};this.isDoctor=e.is_doctor,this.isSuperuser=e.is_superuser}}};const no=(0,l.A)(ao,[["render",Wt],["__scopeId","data-v-4e12210c"]]);var io=no;const lo=e=>((0,r.Qi)("data-v-ba8af82e"),e=e(),(0,r.jt)(),e),uo={class:"dashboard-page"},co=lo((()=>(0,r.Lk)("h1",null,"Панель управління",-1))),po={class:"grid-container"},mo={class:"grid-item"},fo={class:"grid-item"},ho={key:0,class:"grid-item"},go={key:1,class:"grid-item"};function ko(e,t,o,s,a,n){const i=(0,r.g2)("UserConsultationsComponent"),l=(0,r.g2)("MessagesComponent"),u=(0,r.g2)("CreateConsultationComponent"),c=(0,r.g2)("UserManagementComponent");return(0,r.uX)(),(0,r.CE)("div",uo,[co,(0,r.Lk)("div",po,[(0,r.Lk)("div",mo,[(0,r.bF)(i)]),(0,r.Lk)("div",fo,[(0,r.bF)(l)]),a.isDoctor?((0,r.uX)(),(0,r.CE)("div",ho,[(0,r.bF)(u)])):(0,r.Q3)("",!0),a.isSuperuser||a.isStaff?((0,r.uX)(),(0,r.CE)("div",go,[(0,r.bF)(c)])):(0,r.Q3)("",!0)])])}const vo={class:"user-consultations"},Lo={key:0},bo={key:1};function Co(e,t,o,s,a,n){const i=(0,r.g2)("router-link");return(0,r.uX)(),(0,r.CE)("div",vo,[(0,r.Lk)("h2",null,"Консультації для "+(0,f.v_)(a.isDoctor?"Доктора":"Пацієнта"),1),a.isLoaded&&0===a.consultations.length?((0,r.uX)(),(0,r.CE)("p",Lo,"У вас немає запланованих консультацій.")):a.isLoaded&&a.consultations.length?((0,r.uX)(),(0,r.CE)("ul",bo,[((0,r.uX)(!0),(0,r.CE)(r.FK,null,(0,r.pI)(a.consultations,(e=>((0,r.uX)(),(0,r.CE)("li",{key:e.id},[(0,r.bF)(i,{to:`/consultation/${e.id}`},{default:(0,r.k6)((()=>[(0,r.eW)(" Консультація з "+(0,f.v_)(a.isDoctor?e.patient_name:e.doctor_name)+" на "+(0,f.v_)(e.date)+" о "+(0,f.v_)(e.time),1)])),_:2},1032,["to"])])))),128))])):(0,r.Q3)("",!0)])}var _o={name:"UserConsultationsComponent",data(){return{consultations:[],isDoctor:!1,isLoaded:!1}},methods:{fetchUserConsultations(){N.get("consultations/").then((e=>{this.consultations=e.data.consultations||[],this.isDoctor=e.data.is_doctor})).catch((e=>{console.error("Error fetching consultations:",e),e.response&&401===e.response.status&&this.$router.push("/login")})).finally((()=>{this.isLoaded=!0}))}},created(){this.fetchUserConsultations()}};const yo=(0,l.A)(_o,[["render",Co],["__scopeId","data-v-51729052"]]);var Eo=yo;const wo=e=>((0,r.Qi)("data-v-3efc75cf"),e=e(),(0,r.jt)(),e),Uo={class:"messages"},So=wo((()=>(0,r.Lk)("h2",null,"Мої Повідомлення",-1))),Po={key:0},Ao={key:1},Xo={class:"timestamp"};function Io(e,t,o,s,a,n){return(0,r.uX)(),(0,r.CE)("div",Uo,[So,a.messages.length?((0,r.uX)(),(0,r.CE)("ul",Ao,[((0,r.uX)(!0),(0,r.CE)(r.FK,null,(0,r.pI)(a.messages,(e=>((0,r.uX)(),(0,r.CE)("li",{key:e.id,class:(0,f.C4)({unread:!e.is_read})},[(0,r.Lk)("strong",null,(0,f.v_)(e.sender_name),1),(0,r.eW)(" до "+(0,f.v_)(e.recipient_name)+": "+(0,f.v_)(e.content)+" ",1),(0,r.Lk)("span",Xo,(0,f.v_)(n.formatDate(e.created_at)),1)],2)))),128))])):((0,r.uX)(),(0,r.CE)("p",Po,"У вас немає повідомлень."))])}var Do={name:"MessagesComponent",data(){return{messages:[]}},methods:{fetchMessages(){N.get("messages/").then((e=>{this.messages=e.data})).catch((e=>{console.error("Error fetching messages:",e),e.response&&401===e.response.status&&this.$router.push("/login")}))},formatDate(e){const t={year:"numeric",month:"long",day:"numeric",hour:"2-digit",minute:"2-digit"};return new Date(e).toLocaleDateString(void 0,t)}},created(){this.fetchMessages()}};const $o=(0,l.A)(Do,[["render",Io],["__scopeId","data-v-3efc75cf"]]);var Mo=$o;const Fo=e=>((0,r.Qi)("data-v-50ef11c8"),e=e(),(0,r.jt)(),e),Wo={class:"create-consultation"},Qo=Fo((()=>(0,r.Lk)("h2",null,"Створити нову консультацію",-1))),jo={class:"form-group"},qo=Fo((()=>(0,r.Lk)("label",{for:"patient"},"Пацієнт",-1))),To=["value"],Vo={class:"form-group"},Jo=Fo((()=>(0,r.Lk)("label",{for:"date"},"Дата",-1))),xo={class:"form-group"},Oo=Fo((()=>(0,r.Lk)("label",{for:"time"},"Час",-1))),Ro={class:"form-group"},zo=Fo((()=>(0,r.Lk)("label",{for:"notes"},"Примітки",-1))),Bo=Fo((()=>(0,r.Lk)("button",{type:"submit"},"Створити консультацію",-1)));function Ko(e,t,o,a,n,i){return(0,r.uX)(),(0,r.CE)("div",Wo,[Qo,(0,r.Lk)("form",{onSubmit:t[4]||(t[4]=(0,s.D$)(((...e)=>i.submitConsultation&&i.submitConsultation(...e)),["prevent"]))},[(0,r.Lk)("div",jo,[qo,(0,r.bo)((0,r.Lk)("select",{"onUpdate:modelValue":t[0]||(t[0]=e=>n.form.patient=e),id:"patient",required:""},[((0,r.uX)(!0),(0,r.CE)(r.FK,null,(0,r.pI)(n.patients,(e=>((0,r.uX)(),(0,r.CE)("option",{key:e.id,value:e.id},(0,f.v_)(e.name),9,To)))),128))],512),[[s.u1,n.form.patient]])]),(0,r.Lk)("div",Vo,[Jo,(0,r.bo)((0,r.Lk)("input",{type:"date","onUpdate:modelValue":t[1]||(t[1]=e=>n.form.date=e),id:"date",required:""},null,512),[[s.Jo,n.form.date]])]),(0,r.Lk)("div",xo,[Oo,(0,r.bo)((0,r.Lk)("input",{type:"time","onUpdate:modelValue":t[2]||(t[2]=e=>n.form.time=e),id:"time",required:""},null,512),[[s.Jo,n.form.time]])]),(0,r.Lk)("div",Ro,[zo,(0,r.bo)((0,r.Lk)("textarea",{"onUpdate:modelValue":t[3]||(t[3]=e=>n.form.notes=e),id:"notes",rows:"4",placeholder:"Введіть примітки..."},null,512),[[s.Jo,n.form.notes]])]),Bo],32)])}var Ho={name:"CreateConsultationComponent",data(){return{form:{patient:"",date:"",time:"",notes:""},patients:[]}},methods:{fetchPatients(){N.get("users/").then((e=>{this.patients=e.data.filter((e=>!e.is_doctor&&!e.is_superuser&&!e.is_staff))})).catch((e=>{console.error("Error fetching patients:",e),e.response&&401===e.response.status&&this.$router.push("/login")}))},submitConsultation(){N.post("consultations/",this.form).then((()=>{this.$router.push("/dashboard")})).catch((e=>{console.error("Error creating consultation:",e)}))}},created(){this.fetchPatients()}};const No=(0,l.A)(Ho,[["render",Ko],["__scopeId","data-v-50ef11c8"]]);var Go=No;const Yo=e=>((0,r.Qi)("data-v-bb8e8ec8"),e=e(),(0,r.jt)(),e),Zo={key:0,class:"user-management"},es=Yo((()=>(0,r.Lk)("h2",null,"Управління користувачами",-1))),ts={key:0},os={key:1},ss=Yo((()=>(0,r.Lk)("thead",null,[(0,r.Lk)("tr",null,[(0,r.Lk)("th",null,"Ім'я"),(0,r.Lk)("th",null,"Email"),(0,r.Lk)("th",null,"Роль"),(0,r.Lk)("th",null,"Дії")])],-1))),rs={key:0},as={key:1},ns={key:2},is={key:3},ls=["onClick"],us=["onClick"],cs={key:2,class:"edit-user-modal"},ds={class:"form-group"},ps=Yo((()=>(0,r.Lk)("label",{for:"username"},"Ім'я",-1))),ms={class:"form-group"},fs=Yo((()=>(0,r.Lk)("label",{for:"email"},"Email",-1))),hs={class:"form-group"},gs=Yo((()=>(0,r.Lk)("label",{for:"role"},"Роль",-1))),ks=Yo((()=>(0,r.Lk)("option",{value:"user"},"User",-1))),vs=Yo((()=>(0,r.Lk)("option",{value:"doctor"},"Doctor",-1))),Ls=Yo((()=>(0,r.Lk)("option",{value:"staff"},"Staff",-1))),bs=Yo((()=>(0,r.Lk)("option",{value:"superuser"},"Superuser",-1))),Cs=[ks,vs,Ls,bs],_s=Yo((()=>(0,r.Lk)("button",{type:"submit"},"Оновити",-1))),ys={key:1},Es=Yo((()=>(0,r.Lk)("p",null,"У вас немає доступу до цього розділу.",-1))),ws=[Es];function Us(e,t,o,a,n,i){return n.isSuperUserOrStaff?((0,r.uX)(),(0,r.CE)("div",Zo,[es,n.users.length?((0,r.uX)(),(0,r.CE)("table",os,[ss,(0,r.Lk)("tbody",null,[((0,r.uX)(!0),(0,r.CE)(r.FK,null,(0,r.pI)(n.users,(e=>((0,r.uX)(),(0,r.CE)("tr",{key:e.id},[(0,r.Lk)("td",null,(0,f.v_)(e.username),1),(0,r.Lk)("td",null,(0,f.v_)(e.email),1),(0,r.Lk)("td",null,[e.is_superuser?((0,r.uX)(),(0,r.CE)("span",rs,"Superuser")):e.is_staff?((0,r.uX)(),(0,r.CE)("span",as,"Staff")):e.is_doctor?((0,r.uX)(),(0,r.CE)("span",ns,"Doctor")):((0,r.uX)(),(0,r.CE)("span",is,"User"))]),(0,r.Lk)("td",null,[(0,r.Lk)("button",{onClick:t=>i.editUser(e)},"Редагувати",8,ls),(0,r.Lk)("button",{onClick:t=>i.deleteUser(e.id)},"Видалити",8,us)])])))),128))])])):((0,r.uX)(),(0,r.CE)("p",ts,"Користувачі відсутні.")),n.selectedUser?((0,r.uX)(),(0,r.CE)("div",cs,[(0,r.Lk)("h3",null,"Редагувати користувача: "+(0,f.v_)(n.selectedUser.username),1),(0,r.Lk)("form",{onSubmit:t[4]||(t[4]=(0,s.D$)(((...e)=>i.updateUser&&i.updateUser(...e)),["prevent"]))},[(0,r.Lk)("div",ds,[ps,(0,r.bo)((0,r.Lk)("input",{type:"text","onUpdate:modelValue":t[0]||(t[0]=e=>n.selectedUser.username=e),id:"username",required:""},null,512),[[s.Jo,n.selectedUser.username]])]),(0,r.Lk)("div",ms,[fs,(0,r.bo)((0,r.Lk)("input",{type:"email","onUpdate:modelValue":t[1]||(t[1]=e=>n.selectedUser.email=e),id:"email",required:""},null,512),[[s.Jo,n.selectedUser.email]])]),(0,r.Lk)("div",hs,[gs,(0,r.bo)((0,r.Lk)("select",{"onUpdate:modelValue":t[2]||(t[2]=e=>n.selectedUser.role=e),id:"role"},Cs,512),[[s.u1,n.selectedUser.role]])]),_s,(0,r.Lk)("button",{onClick:t[3]||(t[3]=e=>n.selectedUser=null)},"Скасувати")],32)])):(0,r.Q3)("",!0)])):((0,r.uX)(),(0,r.CE)("div",ys,ws))}var Ss={name:"UserManagementComponent",data(){return{users:[],selectedUser:null,isSuperUserOrStaff:!1}},methods:{fetchUsers(){N.get("users/").then((e=>{this.users=e.data,this.checkAccess()})).catch((e=>{console.error("Error fetching users:",e),e.response&&401===e.response.status&&this.$router.push("/login")}))},checkAccess(){const e=localStorage.getItem("userEmail"),t=this.users.find((t=>t.email===e));t&&(this.isSuperUserOrStaff=t.is_superuser||t.is_staff)},editUser(e){this.selectedUser={...e,role:this.getRole(e)}},getRole(e){return e.is_superuser?"superuser":e.is_staff?"staff":e.is_doctor?"doctor":"user"},updateUser(){const e={...this.selectedUser,is_superuser:"superuser"===this.selectedUser.role,is_staff:"staff"===this.selectedUser.role,is_doctor:"doctor"===this.selectedUser.role};N.put(`users/${this.selectedUser.id}/`,e).then((()=>{this.selectedUser=null,this.fetchUsers()})).catch((e=>{console.error("Error updating user:",e)}))},deleteUser(e){N.delete(`users/${e}/`).then((()=>{this.fetchUsers()})).catch((e=>{console.error("Error deleting user:",e)}))}},created(){this.fetchUsers()}};const Ps=(0,l.A)(Ss,[["render",Us],["__scopeId","data-v-bb8e8ec8"]]);var As=Ps,Xs={name:"DashboardPage",components:{UserConsultationsComponent:Eo,MessagesComponent:Mo,CreateConsultationComponent:Go,UserManagementComponent:As},data(){return{isDoctor:!1,isSuperuser:!1,isStaff:!1}},created(){this.checkUserRoles()},methods:{checkUserRoles(){const e={is_doctor:"true"===localStorage.getItem("isDoctor"),is_superuser:"true"===localStorage.getItem("isSuperuser"),is_staff:"true"===localStorage.getItem("isStaff")};this.isDoctor=e.is_doctor,this.isSuperuser=e.is_superuser,this.isStaff=e.is_staff}}};const Is=(0,l.A)(Xs,[["render",ko],["__scopeId","data-v-ba8af82e"]]);var Ds=Is;const $s=e=>((0,r.Qi)("data-v-ea351f90"),e=e(),(0,r.jt)(),e),Ms={class:"consultations-list"},Fs=$s((()=>(0,r.Lk)("h2",null,"Мої Консультації",-1))),Ws={key:0},Qs={key:1};function js(e,t,o,s,a,n){const i=(0,r.g2)("router-link");return(0,r.uX)(),(0,r.CE)("div",Ms,[Fs,a.consultations.length?((0,r.uX)(),(0,r.CE)("ul",Qs,[((0,r.uX)(!0),(0,r.CE)(r.FK,null,(0,r.pI)(a.consultations,(e=>((0,r.uX)(),(0,r.CE)("li",{key:e.id},[(0,r.bF)(i,{to:`/consultation/${e.id}`},{default:(0,r.k6)((()=>[(0,r.eW)(" Консультація з "+(0,f.v_)(e.doctor_name)+" для "+(0,f.v_)(e.patient_name)+" на "+(0,f.v_)(e.date)+" о "+(0,f.v_)(e.time),1)])),_:2},1032,["to"])])))),128))])):((0,r.uX)(),(0,r.CE)("p",Ws,"У вас немає запланованих консультацій."))])}var qs={name:"ConsultationsListComponent",data(){return{consultations:[]}},methods:{fetchConsultations(){N.get("consultations/").then((e=>{this.consultations=e.data})).catch((e=>{console.error("Error fetching consultations:",e),e.response&&401===e.response.status&&this.$router.push("/login")}))}},created(){this.fetchConsultations()}};const Ts=(0,l.A)(qs,[["render",js],["__scopeId","data-v-ea351f90"]]);var Vs=Ts;const Js=e=>((0,r.Qi)("data-v-6230d547"),e=e(),(0,r.jt)(),e),xs=Js((()=>(0,r.Lk)("h1",null,"404 - Сторінку не знайдено",-1))),Os=Js((()=>(0,r.Lk)("p",null,"На жаль, сторінка, яку ви шукаєте, не існує.",-1)));function Rs(e,t,o,s,a,n){const i=(0,r.g2)("router-link");return(0,r.uX)(),(0,r.CE)("div",null,[xs,Os,(0,r.bF)(i,{to:"/"},{default:(0,r.k6)((()=>[(0,r.eW)("Повернутися на головну")])),_:1})])}var zs={name:"NotFoundPage"};const Bs=(0,l.A)(zs,[["render",Rs],["__scopeId","data-v-6230d547"]]);var Ks=Bs;const Hs=[{path:"/",name:"home",component:S},{path:"/login",name:"login",component:be},{path:"/profile",name:"profile",component:Dt,meta:{requiresAuth:!0}},{path:"/dashboard",name:"dashboard",component:Ds,meta:{requiresAuth:!0}},{path:"/consultations",name:"consultationsList",component:Vs,meta:{requiresAuth:!0}},{path:"/register",name:"register",component:ke},{path:"/consultations/:id",name:"consultationDetails",component:io,meta:{requiresAuth:!0}},{path:"/:pathMatch(.*)*",name:"not-found",component:Ks}],Ns=(0,d.aE)({history:(0,d.LA)(),routes:Hs});Ns.beforeEach(((e,t,o)=>{const s=e.matched.some((e=>e.meta.requiresAuth)),r=!!localStorage.getItem("accessToken");s&&!r?o({path:"/login",query:{redirect:e.fullPath}}):o()}));var Gs=Ns;const Ys=(0,s.Ef)(c);Ys.use(Gs),Ys.mount("#app")}},t={};function o(s){var r=t[s];if(void 0!==r)return r.exports;var a=t[s]={exports:{}};return e[s].call(a.exports,a,a.exports,o),a.exports}o.m=e,function(){var e=[];o.O=function(t,s,r,a){if(!s){var n=1/0;for(c=0;c<e.length;c++){s=e[c][0],r=e[c][1],a=e[c][2];for(var i=!0,l=0;l<s.length;l++)(!1&a||n>=a)&&Object.keys(o.O).every((function(e){return o.O[e](s[l])}))?s.splice(l--,1):(i=!1,a<n&&(n=a));if(i){e.splice(c--,1);var u=r();void 0!==u&&(t=u)}}return t}a=a||0;for(var c=e.length;c>0&&e[c-1][2]>a;c--)e[c]=e[c-1];e[c]=[s,r,a]}}(),function(){o.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return o.d(t,{a:t}),t}}(),function(){o.d=function(e,t){for(var s in t)o.o(t,s)&&!o.o(e,s)&&Object.defineProperty(e,s,{enumerable:!0,get:t[s]})}}(),function(){o.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),function(){o.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}}(),function(){var e={524:0};o.O.j=function(t){return 0===e[t]};var t=function(t,s){var r,a,n=s[0],i=s[1],l=s[2],u=0;if(n.some((function(t){return 0!==e[t]}))){for(r in i)o.o(i,r)&&(o.m[r]=i[r]);if(l)var c=l(o)}for(t&&t(s);u<n.length;u++)a=n[u],o.o(e,a)&&e[a]&&e[a][0](),e[a]=0;return o.O(c)},s=self["webpackChunkmedical_project"]=self["webpackChunkmedical_project"]||[];s.forEach(t.bind(null,0)),s.push=t.bind(null,s.push.bind(s))}();var s=o.O(void 0,[504],(function(){return o(736)}));s=o.O(s)})();
//# sourceMappingURL=app.5a409e78.js.map