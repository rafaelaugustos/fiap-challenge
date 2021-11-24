<template>
  <div class="flex flex-col space-y-2">
    <label
      v-if="label"
      for="input"
      class="text-brand-primary select-none font-medium"
      >{{ label }}</label
    >
    <input
      id="input"
      :type="type"
      name="default"
      :placeholder="placeholder"
      class="
        h-16
        px-4
        py-2
        rounded-lg
        border border-gray-300
        focus:outline-none focus:ring-2 focus:ring-gray-200
      "
      :value="value"
      v-bind="$attrs"
      @input="updateValue"
    />
  </div>
</template>

<script>
export default {
  inheritAttrs: false,
  props: {
    label: {
      type: String,
      default: null,
    },
    type: {
      type: String,
      default: null,
    },
    placeholder: {
      type: String,
      default: null,
    },
    value: {
      type: [String, Number],
      default: null,
    },
  },
  methods: {
    updateValue(event) {
      this.$emit('input', event.target.value)
    },
  },
}
</script>
