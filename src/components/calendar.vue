<template>
    <div>
        <FormulateForm v-model="values" :schema="schema" ></FormulateForm>
        <md-content >
            <md-tab>
                <h3>Previsualisation des valeurs aux submits</h3>
                <pre v-text="values" > </pre>
            </md-tab>
        </md-content>
    </div>
</template>

<script>
import Schema from "../schemas/calendrier/calendar_form"
export default {
    name: "calendar",
    data () {
        return {
            values: {},
            schema: Schema,
            userSaved: false,
        }
    },
    computed: {
        setLabel () {
            let nbJour = new Date(this.values.debut).getDate();
            let jour = new Date(this.values.debut).getDay();
            let mois = new Date(this.values.debut).getMonth();

            if(isNaN(nbJour) == false && isNaN(jour) == false && isNaN(mois) == false){
                return "horraire pour le " + this.days[jour] + " " + nbJour + " " + this.months[mois] 
            }
            return ''
        }
    }

}


</script>

<style scoped>

.formulate-input-group-repeatable{
    display: flex !important;
}

</style>