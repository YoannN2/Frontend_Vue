<template>
  <div class="columns">
    <!-- CARD FORM -->
    <div class="card column is-6 is-offset-1">

      <!-- HEADER -->
      <div class="card-header">
        <div class="title is-3"> <!-- TITLE CLASS-->
          Tous les Inputs
        </div>
      </div>

      <!-- CONTENT -->
      <div class="card-content">
        <FormulateForm v-model="values" :schema="schema"/>
      </div>
    </div>

      <!-- CARD DEBUG -->
      <div class="card column is-3 is-offset-1">

        <!-- HEADER -->
        <div class="card-header ">
          <div class="title is-3"> <!-- TITLE CLASS-->
            Debug
          </div>
        </div>

        <!-- CONTENT -->
        <div class="card-content">
          <pre v-text="values" class="md-elevation-3"></pre>
          <pre v-text="schema" class="md-elevation-3"></pre>
        </div>
      </div>
  </div>



</template>

<script>
import testFormSchema from "@/schemas/test_form"
export default {
  name: 'Test',
  components: {

  },
  data: () => {
    return {
      value: "",
      values: {},
      schema: testFormSchema,

    }
  },
  methods: {
    saveValue (value) {
      this.value = value
    }
  }
}
</script>

<style>
  .schema {
    max-height: 500px;
  }
</style>
