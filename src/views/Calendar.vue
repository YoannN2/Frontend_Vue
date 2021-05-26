<template>
    <div>
        <Calendrier />
    </div>
</template>

<script>
import Calendrier from "../components/calendar"
export default {
    name: "showCalendar",
    components: {
        Calendrier
    },
    data(){
        return{
            values: {},
        }
    },
}
</script>

<style>

</style>