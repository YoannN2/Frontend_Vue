<template>
  <div>
    <FormulateForm v-model="values" :schema="schema" @submit="registered" />

    <div class="card-content">
      <h3>Valeur des formulaires</h3>
      <pre v-text="this.$store.state.values" class="md-elevation-3"></pre>
    </div>
  </div>
</template>

<script>
import Schema from "../../../schemas/interimaire/Professionnelle"
export default {
  name:"Pro",
  data () {
    return {
      values: {
        isValid: false,
      },
      schema: Schema
    }
  },
  methods:{
    registered () {
      this.values.isValid = true; // Renvoie true pour permettre de garder la validation
      this.$store.commit('registered',this.values); //stocke les données du form dans le store
      alert("Vous avez été enregistré avec succés !")
    }
  }
}
</script>

<style>

</style>