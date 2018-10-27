<template>
    <div id="app">
      <Hero />
      <About />
    </div>
</template>

<script>
import Hero from "~/components/Hero/Hero"
import About from "~/components/About/About"
export default {
  components: {
    Hero,
    About
  }
}
</script>
