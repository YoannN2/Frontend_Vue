<template>
  <div>
      <FormulateForm :schema="schema" v-model="values"/>

        <div class="card-content">
            <pre v-text="values" class="md-elevation-3"></pre>
        </div>
  </div>
</template>

<script>
import Schema from "../../../schemas/client/clientAccount"
export default {
    name:"formPersoClient",
    data(){
        return{
            schema:Schema,
            values:{},
        }
    }
}
</script>

<style>

</style>