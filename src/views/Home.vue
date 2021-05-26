<template>
  <div class="home">
    <ModalLogin/>

    <div class="columns">
      <div class="background column is-6 is-offset-1">
        <h2 class="interim_title">Intérimaire</h2>
        <p class="interim_subtitle">Votre espace pour</p>
        <p>
          <i class="icon-presentation fas fa-user-edit"><span class="txt-presentation"> Gérer votre profil de chercheur d'emploi.</span></i>
          <i class="icon-presentation fas fa-clipboard-list"><span class="txt-presentation"> Accéder à vos contrats de travail et bulletin de paie.</span></i>
          <i class="icon-presentation far fa-question-circle"><span class="txt-presentation"> Accéder à vos informations de missions.</span></i>
        </p>
      </div>


      <!-- <background/> -->
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
import Account from '@/components/account'

import ModalLogin from '@/views/modal-login.vue'
export default {
  name: 'Home',
  components: {
    Account, ModalLogin,
  }
}
</script>

<style lang="css" scoped>
.background{
  background-color: #F26522;
  color: #f1f2f2;
}
.txt-presentation{
  font-size: 20px;
  font-family: Arial, Helvetica, sans-serif;
  font-weight: bold;
}
.icon-presentation{
  font-size: 2rem;
  margin: 10px;
}
.interim_title{
  font-size:4rem;
  margin:10px;
}
.interim_subtitle{
  margin:10px;
}
</style>
