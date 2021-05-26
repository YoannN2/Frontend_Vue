<template>
  <div>
    <div class="column is-half">

      <FormulateForm v-model="values" :schema="schema" @submit="registered" />

    </div>
    <div class="card-content">
        <pre v-text="values" class="md-elevation-3"></pre>
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
      this.isValid = true;
      this.$store.commit('registered',this.values);
      this.$emit("nextForm",1);
    }
  }
}
</script>

<style>

</style>