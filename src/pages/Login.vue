<template>
  <div class="ion-page">
    <ion-header>
      <ion-toolbar color="medium">
        <ion-title>Sign In </ion-title> 
      </ion-toolbar>
    </ion-header>

    <ion-content>
      <div class="login-logo">
        <img src="@/assets/img/csm.jpg" alt="Ionic logo">
      </div>
 
      <form novalidate @submit.prevent="onLogin">
        <ion-card>
          <ion-item>
            <ion-label position="floating" color="dark">Username</ion-label>
            <ion-input
              v-model="username"
              name="username"
              type="text"
              spellcheck="false"
              autocapitalize="off"
              required
            ></ion-input>
          </ion-item>

          <ion-item>
            <ion-label position="floating" color="dark">Password</ion-label>
            <ion-input v-model="password" name="password" type="password" required></ion-input>
          </ion-item>

        </ion-card> 

        <ion-row responsive-sm>
          <ion-col>
            <ion-button color="medium" type="submit" expand="block">Sign In</ion-button>
          </ion-col>
        </ion-row>
        <ion-row> 
          <ion-col>
              <ion-text class="ion-text-center" color="danger">
            <p v-show="displayError" padding-left>Username or password incorrect</p>
          </ion-text>
          </ion-col>
        </ion-row>
      </form>
    </ion-content>
    
  </div>
</template>

<script>
import { IonButton, IonItem, IonLabel, IonCol, IonRow, IonCard, IonHeader, IonToolbar, IonTitle,IonContent,
IonInput, IonText} from "@ionic/vue";


export default {
  components: {
    IonButton, IonItem, IonLabel, IonCol, IonRow, IonCard, IonHeader, IonToolbar, IonTitle,IonContent,IonInput, IonText
  },
  data() {
    return { 
        displayError: false,
        displayUsernameError: false,
        displayPasswordError: false,
        password:'',
        username:''
     };
  },
  methods:{
      onLogin(){
        this.$store.dispatch('logIn', {username:this.username, password:this.password})
            .then(()=>{
                let user = this.$store.getters.getUserData;
                if(!user.isLoggedIn) this.displayError = true
                else this.$router.push({name: "userslist"}); 
            })
        
      }
  }
  
};


</script>

<style scoped>
.login-logo {
  padding: 20px 0;
  min-height: 200px;
  text-align: center;
}
.login-logo img {
  max-width: 150px;
}
.list {
  margin-bottom: 0;
}
</style>



