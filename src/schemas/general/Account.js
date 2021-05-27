export default [
  {
    type: "radio",
    name: "usertype",
    label: "Je suis :",
    value: "int",
    options: {
      int: "intérimaire",
      cli: "client",
    },
    validation: "required",
    validationName: "Le type d'utilisateur"

  },
    {
        type: "username",
        name: "username",
        label: "Nom de compte",
        validation: "required",
        validationName: "L'identifiant"
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
        type: "submit",
        name: "Envoyer"
    }
]
