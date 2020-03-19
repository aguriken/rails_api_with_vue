<template>
  <v-card
    class="mx-auto mt-3"
    max-width="400"
    tile
  >
    <v-list-item v-for="message in messages" :key="message.title">
      <v-list-item-content>
        <v-list-item-title>{{message.attributes.title}}</v-list-item-title>
        <v-list-item-subtitle>{{message.attributes.content}}</v-list-item-subtitle>
      </v-list-item-content>
    </v-list-item>
  </v-card>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      title: "",
      content: "",
      messages: []
    };
  },
  created() {
    axios.get("http://localhost:3000/api/v1/messages").then((response) => {
      this.messages = response.data.data
    }).catch((err) => {
      console.log(err)
    })
  }
}
</script>
