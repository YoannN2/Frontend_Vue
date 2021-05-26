export default [
    {
        type: "text",
        name: "nom",
        label: "Nom",
        validation: "max:25,length|required",
        validationName: "Le nom"
    },
    {
        type: "text",
        name: "prenom",
        label: "Prénom",
        validation: "required|max:25,length",
        validationName: "Le prénom"
    },
    {
        type: "group",
        name: "Tels",
        label: "Téléphones",
        repeatable: true,
        "add-label": "Ajouter téléphone",
        "remove-label": "Enlever téléphone",
        "add-label-class": "button",
        validation: "max:3,length|min:1,length|required",
        validationName: "Les numéros de téléphones",
        value: [{}],
        children: [
            {
                type: "tel",
                name: "numTel",
                validation: "max:6,length|min:6,length",
                validationName: "Le numéro de téléphone"
            }
        ]
    },
    {
        type: "submit",
        name: "submit",
        label: "envoyez",
    }
]