<template lang="html">
  <div class="">
    <div class="tabs column is-two-thirds">
      <ul>
        <li v-for="tab in pages" :key="tab.index" @click="activeTab = tab.index" :class="activeTab == tab.index ? 'is-active' : ''" >
          <a @click="test(tab.content)">{{tab.title}}</a>
        </li>
      </ul>
    </div>
    <div class="content">
      <div v-for="tab in pages" :key="tab.index">
        <div v-if="activeTab === tab.index">
          <component :is="tab.content"></component>
        </div>
      </div>
    </div>
  </div>

</template>

<script>
export default {
  name: "tabs",
  props: {
    pages: {
      type: Array,
      required: true,
    },
    defaultTab: {
      type: Number,
      default: 0,
    },
  },
  data: () => {
    return {
      activeTab: 0,
    }
  },
  methods: {
    test(val){
      console.log(val)
    }
  }
}
</script>

<style lang="css" scoped>
</style>
