<template>
  <Container class="flex flex-col items-center">
    <div class="message" v-show="message">{{ message }}</div>
    <form class="flex flex-col gap-4 w-full" @submit.prevent="fnLogin">
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
import { Login } from '@/services/api'

export default {
  name: 'Login',

  data() {
    return {
      message: null,
      form: {
        email: null,
        password: null,
      },
    }
  },

  methods: {
    async fnLogin() {
      try {
        await Login(this.form)

        this.$router.push('/')
      } catch (e) {
        this.message = e.response.data.message
        setTimeout(() => {
          this.message = null
        }, 5000)
      }
    },
  },
}
</script>

<style lang="css" scoped>
.message {
  width: 100%;
  height: 50px;
  background: #e74c3c;
  border-radius: 5px;
  margin-bottom: 30px;
  transition: 0.5s;
  display: flex;
  align-items: center;
  padding-left: 20px;
  color: #fff;
  font-weight: 300;
}
</style>
