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
            border-t border-b border-l
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
    <ul>
      <li v-for="item in items" :key="item.place_id">
        {{ item.formatted_address }}
      </li>
    </ul>
  </div>
</template>

<script>
import { Places } from '@/services/api'

export default {
  data() {
    return {
      value: null,
      items: [],
    }
  },

  methods: {
    async search() {
      const { data } = await Places(this.value)
      this.items = data.results
      console.log(data)
    },
  },
}
</script>

<style>
ul {
  width: 70%;
  margin: 0 auto;
}
li {
  background: #fff;
  margin-top: 10px;
  border-radius: 5px;
  padding: 10px;
}
</style>
