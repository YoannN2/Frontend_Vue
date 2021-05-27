export default[
    {
        type: "checkbox",
        name: "mobilite",
        label: "Mobilite",
        validation: "required",
        validationName: "La mobilité",
        options: {
            noumea: "Nouméa",
            "Grand Noumea": "Grand Nouméa",
            "Province Sud": "Province Sud",
            "Province Nord": "Province Nord",
            "Province des îles": "Province des îles"
        }
    },
    {
        type: "checkbox",
        name: "Transport",
        label: "Transport",
        validation: "required",
        validationName: "Le transport",
        options: {
            Vehicule: "Véhicule Personnel",
            "Famille/Ami": "Famille/Ami",
            "Transport en Commun": "Transport en commun",
            "A pied": "A pied",
        }
    },
    {
        type: "group",
        name: "poste_recherche",
        label: "Indiquez les postes recherchés",
        "add-label": "Ajouter un poste",
        "remove-label": "Supprimez un poste",
        "add-label-class": "button",
        value: [{}],
        repeatable: true,
        validation: "max:4,value|required",
        validationName: "Postes",
        children: [
            {
                type: "text",
                name: "poste",
                label: "Poste",
                validation: "max:50,length|required",
                validationName: "Le poste"
            }
        ]
    },
    {
        type: "radio",
        name: "contrat_rechercher",
        label: "Contrat recherché",
        validation: "required",
        validationName: "Le type de contrat recherché",
        options: {
            interim: "Interim",
            recrutement: "Recrutement",
            "interim recrutement": "Interim et recrutement"
        }
    },
    {
        type: "tag",
        name: "competences",
        label: "competence",
        validation: "min:1,value"
    },
    {
        type: "tag",
        name: "skills",
        label: "skills",
        validation: "min:1,value"
    },
    {
        type: "group",
        name: "Fichiers",
        label: "Vos documents",
        help: "Accepte les formats png,jpeg et pdf only",
        validation: "max:3,length|required",
        validationName: "Les fichiers",
        repeatable: true,
        "add-label": "Ajouter fichier",
        "add-label-class": "button",
        value: [{}],
        children: [{
            type: "file",
            name: "fichier",
            label: "Upload",
            validation: "mime:jpeg|mime:png|mime:pdf",
            validationName: "Le fichier"
        }]
    },
    {
        type: "submit",
        name: "Envoyez",
        label: "Envoyez"
    },
  
]
