<template>
    <div>
        <div class="modal" :class="isActive ? 'is-active' : ''">
          <div class="modal-background" @click="closeModal">></div>
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
              <i class="modal-close is-large" aria-label="close"  @click="closeModal"></i>
        </div>
    </div>
</template>

<script>
import Login from '../components/login.vue'


export default {
  name: 'modalLogin',
    data () {
      return{
      }
    },
  components: {
    Login
  },
  props: {
    isActive: {
      required: true, //La props est passé dans la vue navbar et le composant account
      type: Boolean,
    }
  },
  methods:{
    closeModal () {
      this.isActive = false;
      this.$emit('updateActive',false); //émet au parent la valeur false pour toggle la modal
    }
  }
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