<template>
  <div class="ion-page">
    <ion-header>
      <ion-toolbar color="medium">
        <ion-title>Create Task</ion-title> 
      </ion-toolbar>
    </ion-header>

    <ion-content>
      <form novalidate @submit.prevent="createTask">
        <ion-card>
          <ion-item>
            <ion-label position="floating" color="dark">Date</ion-label>
            <ion-datetime v-model="taskForm.date"></ion-datetime>
          </ion-item>

          <ion-item>
            <ion-label position="floating" color="dark">Boat</ion-label>
           <ion-select v-model="taskForm.boatName" placeholder="Select One">
                <ion-select-option v-for="(boat, index) in boatList" :key="index">{{boat.name}}</ion-select-option>
           </ion-select>
          </ion-item>
          <!-- <ion-item>
            <ion-label position="floating" color="dark">Reservation Code</ion-label>
           
          </ion-item> -->
          <ion-item>
            <ion-label position="floating" color="dark">Start time</ion-label>
            <ion-datetime v-model="taskForm.startTime" displayFormat="hh-mm-A"></ion-datetime>
          </ion-item>
          <ion-item>
            <ion-label  position="floating" color="dark">End time</ion-label>
            <ion-datetime v-model="taskForm.endTime" displayFormat="hh-mm-A"></ion-datetime>
          </ion-item>
          <ion-item>
            <ion-label position="floating" color="dark">Location</ion-label>
           <ion-select v-model="taskForm.location" placeholder="Select One">
                <ion-select-option v-for="(location, index) in locations" :key="index">{{location.name}}</ion-select-option>
           </ion-select>
          </ion-item>
          <ion-item>
            <ion-label position="floating" color="dark">Assign to user</ion-label>
           <ion-select v-model="taskForm.userId" placeholder="Select One">
                <ion-select-option v-for="(user, index) in users" :key="index" :value="user.id">{{user.name}}</ion-select-option>
           </ion-select>
          </ion-item>
          
        </ion-card> 

        <ion-row responsive-sm>
          <ion-col>
            <ion-button color="medium" type="submit" expand="block">Create</ion-button>
          </ion-col>
          </ion-row>
      </form>
    </ion-content>
  </div>
</template>

<script>
import { IonButton, IonItem, IonLabel, IonCol, IonRow, IonCard, IonSelect, IonSelectOption,
      IonHeader, IonToolbar,  IonTitle,IonContent, IonDatetime } from "@ionic/vue";
export default {
  components: {
    IonButton, IonItem, IonLabel, IonCol, IonRow, IonCard, IonSelect, IonSelectOption,
      IonHeader, IonToolbar, IonTitle,IonContent, IonDatetime
  },
  data() {
    return { 
        taskForm:{
          userId:'',
          date:'',
          boatName:'',
          location:'', 
          startTime:'',
          endTime:'',
          code:''  
        },
        boatList:[
            { name:'40 Van Dutch'},
            { name:'55 Day Dreamer'},
            { name:'55 Alegria'},
            { name:'65 Numarine'},
            { name:'80 Numarine'}
        ],
        locations:[
            { name:'Miami Beach Marina'},
            { name:'Sea Isle Marina'},
            { name:'Diplomat'}
        ],
        displayError: false,
        displayUsernameError: false,
        displayPasswordError: false,
        password:'',
        username:''
     };
  },
  methods:{
      createTask(){
          let randomString = (Math.random() + 1).toString(36).substring(7);
          this.taskForm.code = randomString
          let date = this.taskForm.date.split('T')[0]
          this.taskForm.date = date 
          let startTime = this.taskForm.startTime.split('T')[1].substring(0,5)
          this.taskForm.startTime = startTime
          let endtTime = this.taskForm.endTime.split('T')[1].substring(0,5)
          this.taskForm.endTime = endtTime  
          this.$store.dispatch('setTask', this.taskForm);
          this.$router.push({name: "userslist"});
      },
      
  },
  computed:{
      users() {
      return this.$store.getters.getUsers;
    },
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



