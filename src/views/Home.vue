<template>
  <div class="home">
    <div class="columns">
      <!-- le v-if ne marche pas -->
      <div v-if="usertype == 'int'" class="background column is-6 is-offset-1">
        <h2 class="white interim_title title">Intérimaire</h2>
        <p class="white interim_subtitle subtitle">Votre espace pour</p>
        <p>
          <i class="icon-presentation fas fa-user-edit"><span class="txt-presentation"> Gérer votre profil de chercheur d'emploi.</span></i>
          <i class="icon-presentation fas fa-clipboard-list"><span class="txt-presentation"> Accéder à vos contrats de travail et bulletin de paie.</span></i>
          <i class="icon-presentation far fa-question-circle"><span class="txt-presentation"> Accéder à vos informations de missions.</span></i>
        </p>
      </div>
      <!-- le v-if ne marche pas -->
      <div v-if="usertype == 'cli'" class="background column is-6 is-offset-1">
        <h2 class="white interim_title title">Client</h2>
        <p class="white interim_subtitle subtitle">Votre espace pour</p>
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
export default {
  name: 'Home',
  components: {
    Account
  },
  data: () => {
    return {
      usertype: "int",
    }
  }
}
</script>

<style lang="css" scoped>
.white {
  color: white;
}
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
