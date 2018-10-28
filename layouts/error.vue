<template>
    <section id="error">
        <vue-container justify-center>
           <h1 class="display-4 font-weight-bold">lost?</h1>
           <v-btn large flat href="/"><span class="fa fa-home mr-2"></span> Head Home</v-btn>
        </vue-container>
    </section>
</template>

<style lang="scss" scoped>
#error {
    background-image: url(https://images.unsplash.com/photo-1447933601403-0c6688de566e?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=6b9a4a76f7ed6634baffd807966f0ca8&auto=format&fit=crop&w=1256&q=80);
    background-size: 100%;
    padding: 20%;
}
h1 {
    font-size: 10em;
}
.v-btn {
    font-size: 2em !important;
    font-weight: 400;
}
</style>
