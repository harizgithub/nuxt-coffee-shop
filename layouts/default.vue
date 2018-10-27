<template><v-app dark centered><div id="main"><Navigaiton /><nuxt/></div></v-app></template><script>import Navigaiton from "~/components/Navigaiton/Navigaiton"

export default {
  components: {
    Navigaiton
  }
}

</script><style lang="scss">@import url('https://fonts.googleapis.com/css?family=Montserrat');

html,
body {
  height: 100vh;
  width: 100%;
  font-family: 'Montserrat', sans-serif !important;
}

</style>
