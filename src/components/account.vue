<template>
  <div>
      <FormulateForm v-model="values" :schema="schema" />
  </div>
</template>

<script>
import Schema from "@/schemas/general/Account"
export default {
  name: 'Account',
  data: () => {
    return {
      schema: Schema,
      values: {},
    }
  },
}
</script>

<style lang="css" scoped>

  .account {
    margin: 0 auto;
    display: flex;
    flex-direction: column;
  }
</style>
