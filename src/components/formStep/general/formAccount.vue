<template>
    <div>
        <div class=" column is-half">
            <FormulateForm @submit="inscription_type" v-model="values" :schema="schema" />

        </div>

        <div class="card-content">
            <pre v-text="values" class="md-elevation-3"></pre>
        </div>

    </div>
</template>

<script>
import Schema from "../../../schemas/general/Account"
export default {
    name:"FormAccount",
    props:{
        inscription:Function,
    },
    data(){
        return{
            values:{},
            schema:Schema,
        }
    },
    methods:{

        inscription_type(){
            this.$emit('inscription',this.values.type_inscription);
        }
    }
}
</script>

<style>

</style>