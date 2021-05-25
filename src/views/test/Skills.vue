<template lang="html">
  <div class="">
    <FormulateForm v-model="values" :schema="schema"/>

    <pre>{{values}}</pre>
  </div>
</template>

<script>
export default {
  data: () => {
    return {
      values: {},
      schema: [
        {
          type: "skills",
          name: "skills"
        }
      ]
    }
  }
}
</script>

<style lang="css" scoped>
</style>
