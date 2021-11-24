<template>
  <div>
    <button
      class="button w-full h-16 border-none rounded-lg text-brand-white text-base"
      v-bind="$attrs"
      v-on="$listeners"
    >
      <slot />
    </button>
  </div>
</template>

<script>
export default {
  name: 'Button',
  inheritAttrs: false,
}
</script>

<style lang="css" scoped>
.button {
    background: linear-gradient(92.16deg, #ff9900 -6.52%, #e02727 106.12%);
    box-sizing: border-box;
}
</style>
