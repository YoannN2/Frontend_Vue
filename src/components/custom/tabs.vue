<template lang="html">
  <div class="">
    <div class="tabs column is-two-thirds">
      <ul>
        <li @click="activeTab = 0" :class="activeTab == 0 ? 'is-active' : ''">
          <slot name="title1"></slot>
        </li>
        <li @click="reloadValues <= 1 ? activeTab = 0 : activeTab = 1 " :class="activeTab == 1 ? 'is-active' : '' || setDisabled ? 'disabled' :''">
          <slot name="title2" ></slot>
        </li>
      </ul>
    </div>
    <div class="content">
      <div>
        <div v-if="activeTab === 0" >
          <slot name="content1"  ></slot>
        </div>
        <div v-if="activeTab === 1">
          <slot name="content2" ></slot>
        </div>
      </div>
    </div>
  </div>

</template>

<script>
export default {
  name: "tabs",
  props:{
   activeTab: {
    type:Number
   },
  },
  data () {
    return {
      tabActive:this.activeTab,
      valuesLength:this.$store.state.values.length,
    }
  },
  methods:{
      
  },
  computed:{
    setDisabled () {
      
      if(this.valuesLength <=1){
        return true;
      }
      return false
    },
    reloadValues () {
      return this.$store.state.values.length
    }
  }
}
</script>

<style lang="css" scoped>
.disabled{
  opacity: 0.5;
}
.disabled a {
  text-decoration: none;
  pointer-events: none;
  cursor:not-allowed;
}
.disabled a:hover{
  border: none;
}
</style>
