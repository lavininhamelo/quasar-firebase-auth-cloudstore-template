<template>
  <div>
    Register
    <form id="form" v-on:submit.prevent="signup()">
      E-mail:
      <input type="email" v-model="email" placeholder="email@email.com" />
      Password: <input type="password" v-model="password" /> First Name:<input
        type="text"
        v-model="first_name"
      />
      Last Name: <input type="text" v-model="last_name" />
      <input type="submit" value="Register" />
    </form>
  </div>
</template>

<script>
import { firebase, db, auth } from "../../config/firebase";
import Router from "vue-router";
export default {
  name: "Register",
  data() {
    return {
      email: null,
      password: null,
      first_name: null,
      last_name: null
    };
  },
  methods: {
    signup() {
      auth
        .createUserWithEmailAndPassword(this.email, this.password)
        .then(created => {
          return db
            .collection("Users")
            .doc(created.user.uid)
            .set({
              first_name: this.first_name,
              last_name: this.last_name
            });
          this.$router.push("/profile");
        })
        .catch(function(error) {
          const e = `${error.code} - ${error.message}`;
          console.log(e);
        });
    }
  },
  mounted() {
    console.log(firebase);
  }
};
</script>

<style></style>
