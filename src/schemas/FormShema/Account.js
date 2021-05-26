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
        validation: "required|email"
    },
    {
        type: "password",
        name: "password",
        label: "Votre mot de passe",
        validation: "required",
        validationName:"Le mot de passe"
    },
    {
        type: "password",
        name: "password_confirm",
        label: "Confirmez votre mot de passe",
        validation: "required|confirm",
        validationName: "La confirmation du mot de passe"
    },
    {
        type: "submit",
        name: "Envoyer"
    }
]
