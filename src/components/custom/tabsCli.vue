<template>
    <div class="container">
        <div>
            <Tabs :activeTab="activeTab">
                <a slot="title1">Informations client</a>
                <a slot="title2">Informations société</a>
                <template slot="content1">
                    <FormClient @nextForm="nextForm($event)"/>
                </template>
                <template slot="content2" >
                    <FormSociete @previousForm="previousForm($event)" />
                </template>
            </Tabs>
        </div>
    </div>
</template>

<script>
//STEPPERS
import Tabs from "@/components/custom/steppers"

//CLIENT
import FormClient from '@/components/formStep/client/formPersoClient'
import FormSociete from "@/components/formStep/client/formSociete"
export default {
    name:"TabsInt",
    components: {
        Tabs,
        FormClient,
        FormSociete
    },
    data () {
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