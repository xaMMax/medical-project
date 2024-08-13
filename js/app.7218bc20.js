(function(){"use strict";var e={6576:function(e,t,o){var s=o(5130),r=o(6768);const n={id:"app"};function a(e,t,o,s,a,i){const l=(0,r.g2)("router-link"),u=(0,r.g2)("router-view");return(0,r.uX)(),(0,r.CE)("div",n,[(0,r.Lk)("header",null,[(0,r.Lk)("nav",null,[(0,r.bF)(l,{to:"/"},{default:(0,r.k6)((()=>[(0,r.eW)("Home")])),_:1}),(0,r.eW)(" | "),a.isAuthenticated?(0,r.Q3)("",!0):((0,r.uX)(),(0,r.Wv)(l,{key:0,to:"/login"},{default:(0,r.k6)((()=>[(0,r.eW)("Login")])),_:1})),(0,r.eW)(" | "),a.isAuthenticated?(0,r.Q3)("",!0):((0,r.uX)(),(0,r.Wv)(l,{key:1,to:"/register"},{default:(0,r.k6)((()=>[(0,r.eW)("Register")])),_:1})),(0,r.eW)(" | "),a.isAuthenticated?((0,r.uX)(),(0,r.Wv)(l,{key:2,to:"/profile"},{default:(0,r.k6)((()=>[(0,r.eW)("Profile")])),_:1})):(0,r.Q3)("",!0),(0,r.eW)(" | "),a.isAuthenticated?((0,r.uX)(),(0,r.Wv)(l,{key:3,to:"/dashboard"},{default:(0,r.k6)((()=>[(0,r.eW)("Dashboard")])),_:1})):(0,r.Q3)("",!0),(0,r.eW)(" | "),a.isAuthenticated?((0,r.uX)(),(0,r.Wv)(l,{key:4,to:"/consultations"},{default:(0,r.k6)((()=>[(0,r.eW)("Consultations")])),_:1})):(0,r.Q3)("",!0),(0,r.eW)(" | "),a.isAuthenticated?((0,r.uX)(),(0,r.CE)("button",{key:5,onClick:t[0]||(t[0]=(...e)=>i.logout&&i.logout(...e))},"Logout")):(0,r.Q3)("",!0)])]),(0,r.Lk)("main",null,[(0,r.bF)(u)])])}o(4114);var i={name:"App",data(){return{isAuthenticated:!!localStorage.getItem("accessToken")}},methods:{logout(){localStorage.removeItem("accessToken"),localStorage.removeItem("refreshToken"),this.isAuthenticated=!1,this.$router.push("/login")},checkAuthStatus(){this.isAuthenticated=!!localStorage.getItem("accessToken")}},created(){this.checkAuthStatus(),this.$router.beforeEach(((e,t,o)=>{this.checkAuthStatus(),o()}))}},l=o(1241);const u=(0,l.A)(i,[["render",a]]);var c=u,d=o(1387);const p={class:"home-page"};function m(e,t,o,s,n,a){const i=(0,r.g2)("WelcomeComponent");return(0,r.uX)(),(0,r.CE)("div",p,[(0,r.bF)(i)])}var f=o(4232);const h=e=>((0,r.Qi)("data-v-02da878c"),e=e(),(0,r.jt)(),e),g={class:"welcome"},k=h((()=>(0,r.Lk)("h1",null,"Welcome to the Consultation App",-1))),v=h((()=>(0,r.Lk)("p",null," Це додаток для проведення онлайн-консультацій. Ви можете увійти до системи, щоб переглянути свої консультації, надіслати повідомлення або оновити свій профіль. ",-1))),L={key:0},C={key:1};function b(e,t,o,s,n,a){const i=(0,r.g2)("router-link");return(0,r.uX)(),(0,r.CE)("div",g,[k,v,n.isAuthenticated?(0,r.Q3)("",!0):((0,r.uX)(),(0,r.CE)("p",L,[(0,r.eW)(" Будь ласка, "),(0,r.bF)(i,{to:"/login"},{default:(0,r.k6)((()=>[(0,r.eW)("увійдіть")])),_:1}),(0,r.eW)(" або "),(0,r.bF)(i,{to:"/register"},{default:(0,r.k6)((()=>[(0,r.eW)("зареєструйтесь")])),_:1}),(0,r.eW)(", щоб отримати доступ до повного функціоналу. ")])),n.isAuthenticated?((0,r.uX)(),(0,r.CE)("p",C,[(0,r.eW)(" Ви увійшли до системи як "+(0,f.v_)(n.userEmail)+". Перейдіть до ",1),(0,r.bF)(i,{to:"/dashboard"},{default:(0,r.k6)((()=>[(0,r.eW)("Панелі управління")])),_:1}),(0,r.eW)(", щоб переглянути свої консультації або оновити профіль. ")])):(0,r.Q3)("",!0)])}var _={name:"WelcomeComponent",data(){return{isAuthenticated:!!localStorage.getItem("accessToken"),userEmail:localStorage.getItem("userEmail")}}};const y=(0,l.A)(_,[["render",b],["__scopeId","data-v-02da878c"]]);var E=y,w={name:"HomePage",components:{WelcomeComponent:E}};const U=(0,l.A)(w,[["render",m],["__scopeId","data-v-c05cd244"]]);var S=U;const X=e=>((0,r.Qi)("data-v-8596208c"),e=e(),(0,r.jt)(),e),P={class:"login-page"},I=X((()=>(0,r.Lk)("h1",null,"Вхід до системи",-1))),A={class:"auth-container"},D={class:"auth-section"},W=X((()=>(0,r.Lk)("h2",null,"Увійти",-1))),M={class:"auth-section"},Q=X((()=>(0,r.Lk)("h2",null,"Реєстрація",-1)));function $(e,t,o,s,n,a){const i=(0,r.g2)("LoginComponent"),l=(0,r.g2)("RegisterComponent");return(0,r.uX)(),(0,r.CE)("div",P,[I,(0,r.Lk)("div",A,[(0,r.Lk)("div",D,[W,(0,r.bF)(i)]),(0,r.Lk)("div",M,[Q,(0,r.bF)(l)])])])}const F=e=>((0,r.Qi)("data-v-7c748360"),e=e(),(0,r.jt)(),e),j={class:"login"},q=F((()=>(0,r.Lk)("h2",null,"Вхід",-1))),T={class:"form-group"},V=F((()=>(0,r.Lk)("label",{for:"email"},"Email",-1))),J={class:"form-group"},O=F((()=>(0,r.Lk)("label",{for:"password"},"Пароль",-1))),x=F((()=>(0,r.Lk)("button",{type:"submit"},"Увійти",-1))),R={key:0,class:"error"};function z(e,t,o,n,a,i){return(0,r.uX)(),(0,r.CE)("div",j,[q,(0,r.Lk)("form",{onSubmit:t[2]||(t[2]=(0,s.D$)(((...e)=>i.login&&i.login(...e)),["prevent"]))},[(0,r.Lk)("div",T,[V,(0,r.bo)((0,r.Lk)("input",{type:"email","onUpdate:modelValue":t[0]||(t[0]=e=>a.form.email=e),id:"email",required:""},null,512),[[s.Jo,a.form.email]])]),(0,r.Lk)("div",J,[O,(0,r.bo)((0,r.Lk)("input",{type:"password","onUpdate:modelValue":t[1]||(t[1]=e=>a.form.password=e),id:"password",required:""},null,512),[[s.Jo,a.form.password]])]),x],32),a.errorMessage?((0,r.uX)(),(0,r.CE)("p",R,(0,f.v_)(a.errorMessage),1)):(0,r.Q3)("",!0)])}var B=o(4373);const K="https://xammax.pythonanywhere.com/api/",H=B.A.create({baseURL:K,headers:{"Content-Type":"application/json"}});H.interceptors.request.use((e=>{const t=localStorage.getItem("accessToken");return t&&(e.headers["Authorization"]=`Bearer ${t}`),e})),H.interceptors.response.use((e=>e),(async e=>{const t=e.config;if(401===e.response.status&&!t._retry){t._retry=!0;const e=localStorage.getItem("refreshToken");if(e)try{const{data:o}=await B.A.post(`${K}token/refresh/`,{refresh:e});return localStorage.setItem("accessToken",o.access),t.headers["Authorization"]=`Bearer ${o.access}`,H(t)}catch(o){console.error("Refresh token failed",o),localStorage.removeItem("accessToken"),localStorage.removeItem("refreshToken"),await Vs.push("/login")}else localStorage.removeItem("accessToken"),localStorage.removeItem("refreshToken"),await Vs.push("/login")}return Promise.reject(e)}));var N=H,G={name:"LoginComponent",data(){return{form:{email:"",password:""},errorMessage:""}},methods:{login(){N.post("login/",this.form).then((e=>(console.log("Login successful:",e.data),localStorage.setItem("accessToken",e.data.access),localStorage.setItem("refreshToken",e.data.refresh),localStorage.setItem("userEmail",this.form.email),N.get("users/",{headers:{Authorization:`Bearer ${e.data.access}`}})))).then((e=>{console.log("Fetched users:",e.data);const t=e.data.find((e=>e.email===this.form.email));t?(console.log("Current user found:",t),localStorage.setItem("isDoctor",t.is_doctor),localStorage.setItem("isSuperuser",t.is_superuser),localStorage.setItem("isStaff",t.is_staff),this.$router.push("/dashboard")):(this.errorMessage="Користувача не знайдено.",console.error("User not found"))})).catch((e=>{console.error("Error logging in or fetching users:",e),this.errorMessage="Неправильний email або пароль. Спробуйте ще раз."}))}}};const Y=(0,l.A)(G,[["render",z],["__scopeId","data-v-7c748360"]]);var Z=Y;const ee=e=>((0,r.Qi)("data-v-77dd080a"),e=e(),(0,r.jt)(),e),te={class:"register"},oe=ee((()=>(0,r.Lk)("h2",null,"Реєстрація",-1))),se={class:"form-group"},re=ee((()=>(0,r.Lk)("label",{for:"username"},"Ім'я користувача",-1))),ne={class:"form-group"},ae=ee((()=>(0,r.Lk)("label",{for:"email"},"Email",-1))),ie={class:"form-group"},le=ee((()=>(0,r.Lk)("label",{for:"password"},"Пароль",-1))),ue={class:"form-group"},ce=ee((()=>(0,r.Lk)("label",{for:"confirmPassword"},"Підтвердження пароля",-1))),de=ee((()=>(0,r.Lk)("button",{type:"submit"},"Зареєструватись",-1))),pe={key:0,class:"error"},me={key:1,class:"success"};function fe(e,t,o,n,a,i){return(0,r.uX)(),(0,r.CE)("div",te,[oe,(0,r.Lk)("form",{onSubmit:t[4]||(t[4]=(0,s.D$)(((...e)=>i.register&&i.register(...e)),["prevent"]))},[(0,r.Lk)("div",se,[re,(0,r.bo)((0,r.Lk)("input",{type:"text","onUpdate:modelValue":t[0]||(t[0]=e=>a.form.username=e),id:"username",required:""},null,512),[[s.Jo,a.form.username]])]),(0,r.Lk)("div",ne,[ae,(0,r.bo)((0,r.Lk)("input",{type:"email","onUpdate:modelValue":t[1]||(t[1]=e=>a.form.email=e),id:"email",required:""},null,512),[[s.Jo,a.form.email]])]),(0,r.Lk)("div",ie,[le,(0,r.bo)((0,r.Lk)("input",{type:"password","onUpdate:modelValue":t[2]||(t[2]=e=>a.form.password=e),id:"password",required:""},null,512),[[s.Jo,a.form.password]])]),(0,r.Lk)("div",ue,[ce,(0,r.bo)((0,r.Lk)("input",{type:"password","onUpdate:modelValue":t[3]||(t[3]=e=>a.form.confirmPassword=e),id:"confirmPassword",required:""},null,512),[[s.Jo,a.form.confirmPassword]])]),de],32),a.errorMessage?((0,r.uX)(),(0,r.CE)("p",pe,(0,f.v_)(a.errorMessage),1)):(0,r.Q3)("",!0),a.successMessage?((0,r.uX)(),(0,r.CE)("p",me,(0,f.v_)(a.successMessage),1)):(0,r.Q3)("",!0)])}var he={name:"RegisterComponent",data(){return{form:{username:"",email:"",password:"",confirmPassword:""},errorMessage:"",successMessage:""}},methods:{register(){this.form.password===this.form.confirmPassword?N.post("register/",{username:this.form.username,email:this.form.email,password:this.form.password}).then((()=>{this.successMessage="Реєстрація пройшла успішно. Тепер ви можете увійти до системи.",this.errorMessage="",this.clearForm()})).catch((e=>{console.error("Error during registration:",e),this.errorMessage="Помилка при реєстрації. Перевірте введені дані.",this.successMessage=""})):this.errorMessage="Пароль та підтвердження пароля не збігаються."},clearForm(){this.form.username="",this.form.email="",this.form.password="",this.form.confirmPassword=""}}};const ge=(0,l.A)(he,[["render",fe],["__scopeId","data-v-77dd080a"]]);var ke=ge,ve={name:"LoginPage",components:{LoginComponent:Z,RegisterComponent:ke}};const Le=(0,l.A)(ve,[["render",$],["__scopeId","data-v-8596208c"]]);var Ce=Le;const be=e=>((0,r.Qi)("data-v-0149eae6"),e=e(),(0,r.jt)(),e),_e={class:"profile-page"},ye=be((()=>(0,r.Lk)("h1",null,"Профіль користувача",-1))),Ee={class:"profile-section"},we={class:"profile-section"};function Ue(e,t,o,s,n,a){const i=(0,r.g2)("UserProfileComponent"),l=(0,r.g2)("ChangePasswordComponent");return(0,r.uX)(),(0,r.CE)("div",_e,[ye,(0,r.Lk)("div",Ee,[(0,r.bF)(i)]),(0,r.Lk)("div",we,[(0,r.bF)(l)])])}const Se=e=>((0,r.Qi)("data-v-5c4dfe75"),e=e(),(0,r.jt)(),e),Xe={class:"user-profile"},Pe=Se((()=>(0,r.Lk)("h2",null,"Профіль користувача",-1))),Ie={key:0},Ae={class:"profile-info"},De=Se((()=>(0,r.Lk)("strong",null,"Ім'я користувача:",-1))),We=Se((()=>(0,r.Lk)("strong",null,"Email:",-1))),Me=Se((()=>(0,r.Lk)("strong",null,"Телефон:",-1))),Qe=Se((()=>(0,r.Lk)("strong",null,"Адреса:",-1))),$e=Se((()=>(0,r.Lk)("strong",null,"Біографія:",-1))),Fe={key:0},je=["src"],qe={key:1},Te={class:"form-group"},Ve=Se((()=>(0,r.Lk)("label",{for:"username"},"Ім'я користувача",-1))),Je={class:"form-group"},Oe=Se((()=>(0,r.Lk)("label",{for:"email"},"Email",-1))),xe={class:"form-group"},Re=Se((()=>(0,r.Lk)("label",{for:"phone"},"Телефон",-1))),ze={class:"form-group"},Be=Se((()=>(0,r.Lk)("label",{for:"address"},"Адреса",-1))),Ke={class:"form-group"},He=Se((()=>(0,r.Lk)("label",{for:"bio"},"Біографія",-1))),Ne={class:"form-group"},Ge=Se((()=>(0,r.Lk)("label",{for:"photo"},"Фото профілю",-1))),Ye={class:"buttons"},Ze=Se((()=>(0,r.Lk)("button",{type:"submit"},"Зберегти зміни",-1)));function et(e,t,o,n,a,i){return(0,r.uX)(),(0,r.CE)("div",Xe,[Pe,a.isEditing?((0,r.uX)(),(0,r.CE)("div",qe,[(0,r.Lk)("form",{onSubmit:t[8]||(t[8]=(0,s.D$)(((...e)=>i.updateProfile&&i.updateProfile(...e)),["prevent"]))},[(0,r.Lk)("div",Te,[Ve,(0,r.bo)((0,r.Lk)("input",{type:"text","onUpdate:modelValue":t[1]||(t[1]=e=>a.profile.username=e),id:"username",required:""},null,512),[[s.Jo,a.profile.username]])]),(0,r.Lk)("div",Je,[Oe,(0,r.bo)((0,r.Lk)("input",{type:"email","onUpdate:modelValue":t[2]||(t[2]=e=>a.profile.email=e),id:"email",required:""},null,512),[[s.Jo,a.profile.email]])]),(0,r.Lk)("div",xe,[Re,(0,r.bo)((0,r.Lk)("input",{type:"tel","onUpdate:modelValue":t[3]||(t[3]=e=>a.profile.phone=e),id:"phone"},null,512),[[s.Jo,a.profile.phone]])]),(0,r.Lk)("div",ze,[Be,(0,r.bo)((0,r.Lk)("input",{type:"text","onUpdate:modelValue":t[4]||(t[4]=e=>a.profile.address=e),id:"address"},null,512),[[s.Jo,a.profile.address]])]),(0,r.Lk)("div",Ke,[He,(0,r.bo)((0,r.Lk)("textarea",{"onUpdate:modelValue":t[5]||(t[5]=e=>a.profile.bio=e),id:"bio",rows:"4"},null,512),[[s.Jo,a.profile.bio]])]),(0,r.Lk)("div",Ne,[Ge,(0,r.Lk)("input",{type:"file",onChange:t[6]||(t[6]=(...e)=>i.onFileChange&&i.onFileChange(...e)),id:"photo"},null,32)]),(0,r.Lk)("div",Ye,[Ze,(0,r.Lk)("button",{type:"button",onClick:t[7]||(t[7]=(...e)=>i.cancelEdit&&i.cancelEdit(...e))},"Скасувати")])],32)])):((0,r.uX)(),(0,r.CE)("div",Ie,[(0,r.Lk)("div",Ae,[(0,r.Lk)("p",null,[De,(0,r.eW)(" "+(0,f.v_)(a.profile.username),1)]),(0,r.Lk)("p",null,[We,(0,r.eW)(" "+(0,f.v_)(a.profile.email),1)]),(0,r.Lk)("p",null,[Me,(0,r.eW)(" "+(0,f.v_)(a.profile.phone||"Не вказано"),1)]),(0,r.Lk)("p",null,[Qe,(0,r.eW)(" "+(0,f.v_)(a.profile.address||"Не вказано"),1)]),(0,r.Lk)("p",null,[$e,(0,r.eW)(" "+(0,f.v_)(a.profile.bio||"Не вказано"),1)]),a.profile.photo?((0,r.uX)(),(0,r.CE)("div",Fe,[(0,r.Lk)("img",{src:a.profile.photo,alt:"Фото профілю",class:"profile-photo"},null,8,je)])):(0,r.Q3)("",!0)]),(0,r.Lk)("button",{onClick:t[0]||(t[0]=e=>a.isEditing=!0)},"Редагувати профіль")]))])}var tt={name:"UserProfileComponent",data(){return{profile:{username:"",email:"",phone:"",address:"",bio:"",photo:null},isEditing:!1}},methods:{fetchUserProfile(){N.get("profile/").then((e=>{this.profile=e.data})).catch((e=>{console.error("Error fetching profile:",e),e.response&&401===e.response.status&&this.$router.push("/login")}))},updateProfile(){const e=new FormData;for(const t in this.profile)"photo"===t&&this.profile[t]?e.append(t,this.profile[t],this.profile[t].name):e.append(t,this.profile[t]);N.put("profile/",e,{headers:{"Content-Type":"multipart/form-data"}}).then((()=>{alert("Профіль оновлено успішно"),this.isEditing=!1})).catch((e=>{console.error("Error updating profile:",e)}))},onFileChange(e){this.profile.photo=e.target.files[0]},cancelEdit(){this.isEditing=!1,this.fetchUserProfile()}},created(){this.fetchUserProfile()}};const ot=(0,l.A)(tt,[["render",et],["__scopeId","data-v-5c4dfe75"]]);var st=ot;const rt=e=>((0,r.Qi)("data-v-2a23bc44"),e=e(),(0,r.jt)(),e),nt={class:"change-password"},at=rt((()=>(0,r.Lk)("h2",null,"Зміна пароля",-1))),it={class:"form-group"},lt=rt((()=>(0,r.Lk)("label",{for:"oldPassword"},"Старий пароль",-1))),ut={class:"form-group"},ct=rt((()=>(0,r.Lk)("label",{for:"newPassword"},"Новий пароль",-1))),dt={class:"form-group"},pt=rt((()=>(0,r.Lk)("label",{for:"confirmPassword"},"Підтвердження нового пароля",-1))),mt=rt((()=>(0,r.Lk)("button",{type:"submit"},"Змінити пароль",-1))),ft={key:0,class:"error"},ht={key:1,class:"success"};function gt(e,t,o,n,a,i){return(0,r.uX)(),(0,r.CE)("div",nt,[at,(0,r.Lk)("form",{onSubmit:t[3]||(t[3]=(0,s.D$)(((...e)=>i.changePassword&&i.changePassword(...e)),["prevent"]))},[(0,r.Lk)("div",it,[lt,(0,r.bo)((0,r.Lk)("input",{type:"password","onUpdate:modelValue":t[0]||(t[0]=e=>a.form.oldPassword=e),id:"oldPassword",required:""},null,512),[[s.Jo,a.form.oldPassword]])]),(0,r.Lk)("div",ut,[ct,(0,r.bo)((0,r.Lk)("input",{type:"password","onUpdate:modelValue":t[1]||(t[1]=e=>a.form.newPassword=e),id:"newPassword",required:""},null,512),[[s.Jo,a.form.newPassword]])]),(0,r.Lk)("div",dt,[pt,(0,r.bo)((0,r.Lk)("input",{type:"password","onUpdate:modelValue":t[2]||(t[2]=e=>a.form.confirmPassword=e),id:"confirmPassword",required:""},null,512),[[s.Jo,a.form.confirmPassword]])]),mt],32),a.errorMessage?((0,r.uX)(),(0,r.CE)("p",ft,(0,f.v_)(a.errorMessage),1)):(0,r.Q3)("",!0),a.successMessage?((0,r.uX)(),(0,r.CE)("p",ht,(0,f.v_)(a.successMessage),1)):(0,r.Q3)("",!0)])}var kt={name:"ChangePasswordComponent",data(){return{form:{oldPassword:"",newPassword:"",confirmPassword:""},errorMessage:"",successMessage:""}},methods:{changePassword(){this.form.newPassword===this.form.confirmPassword?N.put("change-password/",{old_password:this.form.oldPassword,new_password:this.form.newPassword}).then((()=>{this.successMessage="Пароль успішно змінено.",this.errorMessage="",this.form.oldPassword="",this.form.newPassword="",this.form.confirmPassword=""})).catch((e=>{console.error("Error changing password:",e),this.errorMessage="Помилка при зміні пароля. Перевірте введені дані.",this.successMessage=""})):this.errorMessage="Новий пароль та підтвердження пароля не збігаються."}}};const vt=(0,l.A)(kt,[["render",gt],["__scopeId","data-v-2a23bc44"]]);var Lt=vt,Ct={name:"ProfilePage",components:{UserProfileComponent:st,ChangePasswordComponent:Lt}};const bt=(0,l.A)(Ct,[["render",Ue],["__scopeId","data-v-0149eae6"]]);var _t=bt;const yt=e=>((0,r.Qi)("data-v-4e12210c"),e=e(),(0,r.jt)(),e),Et={class:"consultation-details-page"},wt=yt((()=>(0,r.Lk)("h1",null,"Деталі консультації",-1)));function Ut(e,t,o,s,n,a){const i=(0,r.g2)("ConsultationDetailsComponent"),l=(0,r.g2)("ConsultationActionsComponent");return(0,r.uX)(),(0,r.CE)("div",Et,[wt,(0,r.bF)(i,{consultationId:e.$route.params.id},null,8,["consultationId"]),(0,r.bF)(l,{consultationId:e.$route.params.id,isDoctor:n.isDoctor,isSuperuser:n.isSuperuser},null,8,["consultationId","isDoctor","isSuperuser"])])}const St=e=>((0,r.Qi)("data-v-984780ea"),e=e(),(0,r.jt)(),e),Xt={key:0,class:"consultation-details"},Pt=St((()=>(0,r.Lk)("h2",null,"Деталі консультації",-1))),It={class:"details"},At=St((()=>(0,r.Lk)("strong",null,"Доктор:",-1))),Dt=St((()=>(0,r.Lk)("strong",null,"Пацієнт:",-1))),Wt=St((()=>(0,r.Lk)("strong",null,"Дата:",-1))),Mt=St((()=>(0,r.Lk)("strong",null,"Час:",-1))),Qt=St((()=>(0,r.Lk)("p",null,[(0,r.Lk)("strong",null,"Примітки:")],-1))),$t={key:0,class:"actions"},Ft={key:1};function jt(e,t,o,s,n,a){return n.consultation?((0,r.uX)(),(0,r.CE)("div",Xt,[Pt,(0,r.Lk)("div",It,[(0,r.Lk)("p",null,[At,(0,r.eW)(" "+(0,f.v_)(n.consultation.doctor_name),1)]),(0,r.Lk)("p",null,[Dt,(0,r.eW)(" "+(0,f.v_)(n.consultation.patient_name),1)]),(0,r.Lk)("p",null,[Wt,(0,r.eW)(" "+(0,f.v_)(n.consultation.date),1)]),(0,r.Lk)("p",null,[Mt,(0,r.eW)(" "+(0,f.v_)(n.consultation.time),1)]),Qt,(0,r.Lk)("p",null,(0,f.v_)(n.consultation.notes),1)]),n.isDoctor||n.isSuperuser?((0,r.uX)(),(0,r.CE)("div",$t,[(0,r.Lk)("button",{onClick:t[0]||(t[0]=(...e)=>a.editConsultation&&a.editConsultation(...e))},"Редагувати"),(0,r.Lk)("button",{onClick:t[1]||(t[1]=(...e)=>a.deleteConsultation&&a.deleteConsultation(...e))},"Видалити")])):(0,r.Q3)("",!0)])):((0,r.uX)(),(0,r.CE)("p",Ft,"Завантаження деталей консультації..."))}var qt={name:"ConsultationDetailsComponent",data(){return{consultation:null,isDoctor:!1,isSuperuser:!1}},methods:{fetchConsultationDetails(){const e=this.$route.params.id;N.get(`consultations/${e}/`).then((e=>{this.consultation=e.data,this.isDoctor=e.data.is_doctor,this.isSuperuser=e.data.is_superuser})).catch((e=>{console.error("Error fetching consultation details:",e),e.response&&401===e.response.status&&this.$router.push("/login")}))},editConsultation(){this.$router.push(`/consultation/edit/${this.consultation.id}`)},deleteConsultation(){const e=this.consultation.id;N.delete(`consultations/${e}/`).then((()=>{this.$router.push("/dashboard")})).catch((e=>{console.error("Error deleting consultation:",e)}))}},created(){this.fetchConsultationDetails()}};const Tt=(0,l.A)(qt,[["render",jt],["__scopeId","data-v-984780ea"]]);var Vt=Tt;const Jt=e=>((0,r.Qi)("data-v-035d17c7"),e=e(),(0,r.jt)(),e),Ot={key:0,class:"consultation-actions"},xt=Jt((()=>(0,r.Lk)("h3",null,"Дії з консультацією",-1)));function Rt(e,t,o,s,n,a){return a.isAuthorized?((0,r.uX)(),(0,r.CE)("div",Ot,[xt,(0,r.Lk)("button",{onClick:t[0]||(t[0]=(...e)=>a.editConsultation&&a.editConsultation(...e))},"Редагувати консультацію"),(0,r.Lk)("button",{onClick:t[1]||(t[1]=(...e)=>a.deleteConsultation&&a.deleteConsultation(...e)),class:"danger"},"Видалити консультацію")])):(0,r.Q3)("",!0)}var zt={name:"ConsultationActionsComponent",props:{consultationId:{type:Number,required:!0},isDoctor:{type:Boolean,default:!1},isSuperuser:{type:Boolean,default:!1}},computed:{isAuthorized(){return this.isDoctor||this.isSuperuser}},methods:{editConsultation(){alert("Редагування консультації ще не налаштоване.")},deleteConsultation(){confirm("Ви впевнені, що хочете видалити цю консультацію?")&&N.delete(`consultations/${this.consultationId}/`).then((()=>{this.$router.push("/dashboard")})).catch((e=>{console.error("Error deleting consultation:",e),alert("Сталася помилка при видаленні консультації.")}))}}};const Bt=(0,l.A)(zt,[["render",Rt],["__scopeId","data-v-035d17c7"]]);var Kt=Bt,Ht={name:"ConsultationDetailsPage",components:{ConsultationDetailsComponent:Vt,ConsultationActionsComponent:Kt},data(){return{isDoctor:!1,isSuperuser:!1}},created(){this.checkUserRoles()},methods:{checkUserRoles(){const e={is_doctor:"true"===localStorage.getItem("isDoctor"),is_superuser:"true"===localStorage.getItem("isSuperuser")};this.isDoctor=e.is_doctor,this.isSuperuser=e.is_superuser}}};const Nt=(0,l.A)(Ht,[["render",Ut],["__scopeId","data-v-4e12210c"]]);var Gt=Nt;const Yt=e=>((0,r.Qi)("data-v-ba8af82e"),e=e(),(0,r.jt)(),e),Zt={class:"dashboard-page"},eo=Yt((()=>(0,r.Lk)("h1",null,"Панель управління",-1))),to={class:"grid-container"},oo={class:"grid-item"},so={class:"grid-item"},ro={key:0,class:"grid-item"},no={key:1,class:"grid-item"};function ao(e,t,o,s,n,a){const i=(0,r.g2)("UserConsultationsComponent"),l=(0,r.g2)("MessagesComponent"),u=(0,r.g2)("CreateConsultationComponent"),c=(0,r.g2)("UserManagementComponent");return(0,r.uX)(),(0,r.CE)("div",Zt,[eo,(0,r.Lk)("div",to,[(0,r.Lk)("div",oo,[(0,r.bF)(i)]),(0,r.Lk)("div",so,[(0,r.bF)(l)]),n.isDoctor?((0,r.uX)(),(0,r.CE)("div",ro,[(0,r.bF)(u)])):(0,r.Q3)("",!0),n.isSuperuser||n.isStaff?((0,r.uX)(),(0,r.CE)("div",no,[(0,r.bF)(c)])):(0,r.Q3)("",!0)])])}const io={class:"user-consultations"},lo={key:0},uo={key:1};function co(e,t,o,s,n,a){const i=(0,r.g2)("router-link");return(0,r.uX)(),(0,r.CE)("div",io,[(0,r.Lk)("h2",null,"Консультації для "+(0,f.v_)(n.isDoctor?"Доктора":"Пацієнта"),1),n.isLoaded&&0===n.consultations.length?((0,r.uX)(),(0,r.CE)("p",lo,"У вас немає запланованих консультацій.")):n.isLoaded&&n.consultations.length?((0,r.uX)(),(0,r.CE)("ul",uo,[((0,r.uX)(!0),(0,r.CE)(r.FK,null,(0,r.pI)(n.consultations,(e=>((0,r.uX)(),(0,r.CE)("li",{key:e.id},[(0,r.bF)(i,{to:`/consultation/${e.id}`},{default:(0,r.k6)((()=>[(0,r.eW)(" Консультація з "+(0,f.v_)(n.isDoctor?e.patient_name:e.doctor_name)+" на "+(0,f.v_)(e.date)+" о "+(0,f.v_)(e.time),1)])),_:2},1032,["to"])])))),128))])):(0,r.Q3)("",!0)])}var po={name:"UserConsultationsComponent",data(){return{consultations:[],isDoctor:!1,isLoaded:!1}},methods:{fetchUserConsultations(){N.get("consultations/").then((e=>{this.consultations=e.data.consultations||[],this.isDoctor=e.data.is_doctor})).catch((e=>{console.error("Error fetching consultations:",e),e.response&&401===e.response.status&&this.$router.push("/login")})).finally((()=>{this.isLoaded=!0}))}},created(){this.fetchUserConsultations()}};const mo=(0,l.A)(po,[["render",co],["__scopeId","data-v-51729052"]]);var fo=mo;const ho=e=>((0,r.Qi)("data-v-3efc75cf"),e=e(),(0,r.jt)(),e),go={class:"messages"},ko=ho((()=>(0,r.Lk)("h2",null,"Мої Повідомлення",-1))),vo={key:0},Lo={key:1},Co={class:"timestamp"};function bo(e,t,o,s,n,a){return(0,r.uX)(),(0,r.CE)("div",go,[ko,n.messages.length?((0,r.uX)(),(0,r.CE)("ul",Lo,[((0,r.uX)(!0),(0,r.CE)(r.FK,null,(0,r.pI)(n.messages,(e=>((0,r.uX)(),(0,r.CE)("li",{key:e.id,class:(0,f.C4)({unread:!e.is_read})},[(0,r.Lk)("strong",null,(0,f.v_)(e.sender_name),1),(0,r.eW)(" до "+(0,f.v_)(e.recipient_name)+": "+(0,f.v_)(e.content)+" ",1),(0,r.Lk)("span",Co,(0,f.v_)(a.formatDate(e.created_at)),1)],2)))),128))])):((0,r.uX)(),(0,r.CE)("p",vo,"У вас немає повідомлень."))])}var _o={name:"MessagesComponent",data(){return{messages:[]}},methods:{fetchMessages(){N.get("messages/").then((e=>{this.messages=e.data})).catch((e=>{console.error("Error fetching messages:",e),e.response&&401===e.response.status&&this.$router.push("/login")}))},formatDate(e){const t={year:"numeric",month:"long",day:"numeric",hour:"2-digit",minute:"2-digit"};return new Date(e).toLocaleDateString(void 0,t)}},created(){this.fetchMessages()}};const yo=(0,l.A)(_o,[["render",bo],["__scopeId","data-v-3efc75cf"]]);var Eo=yo;const wo=e=>((0,r.Qi)("data-v-50ef11c8"),e=e(),(0,r.jt)(),e),Uo={class:"create-consultation"},So=wo((()=>(0,r.Lk)("h2",null,"Створити нову консультацію",-1))),Xo={class:"form-group"},Po=wo((()=>(0,r.Lk)("label",{for:"patient"},"Пацієнт",-1))),Io=["value"],Ao={class:"form-group"},Do=wo((()=>(0,r.Lk)("label",{for:"date"},"Дата",-1))),Wo={class:"form-group"},Mo=wo((()=>(0,r.Lk)("label",{for:"time"},"Час",-1))),Qo={class:"form-group"},$o=wo((()=>(0,r.Lk)("label",{for:"notes"},"Примітки",-1))),Fo=wo((()=>(0,r.Lk)("button",{type:"submit"},"Створити консультацію",-1)));function jo(e,t,o,n,a,i){return(0,r.uX)(),(0,r.CE)("div",Uo,[So,(0,r.Lk)("form",{onSubmit:t[4]||(t[4]=(0,s.D$)(((...e)=>i.submitConsultation&&i.submitConsultation(...e)),["prevent"]))},[(0,r.Lk)("div",Xo,[Po,(0,r.bo)((0,r.Lk)("select",{"onUpdate:modelValue":t[0]||(t[0]=e=>a.form.patient=e),id:"patient",required:""},[((0,r.uX)(!0),(0,r.CE)(r.FK,null,(0,r.pI)(a.patients,(e=>((0,r.uX)(),(0,r.CE)("option",{key:e.id,value:e.id},(0,f.v_)(e.name),9,Io)))),128))],512),[[s.u1,a.form.patient]])]),(0,r.Lk)("div",Ao,[Do,(0,r.bo)((0,r.Lk)("input",{type:"date","onUpdate:modelValue":t[1]||(t[1]=e=>a.form.date=e),id:"date",required:""},null,512),[[s.Jo,a.form.date]])]),(0,r.Lk)("div",Wo,[Mo,(0,r.bo)((0,r.Lk)("input",{type:"time","onUpdate:modelValue":t[2]||(t[2]=e=>a.form.time=e),id:"time",required:""},null,512),[[s.Jo,a.form.time]])]),(0,r.Lk)("div",Qo,[$o,(0,r.bo)((0,r.Lk)("textarea",{"onUpdate:modelValue":t[3]||(t[3]=e=>a.form.notes=e),id:"notes",rows:"4",placeholder:"Введіть примітки..."},null,512),[[s.Jo,a.form.notes]])]),Fo],32)])}var qo={name:"CreateConsultationComponent",data(){return{form:{patient:"",date:"",time:"",notes:""},patients:[]}},methods:{fetchPatients(){N.get("users/").then((e=>{this.patients=e.data.filter((e=>!e.is_doctor&&!e.is_superuser&&!e.is_staff))})).catch((e=>{console.error("Error fetching patients:",e),e.response&&401===e.response.status&&this.$router.push("/login")}))},submitConsultation(){N.post("consultations/",this.form).then((()=>{this.$router.push("/dashboard")})).catch((e=>{console.error("Error creating consultation:",e)}))}},created(){this.fetchPatients()}};const To=(0,l.A)(qo,[["render",jo],["__scopeId","data-v-50ef11c8"]]);var Vo=To;const Jo=e=>((0,r.Qi)("data-v-bb8e8ec8"),e=e(),(0,r.jt)(),e),Oo={key:0,class:"user-management"},xo=Jo((()=>(0,r.Lk)("h2",null,"Управління користувачами",-1))),Ro={key:0},zo={key:1},Bo=Jo((()=>(0,r.Lk)("thead",null,[(0,r.Lk)("tr",null,[(0,r.Lk)("th",null,"Ім'я"),(0,r.Lk)("th",null,"Email"),(0,r.Lk)("th",null,"Роль"),(0,r.Lk)("th",null,"Дії")])],-1))),Ko={key:0},Ho={key:1},No={key:2},Go={key:3},Yo=["onClick"],Zo=["onClick"],es={key:2,class:"edit-user-modal"},ts={class:"form-group"},os=Jo((()=>(0,r.Lk)("label",{for:"username"},"Ім'я",-1))),ss={class:"form-group"},rs=Jo((()=>(0,r.Lk)("label",{for:"email"},"Email",-1))),ns={class:"form-group"},as=Jo((()=>(0,r.Lk)("label",{for:"role"},"Роль",-1))),is=Jo((()=>(0,r.Lk)("option",{value:"user"},"User",-1))),ls=Jo((()=>(0,r.Lk)("option",{value:"doctor"},"Doctor",-1))),us=Jo((()=>(0,r.Lk)("option",{value:"staff"},"Staff",-1))),cs=Jo((()=>(0,r.Lk)("option",{value:"superuser"},"Superuser",-1))),ds=[is,ls,us,cs],ps=Jo((()=>(0,r.Lk)("button",{type:"submit"},"Оновити",-1))),ms={key:1},fs=Jo((()=>(0,r.Lk)("p",null,"У вас немає доступу до цього розділу.",-1))),hs=[fs];function gs(e,t,o,n,a,i){return a.isSuperUserOrStaff?((0,r.uX)(),(0,r.CE)("div",Oo,[xo,a.users.length?((0,r.uX)(),(0,r.CE)("table",zo,[Bo,(0,r.Lk)("tbody",null,[((0,r.uX)(!0),(0,r.CE)(r.FK,null,(0,r.pI)(a.users,(e=>((0,r.uX)(),(0,r.CE)("tr",{key:e.id},[(0,r.Lk)("td",null,(0,f.v_)(e.username),1),(0,r.Lk)("td",null,(0,f.v_)(e.email),1),(0,r.Lk)("td",null,[e.is_superuser?((0,r.uX)(),(0,r.CE)("span",Ko,"Superuser")):e.is_staff?((0,r.uX)(),(0,r.CE)("span",Ho,"Staff")):e.is_doctor?((0,r.uX)(),(0,r.CE)("span",No,"Doctor")):((0,r.uX)(),(0,r.CE)("span",Go,"User"))]),(0,r.Lk)("td",null,[(0,r.Lk)("button",{onClick:t=>i.editUser(e)},"Редагувати",8,Yo),(0,r.Lk)("button",{onClick:t=>i.deleteUser(e.id)},"Видалити",8,Zo)])])))),128))])])):((0,r.uX)(),(0,r.CE)("p",Ro,"Користувачі відсутні.")),a.selectedUser?((0,r.uX)(),(0,r.CE)("div",es,[(0,r.Lk)("h3",null,"Редагувати користувача: "+(0,f.v_)(a.selectedUser.username),1),(0,r.Lk)("form",{onSubmit:t[4]||(t[4]=(0,s.D$)(((...e)=>i.updateUser&&i.updateUser(...e)),["prevent"]))},[(0,r.Lk)("div",ts,[os,(0,r.bo)((0,r.Lk)("input",{type:"text","onUpdate:modelValue":t[0]||(t[0]=e=>a.selectedUser.username=e),id:"username",required:""},null,512),[[s.Jo,a.selectedUser.username]])]),(0,r.Lk)("div",ss,[rs,(0,r.bo)((0,r.Lk)("input",{type:"email","onUpdate:modelValue":t[1]||(t[1]=e=>a.selectedUser.email=e),id:"email",required:""},null,512),[[s.Jo,a.selectedUser.email]])]),(0,r.Lk)("div",ns,[as,(0,r.bo)((0,r.Lk)("select",{"onUpdate:modelValue":t[2]||(t[2]=e=>a.selectedUser.role=e),id:"role"},ds,512),[[s.u1,a.selectedUser.role]])]),ps,(0,r.Lk)("button",{onClick:t[3]||(t[3]=e=>a.selectedUser=null)},"Скасувати")],32)])):(0,r.Q3)("",!0)])):((0,r.uX)(),(0,r.CE)("div",ms,hs))}var ks={name:"UserManagementComponent",data(){return{users:[],selectedUser:null,isSuperUserOrStaff:!1}},methods:{fetchUsers(){N.get("users/").then((e=>{this.users=e.data,this.checkAccess()})).catch((e=>{console.error("Error fetching users:",e),e.response&&401===e.response.status&&this.$router.push("/login")}))},checkAccess(){const e=localStorage.getItem("userEmail"),t=this.users.find((t=>t.email===e));t&&(this.isSuperUserOrStaff=t.is_superuser||t.is_staff)},editUser(e){this.selectedUser={...e,role:this.getRole(e)}},getRole(e){return e.is_superuser?"superuser":e.is_staff?"staff":e.is_doctor?"doctor":"user"},updateUser(){const e={...this.selectedUser,is_superuser:"superuser"===this.selectedUser.role,is_staff:"staff"===this.selectedUser.role,is_doctor:"doctor"===this.selectedUser.role};N.put(`users/${this.selectedUser.id}/`,e).then((()=>{this.selectedUser=null,this.fetchUsers()})).catch((e=>{console.error("Error updating user:",e)}))},deleteUser(e){N.delete(`users/${e}/`).then((()=>{this.fetchUsers()})).catch((e=>{console.error("Error deleting user:",e)}))}},created(){this.fetchUsers()}};const vs=(0,l.A)(ks,[["render",gs],["__scopeId","data-v-bb8e8ec8"]]);var Ls=vs,Cs={name:"DashboardPage",components:{UserConsultationsComponent:fo,MessagesComponent:Eo,CreateConsultationComponent:Vo,UserManagementComponent:Ls},data(){return{isDoctor:!1,isSuperuser:!1,isStaff:!1}},created(){this.checkUserRoles()},methods:{checkUserRoles(){const e={is_doctor:"true"===localStorage.getItem("isDoctor"),is_superuser:"true"===localStorage.getItem("isSuperuser"),is_staff:"true"===localStorage.getItem("isStaff")};this.isDoctor=e.is_doctor,this.isSuperuser=e.is_superuser,this.isStaff=e.is_staff}}};const bs=(0,l.A)(Cs,[["render",ao],["__scopeId","data-v-ba8af82e"]]);var _s=bs;const ys=e=>((0,r.Qi)("data-v-ea351f90"),e=e(),(0,r.jt)(),e),Es={class:"consultations-list"},ws=ys((()=>(0,r.Lk)("h2",null,"Мої Консультації",-1))),Us={key:0},Ss={key:1};function Xs(e,t,o,s,n,a){const i=(0,r.g2)("router-link");return(0,r.uX)(),(0,r.CE)("div",Es,[ws,n.consultations.length?((0,r.uX)(),(0,r.CE)("ul",Ss,[((0,r.uX)(!0),(0,r.CE)(r.FK,null,(0,r.pI)(n.consultations,(e=>((0,r.uX)(),(0,r.CE)("li",{key:e.id},[(0,r.bF)(i,{to:`/consultation/${e.id}`},{default:(0,r.k6)((()=>[(0,r.eW)(" Консультація з "+(0,f.v_)(e.doctor_name)+" для "+(0,f.v_)(e.patient_name)+" на "+(0,f.v_)(e.date)+" о "+(0,f.v_)(e.time),1)])),_:2},1032,["to"])])))),128))])):((0,r.uX)(),(0,r.CE)("p",Us,"У вас немає запланованих консультацій."))])}var Ps={name:"ConsultationsListComponent",data(){return{consultations:[]}},methods:{fetchConsultations(){N.get("consultations/").then((e=>{this.consultations=e.data})).catch((e=>{console.error("Error fetching consultations:",e),e.response&&401===e.response.status&&this.$router.push("/login")}))}},created(){this.fetchConsultations()}};const Is=(0,l.A)(Ps,[["render",Xs],["__scopeId","data-v-ea351f90"]]);var As=Is;const Ds=e=>((0,r.Qi)("data-v-6230d547"),e=e(),(0,r.jt)(),e),Ws=Ds((()=>(0,r.Lk)("h1",null,"404 - Сторінку не знайдено",-1))),Ms=Ds((()=>(0,r.Lk)("p",null,"На жаль, сторінка, яку ви шукаєте, не існує.",-1)));function Qs(e,t,o,s,n,a){const i=(0,r.g2)("router-link");return(0,r.uX)(),(0,r.CE)("div",null,[Ws,Ms,(0,r.bF)(i,{to:"/"},{default:(0,r.k6)((()=>[(0,r.eW)("Повернутися на головну")])),_:1})])}var $s={name:"NotFoundPage"};const Fs=(0,l.A)($s,[["render",Qs],["__scopeId","data-v-6230d547"]]);var js=Fs;const qs=[{path:"/",name:"home",component:S},{path:"/login",name:"login",component:Ce},{path:"/profile",name:"profile",component:_t,meta:{requiresAuth:!0}},{path:"/dashboard",name:"dashboard",component:_s,meta:{requiresAuth:!0}},{path:"/consultations",name:"consultationsList",component:As,meta:{requiresAuth:!0}},{path:"/register",name:"register",component:ke},{path:"/consultations/:id",name:"consultationDetails",component:Gt,meta:{requiresAuth:!0}},{path:"/:pathMatch(.*)*",name:"not-found",component:js}],Ts=(0,d.aE)({history:(0,d.LA)(),routes:qs});Ts.beforeEach(((e,t,o)=>{const s=e.matched.some((e=>e.meta.requiresAuth)),r=!!localStorage.getItem("accessToken");s&&!r?o({path:"/login",query:{redirect:e.fullPath}}):o()}));var Vs=Ts;const Js=(0,s.Ef)(c);Js.use(Vs),Js.mount("#app")}},t={};function o(s){var r=t[s];if(void 0!==r)return r.exports;var n=t[s]={exports:{}};return e[s].call(n.exports,n,n.exports,o),n.exports}o.m=e,function(){var e=[];o.O=function(t,s,r,n){if(!s){var a=1/0;for(c=0;c<e.length;c++){s=e[c][0],r=e[c][1],n=e[c][2];for(var i=!0,l=0;l<s.length;l++)(!1&n||a>=n)&&Object.keys(o.O).every((function(e){return o.O[e](s[l])}))?s.splice(l--,1):(i=!1,n<a&&(a=n));if(i){e.splice(c--,1);var u=r();void 0!==u&&(t=u)}}return t}n=n||0;for(var c=e.length;c>0&&e[c-1][2]>n;c--)e[c]=e[c-1];e[c]=[s,r,n]}}(),function(){o.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return o.d(t,{a:t}),t}}(),function(){o.d=function(e,t){for(var s in t)o.o(t,s)&&!o.o(e,s)&&Object.defineProperty(e,s,{enumerable:!0,get:t[s]})}}(),function(){o.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),function(){o.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}}(),function(){var e={524:0};o.O.j=function(t){return 0===e[t]};var t=function(t,s){var r,n,a=s[0],i=s[1],l=s[2],u=0;if(a.some((function(t){return 0!==e[t]}))){for(r in i)o.o(i,r)&&(o.m[r]=i[r]);if(l)var c=l(o)}for(t&&t(s);u<a.length;u++)n=a[u],o.o(e,n)&&e[n]&&e[n][0](),e[n]=0;return o.O(c)},s=self["webpackChunkmedical_project"]=self["webpackChunkmedical_project"]||[];s.forEach(t.bind(null,0)),s.push=t.bind(null,s.push.bind(s))}();var s=o.O(void 0,[504],(function(){return o(6576)}));s=o.O(s)})();
//# sourceMappingURL=app.7218bc20.js.map