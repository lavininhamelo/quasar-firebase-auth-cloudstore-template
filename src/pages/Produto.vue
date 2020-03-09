<template>
  <div>
    Produto
    <form id="form" v-on:submit.prevent="signup()">
      <q-input v-model="nome" type="text" label="Nome" />

      <q-input v-model="descricao" type="text" label="Descrisção" />

      <q-input v-model="imagem" type="text" label="Imagem" />
      <q-input v-model="preco" type="text" label="Preço" />

      <input type="submit" value="Register" />
    </form>
  </div>
</template>

<script>
import { firebase, db, auth } from "../config/firebase";
import Router from "vue-router";
export default {
  name: "Produto",
  data() {
    return {
      nome: "",
      descricao: "",
      imagem: "",
      preco: ""
    };
  },
  methods: {
    signup() {
      const user = auth.currentUser;
      if (user) {
        try {
          return db
            .collection("Product")
            .doc(created.user.uid)
            .set({
              nome: this.nome,
              preco: this.preco,
              imagem: this.imagem,
              descricao: this.descricao
            });
          this.$router.push("/profile");
        } catch (error) {
          const e = `${error.code} - ${error.message}`;
          console.log(e);
        }
      } else {
        this.$router.push("/login");
      }
    }
  },
  mounted() {
    console.log(firebase);
  }
};
</script>
