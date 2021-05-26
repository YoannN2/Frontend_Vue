<template lang="html">
  <div class="">
    <label :for="context.id"  :class="[
      {
        required: context.rules.find( (rule) => rule.ruleName === 'required')
      },
      context.classes.label,
    ]">
      {{ context.label }}
      <span  class="material-icons-outlined"></span>

    </label>

  </div>
</template>

<script>

export default {
  props: {
    context: {
      type: Object,
      required: true
    },
    tooltip: {
      type: [String, Boolean],
      default: false
    }
  }
}

</script>

<style lang="css" scoped>
.label {
  margin-bottom: 10px;
  font-weight: 700;
  font-size: 1rem;
}
.required:after {
  content: " *";
  color: red;
}
</style>
