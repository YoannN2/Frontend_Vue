export default[

    {
        type: "text",
        label: "Nom d'usage Nom marital",
        name: "Nom",
        validation: "required|max:30,length",
    },
    {
        type: "text",
        label: "Nom de jeune fille",
        name: "Nom_jeune_fille",
        validation: "max:30,length",
    },
    {
        type: "text",
        name: "prenom",
        label: "Prénom",
        validation: "required|max:30,length",
    },
    {
        type: "group",
        name: "Autre_prenoms",
        label: "Autre prenom",
        repeatable: true,
        "add-label": "Ajouter un prenom",
        "remove-label": "enlever le prenom",
        "add-label-class": "button",
        validation: "optional|max:4,length",
        value:[{}],
        children:[{
            type: "text",
            name: "autre prenom",
            placeholder: "Autre prenom",
            validation: "optional|max:30"
        }]
    },
    {
        type: "radio",
        name: "sexe",
        label: "Genre",
        options:{
            homme: "Homme",
            femme: "Femme",
            nonBinaire: "Non-binaire"
        },
        validation: "required|"
    },
    {
        type: "date",
        name: "date_Naissance",
        label: "Date de Naissance",
        validation: "before|required"
    },
    {
        type: "text",
        name: "Lieu_Naissance",
        label: "Lieu de naissance",
        validation: "required|max:30,length",
    },
    {
        type: "number",
        name: "cafat",
        label: "Numéro Cafat",
        validation: "required|max:7,length",
    },
    {
        type: "checkbox",
        name: "Allocation_familliale",
        label: "Allocation familliale",
        options:{
            oui: "oui"
        }
    },
    {
        type: "group",
        name: "Téléphone",
        label: "Votre téléphone",
        repeatable: true,
        validation: "min:1,length",
        "add-label": "Ajouter téléphone",
        "remove-label": "Supprimer téléphone",
        "add-label-class": "button",
        value: [{}],
        children: [
            {
            type: "tel",
            name: "Telephone",
            placeholder: "(+687)",
            validation: "number|max:6,length"
            }
        ]
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
                validation: "required|max:200,length"
            },
            {
                type: "text",
                name: "quartier",
                label: "Quartier",
                validation: "optional|max:200,length"
            },
            {
                type: "text",
                name: "ville",
                label: "Ville",
                validation: "required|max:200,length"
            },
            {
                type: "number",
                name: "code_postal",
                label: "Code Postal",
                validation: "number|max:5,length|min:1000,value|max:99000,value",
            }
        ]
    },
    {
        type: "submit",
        name: "Envoyez",
        label:"Envoyez"
    }

]
