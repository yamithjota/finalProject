import { createStore } from 'vuex';

const store = createStore({
  state() {
    return {
      tasks:[
        {
          id: 1, date:'2022', boatName: 'Glory', code: 'WRSA-ABCD', startTime: '13:30', endTime: '16:30', location:'MBM',
          userId: 1    	 
        }
      ],
      users:[
        {
          id: 1, isLoggedIn: false, username:'user', password: '12345', role:'Employee', task:[], name: 'Carlos Aponte'
        },
        {
          id: 2, isLoggedIn: false, username:'admin', password: 'admin', role:'Admin', name: 'Andres Marin'
        },
        {
          id: 3, isLoggedIn: false,  username:'user1', password: '123456', role:'Employee', task:[], name:'Pedro Rodriguez'
        }
      ],
      userData:{
        role:'',
        username:'',
        password: '',
        isLoggedIn: false
      }

    };
  },
  mutations: {
    setTask(state, taskData){
      state.tasks.push(taskData)
    },
    setUserData(state, userData){
      state.userData.username = userData.username
      state.userData.password = userData.password
      state.userData.isLoggedIn = userData.isLoggedIn
      state.userData.role = userData.role
    }
  },
  actions: {
    setTask({commit},taskData){
      commit('setTask', taskData)
    },
    logIn({commit, state},userData){
      state.users.forEach(user => {
        if(user.username == userData.username && user.password == userData.password){
          user.isLoggedIn = true
          commit('setUserData', user)
        }else false
      })
    }
  },
  getters: {
  getUserData(state){
      return state.userData
    },
    getUsers(state) {
      return state.users;
    },
    getTasks(state) {
      return state.tasks;
    },
  },
});

export default store;
