<template>
  <div>
        <FormulateForm :schema="schema" v-model="values" @submit="registered" />
        <div class="card-content">
            <pre v-text="this.$store.state.values" class="md-elevation-3"></pre>
        </div>
  </div>
</template>

<script>
import Schema from "../../../schemas/client/societe"
export default {
    name: "FormSociete",
    data () {
        return {
            values: {
                isValid: false,
            },
            schema: Schema,
        }
    },
    methods: {
        registered () {
            this.isValid = true;
            this.$store.commit("registered",this.values);
        },
        changeValues () {
            return this.values = this.$store.state.values[1];
        }
    },
    computed: {
        saveValue () {
            if(this.isValid){
               this.changeValues();
            }
            return false
        },
    }
}
</script>

<style>

</style>