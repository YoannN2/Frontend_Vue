import { fr } from "@braid/vue-formulate-i18n"


export default {
  plugins: [ fr ],
  locale: "fr",
  classes: {
    outer: [
      "field"
    ],
    label: [
      "label"
    ],
    error: [
      "help",
      "is-danger",
    ]
  },

  slotComponents: {
    label: "myLabel",
  },

  slotProps: {
    label: ["tooltip"],
  },

  library: {
    username: {
      classification: "text",
      component: "myInput",
      slotProps: {
        component: ["icon"]
      },
    },
    text: {
      classification: "text",
      component: "myInput",
      slotProps: {
        component: ["icon"]
      },
    },
    password: {
      classification: "password",
      component: "myInput",
      slotProps: {
        component: ["icon"]
      },
    },
    email: {
      classification: "email",
      component: "myInput",
      slotProps: {
        component: ["icon"]
      },
    },
    tel:{
      classification:"tel",
      component:"myTel"
    },
    number: {
      classification: "number",
      component: "myInput",
      slotProps: {
        component: ["icon"]
      },
    },
    textarea: {
      classification: "text",
      component: "myTextarea",
    },
    select: {
      classification: "select",
      component: "mySelect",
    },
    radio: {
      classification: "radio",
      component: "myRadio",
    },
    checkbox: {
      classification: "checkbox",
      component: "myCKB",
    },
    file: {
      classification: "file",
      component: "myFile",
    },
    tag: {
      classification: "tag",
      component: "myTag",
    },
  }
}
