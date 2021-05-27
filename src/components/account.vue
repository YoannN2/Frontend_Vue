<template>
    <div>
      <h2 class="subscribe_title">S'inscrire</h2>
      <FormAccount @submit="registered"/>
      <i class="modal-button" data-target="modal" aria-haspopup="true" @click="showLogin">
        Déjà inscrit ? Cliquez-ici pour vous connecter.
      </i>
      <ModalLogin :isActive="isActive" @updateActive="updateActive"  />
    </div>
</template>
<script>
import FormAccount from "@/components/formStep/general/formAccount"
import ModalLogin from "@/views/modal-login"
export default {
  name: 'Account',
  components:{
    FormAccount,
    ModalLogin
  },
  data () {
    return {
      values: {},
      isActive:false,
    }
  },
  methods:{
    registered () {
      //ne marche pas FAIRE AUTREMENT ou pas
      this.$emit('registered',this.values);
      console.log(this.$route)
    },
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

  .subscribe_title {
    text-align: center;
  }

  .modal-button {
    cursor: pointer;
  }

  .account {
    margin: 0 auto;
    display: flex;
    flex-direction: column;
  }
</style>
