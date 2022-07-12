<template>
  <base-layout page-title="Task List">
    <template v-slot:actions-end>
    
    </template>
    <ion-list>
        <ion-item v-for="(task, index) in userTasks" :key="index" :router-link="`/memories/${task.id}`"> 
            <ion-card>
                <ion-card-header>
                <ion-card-title>{{formatDate(task.date)}}</ion-card-title>
                <span style="font-weight:bold">Boat: </span><span>{{task.boatName}}</span>
                <br>
                <span style="font-weight:bold">Reservation Code: WRSA -</span><span>{{task.code}}</span>
                <br>
                <span style="font-weight:bold">Start time: </span><span>{{task.startTime}}</span>
                <span> - </span>
                <span style="font-weight:bold">End time: </span><span>{{task.endTime}}</span>
                <br>
                <span style="font-weight:bold">Location: </span><span>{{task.location}}</span>
                </ion-card-header>
            </ion-card>
        </ion-item>
    </ion-list>
  </base-layout>
</template>

<script>
import { IonList, IonItem,IonCard, IonCardHeader, IonCardTitle } from "@ionic/vue";

export default {
  components: {
    IonList, IonItem,IonCard, IonCardHeader, IonCardTitle
  },
  created(){
      this.userId = this.$route.params.id;
      this.tasks = this.$store.getters.getTasks;
      this.loadTasks()
  },
  data() {
    return { 
        tasks:[],
        userId: 0,
        userTasks:[]
     };
  },
  computed: {
    //   formatDate(dateToFormat){
    //       const date = new Date(dateToFormat);
    //         const month = date.toLocaleString('default', { month: 'long' });
    //         return month
    //   },
    users() {
      return this.$store.getters.getUsers;
    },
  },
  methods:{
      formatDate(dateToFormat){
          console.log(dateToFormat)
          const date = new Date(dateToFormat);
            const month = date.toLocaleString('default', { month: 'long' });
            const day = date.toLocaleString('default', { weekday: 'long' });
            let dateFormatted = day + ', ' + month + ' ' + date.getDay()+ 'th' + ', ' + date.getFullYear()
            return dateFormatted
      },
   loadTasks(){
       console.log('Load tasks ')
       this.userTasks = this.tasks.filter(task => task.userId == this.userId)
       console.log('usertask: ' + this.userTasks)
   }   
  }
};
</script>