<template>
  <v-app dark centered>
    <div id="main">
      <Navigaiton />
      <nuxt />
      <Footer />
    </div>
  </v-app>
</template>
<script>
  import Navigaiton from "~/components/Navigaiton/Navigaiton"
  import Footer from "~/components/Footer/Footer"

  export default {
    components: {
      Navigaiton,
      Footer
    }
  }

</script>
<style lang="scss">
  @import url('https://fonts.googleapis.com/css?family=Montserrat');

  html,
  body {
    height: 100vh;
    width: 100%;
    font-family: 'Montserrat', sans-serif !important;
  }

  @media only screen and (max-width: 600px)  {
    a {
      font-size: 1.2em !important;
    }
    .v-icon {
      font-size: 1.2em !important;
    }
  }
</style>
