import Vue from 'vue';
import Router from 'vue-router';
import Messages from "./views/Messages";
import MessageDetail from "./views/MessageDetail";
import MessageNew from "./views/MessageNew";

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
      name: 'messageDetail',
      component: MessageDetail
    },
    {
      path: '/messages/new',
      name: 'messageNew',
      component: MessageNew
    }
  ]
})
