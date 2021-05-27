<template>

  <div class="">
    <div class="container">
      <div>
        <Tabs :activeTab="activeTab">
          <a slot="title1">Informations générales</a>
          <a slot="title2">Informations Professionnelles</a>
          <template slot="content1">
            <FormPerso @nextForm="nextForm($event)"/>
          </template>
          <template slot="content2">
            <FormPro  @previousForm="previousForm($event)"/>
          </template>
        </Tabs>
      </div>

      
    </div>
  </div>

</template>
<script>
//STEPPERS
import Tabs from "@/components/custom/steppers"

//INTERIMAIRE
import FormPerso from "@/components/formStep/interimaire/formPersonnelle"
import FormPro from "@/components/formStep/interimaire/formProfessionnelle"


export default {
  name: 'TabsCli',
  components: {
    Tabs,
    FormPerso,
    FormPro,
  },
  data: () => {
    return {
      activeTab: 0,
    }
  },
  methods: {
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
