<template>
  <div class="home">
    <div class="columns">
      <div class="column is-4">
        <div class="card">
          <div class="card-content">
            <div class="content">
                <Login />    
            </div>
          </div>
        </div>
      </div>
      <!-- <login/> -->
      <div class="column is-4">
        <div class="card">
          <div class="card-content">
            <div class="content">
                <Account />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

import Login from '@/components/login.vue'
import Account from '../components/account.vue'

export default {
  name: 'Home',
  components: {
    Login,
    Account
  }
}
</script>

<style lang="css" scoped>

</style>
