<template>
  <Container class="flex flex-col items-center">
    <form class="flex flex-col gap-4 w-full" @submit.prevent="register">
      <Input
        v-model="form.name"
        type="text"
        placeholder="Digite seu nome"
        label="Nome"
      />

      <Input
        v-model="form.email"
        type="email"
        placeholder="Digite seu email"
        label="Email"
      />

      <Input
        v-model="form.password"
        type="password"
        placeholder="Digite sua senha"
        label="Senha"
      />

      <Button class="mt-8 mb-4">Cadastrar</Button>
    </form>

    <nuxt-link class="text-gray-400 mt-6 m-auto" to="/login">Voltar</nuxt-link>
  </Container>
</template>

<script>
import { Register } from '@/services/api'

export default {
  name: 'Register',

  data() {
    return {
      form: {
        name: null,
        email: null,
        password: null,
      },
    }
  },

  methods: {
    async register() {
      try {
        await Register(this.form)
        this.$router.push('/')
      } catch (e) {
        console.log(e)
      }
    },
  },
}
</script>

<style lang="scss" scoped></style>
