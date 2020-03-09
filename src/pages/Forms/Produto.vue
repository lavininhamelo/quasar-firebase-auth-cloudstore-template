<template>
  <div>
    Produto
    <form id="form" v-on:submit.prevent="signup()">
      <q-input v-model="nome" type="text" label="Nome" />

      <q-input v-model="descricao" type="text" label="Descrição" />

      <q-input v-model="imagem" type="text" label="Imagem" />
      <q-input v-model="preco" type="text" label="Preço" />

      <input type="submit" value="Register" />
    </form>
  </div>
</template>

<script>
import { firebase, db, auth } from "../../config/firebase";
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
          console.log("oi");
          return db.collection("Produtos").add({
            nome: this.nome,
            preco: this.preco,
            imagem: this.imagem,
            descricao: this.descricao
          });
        } catch (error) {
          const e = `${error.code} - ${error.message}`;
          console.log(e);
        }
      } else {
        this.$router.push("/login");
      }
      this.$router.push("/profile");
    }
  },
  mounted() {
    console.log(firebase);
  }
};
</script>
