<template>
    <div :data-type="context.type">
        <input class="input" type="text" v-model="input_value" @keyup.enter="addTag" @blur="context.blurHandler">
        <span class="tag is-medium" :key="index" v-for="(comp,index) in value">
            {{ comp }}
            <button class="delete" @keyup.delete="removeTag(index)"></button>
        </span>

    </div>
</template>

<script>
export default {
    name:"tag",
    props: {
        context: {
        type: Object,
        required: true,
        },
    },
    data(){
        return{
            value:[],
            input_value:""
        }
    },
    methods:{
        addTag(){
            if (this.input_value != "" ) {
                this.value.push(this.input_value.trim());
                this.context.model = this.value;
                this.input_value = "";
            }
        },
        removeTag(index){
            this.value.splice(index,1);
        }

    }
}
</script>

<style>

</style>