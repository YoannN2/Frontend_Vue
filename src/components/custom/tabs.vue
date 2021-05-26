<template lang="html">
  <div class="">
    <div class="tabs column is-two-thirds">
      <ul>
        <li @click="activeTab = 0" :class="{'is-active' :activeTab == 0}">
          <slot name="title1"></slot>
        </li>
        <li @click="activeTab = reloadValues <= 1 ? 0 : 1" :class="{'is-active' :activeTab == 1,'disabled' :setDisabled}">
          <slot name="title2" ></slot>
        </li>
      </ul>
    </div>
    <div class="content">
      <div>
        <div v-if="activeTab === 0" >
          <keep-alive>
            <slot name="content1" ></slot>
          </keep-alive>
        </div>
        <div v-if="activeTab === 1">
          <keep-alive>
            <slot name="content2" ></slot>
          </keep-alive>
        </div>
      </div>
    </div>
  </div>

</template>

<script>
export default {
  name: "tabs",
  props: {
   activeTab: {
    type:Number
   },
  },
  data () {
    return {
      tabActive: this.activeTab,
    }
  },
  methods:{
      
  },
  computed:{
    setDisabled () {
      
      if (this.$store.state.values.length <=1) {
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
