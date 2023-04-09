<template>
    <v-container>
      <h1>Contact</h1>
      <v-form ref="form" v-model="valid" @submit.prevent="submit">
        <v-text-field
          v-model="name"
          :rules="nameRules"
          label="Name"
          required
        ></v-text-field>
        <v-text-field
          v-model="email"
          :rules="emailRules"
          label="E-mail"
          required
        ></v-text-field>
        <v-textarea
          v-model="message"
          :rules="messageRules"
          label="Message"
          required
        ></v-textarea>
        <v-btn type="submit" :disabled="!valid">Send</v-btn>
      </v-form>
    </v-container>
  </template>
  
  <script>
  export default {
    // eslint-disable-next-line vue/multi-word-component-names
    name: "Contact",
    data() {
      return {
        valid: false,
        name: "",
        nameRules: [
          (v) => !!v || "Name is required",
        ],
        email: "",
        emailRules: [
          (v) => !!v || "E-mail is required",
          (v) => /.+@.+/.test(v) || "E-mail must be valid",
        ],
        message: "",
        messageRules: [
          (v) => !!v || "Message is required",
        ],
      };
    },
    methods: {
      submit() {
        if (this.$refs.form.validate()) {
          // フォームの内容が正しい場合、ここでメッセージを送信
          console.log({
            name: this.name,
            email: this.email,
            message: this.message,
          });
  
          // フォームをリセット
          this.$refs.form.reset();
          this.$refs.form.resetValidation();
        }
      },
    },
  };
  </script>
  