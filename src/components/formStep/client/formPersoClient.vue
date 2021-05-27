<template>
  <div>
      <FormulateForm :schema="schema" v-model="values" @submit="registered" />
        <div class="card-content">
            <pre v-text="this.$store.state.values" class="md-elevation-3"></pre>
        </div>
  </div>
</template>
<script>
import Schema from "../../../schemas/client/clientAccount"
export default {
    name: "formPersoClient",
    props: {
        nextForm: Function,
    },
    data () {
        return {
            schema: Schema,
            values: {
                isValid: false,
            },
        }
    },
    methods: {
        registered () {
            this.values.isValid = true; // Renvoie true pour garder une trace de la validation
            this.$store.commit('registered',this.values);   // stocke les données du formulaire dans le store
            this.$emit("nextForm",1);   //permet de passer a la prochaine step avec la fonction passer en props et renvoie la valeur 1 (index)
        }
    }
}
</script>
<style>
</style>