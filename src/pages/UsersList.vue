<template>
  <base-layout page-title="All Users">
  <template v-slot:actions-end>
      <!-- v-show="role == 'Admin'" -->
      <ion-button router-link="/create-task">  
        <ion-icon :icon="add" v-show="role == 'Admin'"></ion-icon>
      </ion-button>
      <ion-button router-link="/">
            Log Out
      </ion-button>
      </template>
    <ion-list>
        <ion-item v-for="(user, index) in users" :key="index"  button @click="userClick(user)"> 
             <ion-label>
                 {{user.name}}
            </ion-label>
        </ion-item>
    </ion-list>
    
  </base-layout>
</template>

<script>
import { IonButton, IonIcon, IonList, IonItem, IonLabel } from "@ionic/vue";
import { add } from "ionicons/icons";

export default {
  components: {
    IonButton,
    IonIcon,
    IonList, IonItem, IonLabel
  },
  data() {
    return { 
        add,
        userRole:''
     };
  },
//   beforeCreate(){
//       this.userRole = this.$store.getters.getUserData.role;
//       console.log(this.userRole)
//   },
  computed: {
      role(){
          return this.$store.getters.getUserData.role;
      },
    users() {
      return this.$store.getters.getUsers;
    },
  },
  methods:{
      redirectForm(){
          this.$router.push({name: "taskform"});
      },
      userClick(user){
          this.$router.push({
            name: "tasklist", //use name for router push
            params: {
            id: user.id,
            },
        });
      }
  }
};
</script>