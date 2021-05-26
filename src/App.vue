<template>
  <div id="app">

    <!-- NAVBAR -->
    <navbar/>

    <div class="section">
      <div class="container">
          <router-view/>
      </div>

    </div>


    <footer class="footer">
      <div class="content has-text-centered">
        <p>
          <strong>Interim+</strong>
        </p>
      </div>
    </footer>
  </div>
</template>

<script type="text/javascript">
import ModalLogin from './views/modal-login.vue'
import navbar from "@/views/navbar"
  export default {
    components : {
      navbar,
      ModalLogin
    }
  }
</script>

<style>
@import './assets/Formulate_theme.min.css';
.logo {
  scale: 2;
}

.navbar {
  height: 100px
}

/* Chrome, Safari, Edge, Opera */
input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
  -webkit-appearance: none;
  margin: 0;
}

/* Firefox */
input[type=number] {
  -moz-appearance: textfield;
}
</style>
