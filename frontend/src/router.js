import Vue from 'vue';
import Router from 'vue-router';
import Messages from "./views/Messages";
import MessagesDetail from "./views/MessagesDetail";

Vue.use(Router)

export default new Router({
  mode: "history",
  routes: [
    { 
      path: '/',
      component: Messages 
    },
    { 
      path: '/messages/:id', 
      component: MessagesDetail
    }
  ]
})
