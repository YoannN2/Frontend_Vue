<template>
  <div>
    <div class="column is-half">

      <FormulateForm v-model="values" :schema="schema" @submit="registered" />

    </div>
    <div class="card-content">
      <h3>Valeur du formulaire complet step Perso (interimaire)</h3>
        <pre v-text="this.$store.state.values" class="md-elevation-3"></pre>
    </div>
  </div>
</template>

<script>
import Schema from "../../../schemas/interimaire/Personnelle"
export default {
  name: "formPerso",
  props: {
    nextForm: Function,
  },
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
      this.values.isValid = true; //Chaque formulaire a une valeur isValid qui lui est propre (a utiliser pour la fonction retour arrière)
      this.$store.commit('registered',this.values); //Les données du formulaire sont stocké dans le store
      this.$emit("nextForm",1); //permet de passer d'une step a l'autre en renvoyant l'index du prochain step au parent grace a la fonction passez en props
    }
  }
}
</script>

<style>

</style>