<template>
  <div>
      <FormulateForm :schema="schema" v-model="values" @submit="registered" />

        <div class="card-content">
            <pre v-text="values" class="md-elevation-3"></pre>
        </div>
  </div>
</template>

<script>
import Schema from "../../../schemas/client/clientAccount"
export default {
    name:"formPersoClient",
    props:{
        nextForm:Function,
    },
    data(){
        return{
            schema:Schema,
            values:{
                isValid:false,
            },
        }
    },
    methods:{
        registered(){
            this.values.isValid = true;
            this.$store.commit('registered',this.values);
            this.$emit("nextForm",1);
        }
    }
}
</script>

<style>

</style>