<template>
  <div class="home">
    <div class="box">
            <h3>Je suis</h3>
            <router-link to="/SignUp"><button @click="typeInscription('cli')" class="button is-success">Client</button></router-link>
            <router-link to="/SignUp"><button @click="typeInscription('int')" class="button is-success">Intérimaire</button></router-link>
      </div>
  </div>
</template>
<script>
export default {
  name: 'Home',
  data: () => {
    return {
    }
  },
  methods:{
    typeInscription (value) {
      this.$store.commit('type_inscription',value)
    }
  }
}
</script>

<style lang="css" scoped>
</style>
