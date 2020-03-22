<template>
  <v-content>
    <v-container class="mx-auto">
      <v-card
      class="mx-auto"
        width="600"
        tile
      >
        <v-list v-for="message in messages" :key="message.title">
          <v-list-item router :to="`messages/${message.id}`">
            <v-list-item-content>
              <v-list-item-title>{{message.attributes.title}}</v-list-item-title>
              <v-list-item-subtitle>{{message.attributes.content}}</v-list-item-subtitle>
            </v-list-item-content>
          </v-list-item>
        </v-list>
      </v-card>
      <v-card
      class="mx-auto"
        width="600"
      >
        <v-btn class="ma-2" title color="success" dark router :to="{ name: 'messageNew'}">New Message</v-btn>
      </v-card>
    </v-container>
  </v-content>
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
    }).catch((error) => {
      console.log(error)
    })
  }
}
</script>
