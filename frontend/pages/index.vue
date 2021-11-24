<template>
  <div>
    <Container>
      <form class="flex w-full" @submit.prevent="search">
        <input
          v-model="value"
          class="
            rounded-l-lg
            w-full
            p-4
            border-t
            border-b border-l
            text-gray-800
            border-gray-200
            bg-white
          "
          placeholder="Pesquisar"
        />
        <button
          class="
            px-4
            rounded-r-lg
            bg-brand-primary
            text-brand-white
            font-bold
            p-4
            uppercase
          "
        >
          Procurar
        </button>
      </form>
    </Container>
  </div>
</template>

<script>
export default {
  data() {
    return {
      value: null,
    }
  },

  methods: {
    search() {
      console.log(this.value)
    }
  },
}
</script>
