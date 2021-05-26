export default [
    {
        type: "text",
        name: "nom",
        label: "Nom",
        validation: "max:25,length|required"
    },
    {
        type: "text",
        name: "prenom",
        label: "Prénom",
        validation: "required|max:25,length"
    },
    {
        type: "group",
        name: "Tels",
        label: "Téléphones",
        repeatable: true,
        "add-label": "Ajouter téléphone",
        "remove-label": "Enlever téléphone",
        "add-label-class": "button",
        validation: "max:3,length",
        value: [{}],
        children: [
            {
                type: "tel",
                name: "numTel",
                validation: "max:6,length|min:6,length"
            }
        ]
    },
    {
        type: "submit",
        name: "submit",
        label: "envoyez"
    }
]