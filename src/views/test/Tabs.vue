<template>

  <div class="">
    <div class="container">
      <FormAccount v-if="type_inscription == ''" @inscription="updateInscription" />
      <div v-if="type_inscription == 'int'">
        <Tabs :activeTab="activeTab">
          <a slot="title1">Personnelle</a>
          <a slot="title2">Professionnelle</a>
          <template slot="content1">
            <FormPerso @nextForm="nextForm($event)"/>
          </template>
          <template slot="content2">
            <FormPro  @previousForm="previousForm($event)"/>
          </template>
        </Tabs>
      </div>

      <div v-else-if="type_inscription == 'cli'">
        <Tabs :activeTab="activeTab">
          <a slot="title1">Personnelle</a>
          <a slot="title2">Professionnelle</a>
          <template slot="content1">
            <FormClient @nextForm="nextForm($event)"/>
          </template>
          <template slot="content2" >
            <FormSociete @previousForm="previousForm($event)" />
          </template>
        </Tabs>
      </div>
    </div>
  </div>

</template>
<script>
//STEPPERS
import Tabs from "@/components/custom/tabs"

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
    Tabs,
    FormAccount,
    FormPerso,
    FormPro,
    FormClient,
    FormSociete

  },
  data: () => {
    return {
      type_inscription: "",
      activeTab: 0,
    }
  },
  methods: {
    updateInscription (value) {
      this.type_inscription = value;
    },
    nextForm (value) {
      this.activeTab = 0;
      this.activeTab = value;
    },
    previousForm (value) {
      this.activeTab = value;
    }
  }
}
</script>

<style>

</style>
