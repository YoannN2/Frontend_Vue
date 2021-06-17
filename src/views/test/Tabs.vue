<template>
  <div>
      <div >
        <TabsCli v-if="userType == 'cli'" />

      </div>
      <div>
        <TabsInt  v-if="userType == 'int'" />

      </div>
  </div>
</template>

<script>
import TabsCli from '@/components/custom/tabsCli'
import TabsInt from "@/components/custom/tabsInt"
export default {
    name:"Tabs",
    components: {
        TabsCli,
        TabsInt
    },
    data () {
        return {
            userType: this.$store.state.userType,
        }
    },

}
</script>

<style>

</style>