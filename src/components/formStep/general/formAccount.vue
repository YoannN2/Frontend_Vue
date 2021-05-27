<template>
    <div>
        <div class=" column is-half">
            <FormulateForm @submit="register" v-model="values" :schema="schema" />
        </div>
        
        <div class="card-content">
            <pre v-text="this.$store.state.values" class="md-elevation-3"></pre>
        </div>
    </div>
</template>
<script>
import Schema from "@/schemas/general/Account"
export default {
    name: "FormAccount",
    props: {
        inscription: Function,
    },
    data: () => {
        return {
            values: {},
            schema: Schema,
        }
    },
    methods: {
        register () {
            this.$store.commit('registered', this.values);
            console.log(this.$router.push('/test/Tabs'))
        }
    }
}
</script>

<style>

</style>
