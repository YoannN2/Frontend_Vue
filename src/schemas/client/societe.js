export default [
    {
        type: "text",
        name: "nom",
        label: "Nom de société",
        validation: "max:25,length"
    },
    {
        type: "text",
        name: "statutJuridique",
        label: "Statut juridique",
        validation: "max:4,length"
    },
    {
        type: "text",
        name: "numRidet",
        label: "Ridet",
        validation: "max:9,length"
    },
    {
        type: "text",
        name: "naf",
        label: "Code NAF (APE)",
        validation: "max:5,length"
    },
    {
        type: "number",
        name: "CAFAT",
        label: "Numéro Cafat",
        validation: "max:7,length"
    },
    {
        type: "group",
        name: "adresse",
        label: "Adresse",
        children: [
            {
                type: "text",
                name: "rue",
                label: "Rue",
                validation: "max:45,length"
            },
            {
                type: "text",
                name: "Quartier",
                label: "quartier",
                validation: "max:30,length"
            },
            {
                type: "text",
                name: "ville",
                label: "Ville",
                validation: "max:30,length"
            },
            {
                type: "number",
                name: "codePostal",
                label: "Code Postal",
                validation: "max:5,length"
            }
        ]
    },
    {
        type: "submit",
        name: "submit",
        label: "Envoyez"
    }
]