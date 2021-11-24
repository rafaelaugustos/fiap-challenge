<template>
  <Container class="flex flex-col items-center">
    <form class="flex flex-col gap-4 w-full" @submit.prevent="login">
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

      <Button class="mt-8 mb-4">Entrar</Button>
    </form>

    <nuxt-link class="text-brand-white mt-6 m-auto" to="/register"
      >Não tem conta cadastrada ainda?
      <span class="text-brand-primary">Cadastrar</span></nuxt-link
    >
  </Container>
</template>

<script>
export default {
  name: 'Login',

  data() {
    return {
      form: {
        email: null,
        password: null,
        
      },
    }
  },

  methods: {
    login() {
      console.log(this.form)
    },
  },
}
</script>

<style lang="scss" scoped></style>
