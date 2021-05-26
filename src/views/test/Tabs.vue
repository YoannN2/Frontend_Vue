<template>
  <div class="">
    <div class="container">
      <FormAccount v-if="type_inscription == '' " @inscription="updateInscription($event)"/>
      <div v-if="type_inscription == 'interimaire'">
        <div class="">
          <div class="tabs column is-two-thirds">
            <ul>
              <li @click="activeTab = 0" :class="activeTab == 0 ? 'is-active' : ''">
                <a>Personnelle</a>
              </li>
              <li @click="activeTab = 1" :class="activeTab == 1 ? 'is-active' : ''">
                <a >Professionnelle</a>
              </li>
            </ul>
          </div>
          <div class="content">
            <div>
              <div v-if="activeTab === 0" >
                <FormPerso @nextForm="nextForm($event)" />
              </div>
              <div v-if="activeTab === 1">
                <FormPro @previousForm="previousForm($event)" />
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <div v-else-if="type_inscription == 'client'">
        <div class="">
          <div class="tabs column is-two-thirds">
            <ul>
              <li @click="activeTab = 0" :class="activeTab == 0 ? 'is-active' : ''">
                <a>Personnelle</a>
              </li>
              <li @click="activeTab = 1" :class="activeTab == 1 ? 'is-active' : ''">
                <a >Professionnelle</a>
              </li>
            </ul>
          </div>
          <div class="content">
            <div>
              <div v-if="activeTab === 0">
                <FormClient @nextForm="nextForm($event)"/>
              </div>
              <div v-if="activeTab === 1">
                <FormSociete @previousForm="previousForm($event)" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
//STEPPERS
//import tabs from "@/components/custom/tabs"

//ACCOUNT
import FormAccount from '@/components/formStep/general/formAccount'

//INTERIMAIRE
import FormPerso from "@/components/formStep/interimaire/formPersonnelle"
import FormPro from "@/components/formStep/interimaire/formProfessionnelle"

//CLIENT
import FormClient from '@/components/formStep/client/formPersoClient'
import FormSociete from "@/components/formStep/client/formSociete"
export default {
  name: 'Test',
  components: {
    FormAccount,
    FormPerso,
    FormPro,
    FormClient,
    FormSociete

  },
  data: () => {
    return {
      type_inscription:"",
      activeTab:0,
    }
  },
  methods: {
    updateInscription(value){
      this.type_inscription = value;
    },
    nextForm(value){
      this.activeTab = value;
    },
    previousForm(value){
      this.activeTab = value;
    }
  }
}
</script>

<style>

</style>
