<template lang="html">
  <div :data-type="context.type" class="control" :data-multiple="context.attributes && context.attributes.multiple !== undefined" :class="context.classes.element">
    <div class="select">
      <select
      :type="context.type"
      v-model="context.model"
      @blur="context.blurHandler"
      :data-placeholder-selected="placeholderSelected"
      >
        <option v-for="option in options" :key="option.id" :value="option.value" :selected="option.selected" :disabled="option.disabled">
          {{ option.label }}
        </option>
      </select>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    context: {
      type: Object,
      required: true,
    },

  },
  computed: {
    options () {
      return this.context.options || {}
    },
    optionGroups () {
      return this.context.optionGroups || false
    },
    placeholderSelected () {
      return !!(!this.hasValue && this.context.attributes && this.context.attributes.placeholder)
    }
  }

}
</script>

<style lang="css" scoped>
</style>
