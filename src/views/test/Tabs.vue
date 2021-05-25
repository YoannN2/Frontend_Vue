<template>
  <div class="">
    <div class="container">
      <FormAccount v-if="type_inscription == '' " @inscription="updateInscription($event)"/>
      <div v-if="type_inscription == 'interimaire'">
        <tabs :pages="TabsInterim" :defaultTab="0"/>
      </div>
      <div v-else-if="type_inscription == 'client'">
        <tabs :pages="TabsClient" :defaultTab="0"/>
      </div>
    </div>
  </div>
</template>
<script>
//STEPPERS
import tabs from "@/components/custom/tabs"

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
    tabs,
    FormAccount
  },
  data: () => {
    return {
      TabsInterim: [
        {
          index: 0,
          title: "Personnelle",
          content: FormPerso,
        },
        {
          index: 1,
          title: "Professionnelle",
          content: FormPro,
        },
      ],
      TabsClient:[
        {
          index:0,
          title:"Personnelle",
          content:FormClient
        },
        {
          index:1,
          title:"Societe",
          content:FormSociete
        }
      ],
      type_inscription:"",
    }
  },
  methods: {
    updateInscription(value){
      this.type_inscription = value;
    }
  }
}
</script>

<style>

</style>
