export default [
    {
        type:"date",
        label:"Periode du",
        name:"debut"
    },
    {
        type:"date",
        label:"Au",
        name:"fin"
    },
    {
        type:"group",
        name:"horraires",
        repeatable:true,
        "add-label":"Ajouter une horraire",
        "groupRepeatable-class":"formulate-input-group-repeatable columns",
        values:[],
        children:[
            {
                type:"time",
                name:"de",
                label:"De",
            },
            {
                type:"time",
                name:"A",
                label:"A"
            }
        ]
    },
    {
        type:"submit",
        name:"Envoyez"
    }


]