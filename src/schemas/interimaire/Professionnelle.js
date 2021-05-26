export default[
    {
        type: "checkbox",
        name: "mobilite",
        label: "Mobilite",
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
        validation: "max: 4,length",
        children: [
            {
                type: "text",
                name: "poste",
                label: "Poste",
                validation: "max: 50,length"
            }
        ]
    },
    {
        type: "radio",
        name: "contrat_rechercher",
        label: "Contrat recherché",
        value: [],
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
    },
    {
        type: "tag",
        name: "skills",
        label: "skills",
    },
    {
        type: "group",
        name: "Fichiers",
        label: "Vos documents",
        help: "Accepte les formats png,jpeg et pdf only",
        validation: "max:3,length|mime:application/pdf|required",
        repeatable: true,
        "add-label": "Ajouter fichier",
        "add-label-class": "button",
        value: [{}],
        children: [{
            type: "file",
            name: "fichier",
            label: "Upload",
            validation: ""
        }]
    },
    {
        type: "submit",
        name: "Envoyez"
    }
]
