<template>
  <div>
      <FormulateForm v-model="values" :schema="schema" />
  </div>
</template>

<script>
import Schema from "../schemas/FormShema/Account"
export default {
  name: 'Account',
  data: () => ({
    schema:Schema,
    values:{},
  }),
}
</script>

<style lang="css" scoped>
  /*.md-progress-bar {
    position: absolute;
    top: 0;
    right: 0;
    left: 0;
  }*/
  .account{
    margin: 0 auto;
    display: flex;
    flex-direction: column;
  }
</style>