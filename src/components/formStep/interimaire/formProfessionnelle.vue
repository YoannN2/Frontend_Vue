<template>
  <div>
    <FormulateForm v-model="values" :schema="schema" />

    <div class="card-content">
            <pre v-text="values" class="md-elevation-3"></pre>
        </div>
  </div>
</template>

<script>
import Schema from "../../../schemas/interimaire/Professionnelle"
export default {
  name:"Pro",
  data(){
    return{
      values:{},
      schema:Schema
    }
  }
}
</script>

<style>

</style>