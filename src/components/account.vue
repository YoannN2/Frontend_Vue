<template>
    <div>
      <h2 class="subscribe_title">S'inscrire</h2>
      <FormAccount />
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
    FormAccount, //La logique est écrite dans le composant lui même
    ModalLogin
  },
  data () {
    return {
      values: {},
      isActive:false,
    }
  },
  methods:{
    showLogin () {
      return this.isActive = true;  //Permet d'ouvrir la modal
    },
    updateActive (value) {
      this.isActive = value;  //Permet de mettre a jour la valeur isActive passer en props a la modalLogin
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
