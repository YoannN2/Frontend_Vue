<template>
    <div>
        <h2 class="subscribe_title">S'inscrire</h2>
        <FormulateForm v-model="values" :schema="schema" />
        <i class="modal-button" data-target="modal" aria-haspopup="true" @click="isActive = !isActive">
            Déjà inscrit ? Cliquez-ici pour vous connecter.
        </i>
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
  computed: {
  }
}
</script>

<style lang="css" scoped>

  .subscribe_title{
      text-align: center
  }

  .modal-button{
    cursor: pointer
  }

  .account {
    margin: 0 auto;
    display: flex;
    flex-direction: column;
  }
</style>
