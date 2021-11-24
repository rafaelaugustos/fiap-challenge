<template>
  <div class="bg-brand-secondary h-screen w-screen">
    <header>
      <Container>
        <img src="/images/logo.svg" alt="Caio seu amigo autista">
      </Container>
    </header>

    <transition name="slide" mode="out-in">
      <nuxt />
    </transition>
  </div>
</template>

<script>
  export default {
    
  }
</script>