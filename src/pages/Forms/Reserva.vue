<template>
  <div>
    Reserva
    <form id="form" v-on:submit.prevent="reservar()">
      <q-input v-model="nome" type="text" label="Nome" />
      <q-input v-model="telefone" type="text" label="Telefone" />
      <q-input v-model="cpf" type="text" label="CPF" />
      <q-input v-model="produto" type="text" label="Produto" />

      <input type="submit" value="Register" />
    </form>
  </div>
</template>

<script>
import { firebase, db, auth } from "../../config/firebase";
import Router from "vue-router";
export default {
  name: "Reserva",
  data() {
    return {
      nome: "",
      telefone: "",
      cpf: "",
      produto: ""
    };
  },
  methods: {
    reservar() {
      try {
        console.log("oi");
        return db.collection("Reservas").add({
          nome: this.nome,
          produto: this.produto,
          cpf: this.cpf,
          telefone: this.telefone
        });
      } catch (error) {
        const e = `${error.code} - ${error.message}`;
        console.log(e);
      }
    }
  },
  mounted() {
    console.log(firebase);
  }
};
</script>
