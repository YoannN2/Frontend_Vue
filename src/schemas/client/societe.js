export default [
    {
        type: "text",
        name: "nom",
        label: "Nom de société",
        validation: "max:25,length|required",
        validationName: "Le nom de société"
    },
    {
        type: "text",
        name: "statutJuridique",
        label: "Statut juridique",
        validation: "max:4,length|required",
        validationName: "Le statut juridique"
    },
    {
        type: "text",
        name: "numRidet",
        label: "Ridet",
        validation: "max:9,length|required",
        validationName: "Le numéro RIDET"
    },
    {
        type: "text",
        name: "naf",
        label: "Code NAF (APE)",
        validation: "max:5,length|required",
        validationName: "Le code NAF (APE)"
    },
    {
        type: "number",
        name: "CAFAT",
        label: "Numéro Cafat",
        validation: "max:7,length|required",
        validationName: "Le numéro CAFAT"
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
                validation: "max:45,length|required",
                validationName: "La rue"
            },
            {
                type: "text",
                name: "Quartier",
                label: "quartier",
                validation: "max:30,length|optional",
                validationName: "Le quartier"
            },
            {
                type: "text",
                name: "ville",
                label: "Ville",
                validation: "max:30,length|required",
                validationName: "La ville"
            },
            {
                type: "number",
                name: "codePostal",
                label: "Code Postal",
                validation: "max:5,length|required",
                validationName: "Le code Postal"
            }
        ]
    },
    {
        type: "submit",
        name: "submit",
        label: "Envoyez"
    }
]