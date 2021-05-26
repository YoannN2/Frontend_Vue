export default [
    {
        type: "username",
        name: "username",
        label: "Nom de compte",
        validation: "required",
        validationName: "Identifiant"
    },
    {
        type: "email",
        name: "email",
        label: "Votre email",
        placeholder: "example@example.com",
        validation: "required|email",
        validationName: "L'email"
    },
    {
        type:"radio",
        name:"type_of_user",
        label:"Je suis :",
        options: {
          cli:"client",
          int:"intérimaire",
        }
    },
    {
        type: "password",
        name: "password",
        label: "Votre mot de passe",
        validation: "required",
        validationName: "Le mot de passe"
    },
    {
        type: "password",
        name: "password_confirm",
        label: "Confirmez votre mot de passe",
        validation: "required|confirm",
        validationName: "La confirmation du mot de passe"
    },
    {
        type: "radio",
        name: "type_inscription",
        label: "S'inscrire en tant que",
        validation: 'required',
        validationName: "Le type d'inscription",
        options: {
            client: "Client",
            interimaire: "Intérimaire",
        }
    },
    {
        type: "submit",
        name: "Envoyer"
    }
]
