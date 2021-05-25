<template>
    <div :data-type="context.type" class="" >


        <span class="tag button is-medium" v-for="(tag,index) in context.model" :key="index" @keyup.delete="removeTag(tags.length-2)">
            {{ tag }}
            <i class="delete" @click="removeTag(index)"></i>
        </span>
        <input class="tag-input" type="text" v-model="tag" @keyup.enter="addTag" @blur="context.blurHandler"/>

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
            tags: [],
            tag: ""
        }
    },
    methods:{
        addTag(){
            let newTag = this.tag.trim();

            if (newTag != "" && !this.tags.includes(newTag)) {
                this.tags.push(newTag);
                this.context.model = this.tags;
                this.tag = "";
            }
        },
        removeTag(index){
            this.tags.splice(index,1);
            this.context.model = this.tags;
        }

    }
}
</script>

<style lang="css">
.tag-input {
  display: inline-block;
  border: none;
  border-bottom:  2px solid #f26522;
  outline: none;
  padding: 8pt 0 0 5px;
  margin-left: 5px;

}
.tag {
  margin-left: 5pt;
  margin-bottom: 5pt;
}
</style>
