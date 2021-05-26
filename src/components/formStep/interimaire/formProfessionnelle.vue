<template>
  <div>
    <FormulateForm v-model="values" :schema="schema" @submit="registered" />

    <div class="card-content">
      <pre v-text="values" class="md-elevation-3"></pre>
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
      this.isValid = true;
      this.$store.commit('registered',this.values);
      alert("Vous avez été enregistré avec succés !")
    }
  }
}
</script>

<style>

</style>