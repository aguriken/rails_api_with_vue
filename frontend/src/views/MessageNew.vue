<template>
  <v-content>
    <v-card
      class="mx-auto"
      width="600"
    >
      <v-btn depressed small router :to="`/`">Back</v-btn>
    </v-card>
    <v-card 
      class="mx-auto pa-5"
      width="600"
      height="200"
    >
      <v-text-field label="Title" hide-details="auto" v-model="title">{{ title }}</v-text-field>
      <v-text-field label="Content" v-model="content">{{ content }}</v-text-field>
      <v-btn right class="ma-2" title color="success" @click="messagePost">Submit</v-btn>
    </v-card>
  </v-content>
</template>

<script>
import axios from "axios";
export default {
  data: () => ({
    title: "",
    content: ""
  }),
  methods: {
    messagePost() {
      axios.post("http://localhost:3000/api/v1/messages", {
        title: this.title,
        content: this.content
      }).then((response) => {       
        this.title = "",
        this.content = ""
        console.log(response)
        this.$router.push('/')
      }).catch((error) => {
        console.log(error)
      })
    }
  }
}
</script>
