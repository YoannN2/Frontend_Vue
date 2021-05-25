<template>
  <div>
    <div class="column is-half">

      <FormulateForm v-model="values" :schema="schema" />

    </div>
        <div class="card-content">
            <pre v-text="values" class="md-elevation-3"></pre>
        </div>
  </div>
</template>

<script>
import Schema from "../../../schemas/interimaire/Personnelle"
export default {
  name:"formPerso",
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