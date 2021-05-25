<template>
  <div>

      <FormulateForm :schema="schema" v-model="values" />
  </div>
</template>

<script>
import Schema from "../../../schemas/client/societe"
export default {
    name:"FormSociete",
    data(){
        return{
            values:{},
            schema:Schema,
        }
    }
}
</script>

<style>

</style>