<template>
    <div>
        <div class="modal" :class="isActive ? 'is-active' : ''">
          <div class="modal-background" @click="isActive = false">></div>
              <div class="modal-content">
                  <div class="column">
                    <div class="card">
                      <div class="card-content">
                        <div class="content">
                          <Login />
                        </div>
                      </div>
                    </div>
                  </div>
              </div>
              <i class="modal-close is-large" aria-label="close"  @click="isActive = false"></i>
        </div>
    </div>
</template>

<script>
import Login from '../components/login.vue'


export default {
  name: 'modallogin',
    data: () => ({
    values: {},
    isActive: false,
  }),
  components: {
    Login
  },
props: {
    isActive: {
        required: true,
        type: Boolean,
        }
    },
}
</script>

<style lang="css" scoped>

  .subscribe_title{
      text-align: center
  }
  .modal-button{
    cursor:pointer
  }

</style>