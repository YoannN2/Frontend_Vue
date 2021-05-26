<template>
  <div>
        <FormulateForm :schema="schema" v-model="values" @submit="registered" />
        <div class="card-content">
            <pre v-text="values" class="md-elevation-3"></pre>
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
        }
    }
}
</script>

<style>

</style>