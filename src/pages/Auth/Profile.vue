<template>
  <div>
    Profile
    <a href="#" @click="logout()">Logout</a>
    <br /><br />
    <p>{{ first_name }} {{ last_name }}</p>
  </div>
</template>

<script>
import { firebase, db, auth } from "../../config/firebase";
import Router from "vue-router";
export default {
  name: "Profile",
  data() {
    return {
      email: null,
      first_name: null,
      last_name: null
    };
  },
  methods: {
    logout() {
      const r = this;
      auth
        .signOut()
        .then(() => r.$router.push("/login"))
        .catch(function(error) {
          const e = `${error.code} - ${error.message}`;
          console.log(e);
        });
    },
    userData() {
      const user = auth.currentUser;
      if (user) {
        db.collection("Users")
          .doc(user.uid)
          .get()
          .then(doc => {
            this.email = doc.data().email;
            this.first_name = doc.data().first_name;
            this.last_name = doc.data().last_name;
          })
          .catch(function(error) {
            const e = `${error.code} - ${error.message}`;
            console.log(e);
          });
      } else {
        this.$router.push("/login");
      }
    }
  },
  mounted() {
    this.userData();
  }
};
</script>

<style></style>
