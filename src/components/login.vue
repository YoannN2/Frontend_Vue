<template>
  <div>
      <FormulateForm v-model="values" :schema="schema" />
  </div>
</template>

<script>
import Schema from "../schemas/general/login"
export default {
  name: 'Login',
  data: () => ({
    schema: Schema,
    values: {},
  }),
}
</script>

<style lang="css" scoped>
  .login{
    margin: 0 auto;
    display: flex;
    flex-direction: column;
  }
</style>
