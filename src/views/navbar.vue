<template lang="html">
  <nav id="nav" class="navbar">
    <div class="navbar-brand">
      <router-link class="navbar-item" to="/" >
        <img class="logo" src="@/assets/logo-horizontal.svg" width="300">
      </router-link>
      <div class="navbar-menu">
        <div class="navbar-start">
          <router-link class="navbar-item" to="/">Accueil</router-link>
          <router-link class="navbar-item" to="/SignUp">Sign Up</router-link>
          <router-link class="navbar-item" to="/interimaire">Interimaire</router-link>

          <!-- TESTS  -->
          <div class="navbar-item has-dropdown is-hoverable">
            <a class="navbar-link">
              Tests Views
            </a>

            <div class="navbar-dropdown">
              <router-link class="navbar-item" to="/test/form">
                All Form Inputs
              </router-link>
              <router-link class="navbar-item" to="/test/tabs">
                Tabs
              </router-link>
              <router-link class="navbar-item" to="/test/skills">
                Skills
              </router-link>
            </div>
          </div>

          <!-- DOCS -->
          <div class="navbar-item has-dropdown is-hoverable">
            <a class="navbar-link">
              Docs
            </a>

            <div class="navbar-dropdown">
              <a class="navbar-item" href="https://bulma.io/documentation/"  target="_blank">
                <img src="https://bulma.io/favicons/favicon.ico?v=201701041855" width="20"/> Bulma
              </a>
              <a class="navbar-item" href="https://vueformulate.com/guide/"  target="_blank">
                <img src="https://vueformulate.com/favicon.ico" width="20"/> VueFormulate
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="navbar-end">
      <div class="navbar-item">
        <div class="buttons">
          <a class="button is-primary">
            <strong>Sign up</strong>
          </a>
          <button @click="showLogin" class="button is-light">
            Log in
          </button>
        </div>
      </div>
    </div>
    <div v-if="isActive">
      <ModalLogin :isActive="isActive" @updateActive="updateActive" />
    </div>
  </nav>
</template>

<script>
import ModalLogin from "@/views/modal-login"
export default {
  name:"navbar",
  components: {
    ModalLogin
  },
  data () {
    return {
      isActive:false,
    }
  },
  methods: {
    showLogin () {
      return this.isActive = true;
    },
    updateActive (value) {
      this.isActive = value;
    },
  }
}
</script>

<style lang="css" scoped>
</style>
