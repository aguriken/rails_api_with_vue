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
      <v-btn right class="ma-2" title color="success" @click="messageUpdate">Update</v-btn>
      <v-btn right class="ma-2" title color="error" @click="messageDelete">Delete</v-btn>
    </v-card>
  </v-content>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      title: "",
      content: ""
    };
  },
  created() {
    const messageId = this.$router.currentRoute.params.id
    axios.get(`messages/${messageId}`).then((response) => {
      const message = response.data.data
      this.title = message.attributes.title
      this.content = message.attributes.content
    }).catch((error) => {
      console.log(error)
    })
  },
  methods: {
    messageUpdate() {
      const messageId = this.$router.currentRoute.params.id
      axios.put(`/messages/${messageId}`, {
        title: this.title,
        content: this.content
      }).then((response) => {
        console.log(response)
        this.$router.push('/')
      }).catch((error) => {
        console.log(error)
      })
    },
    messageDelete() {
      const messageId = this.$router.currentRoute.params.id
      axios.delete(`/messages/${messageId}`).then((response) => {
        console.log(response)
        this.$router.push('/')
      }).catch((error) => {
        console.log(error)
      })
    }
  }
}
</script>
