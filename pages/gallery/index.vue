<template>
  <div id="gallery">
    <v-container v-container grid-list-md text-xs-center>
      <v-layout row fill-height>
        <v-flex lg4 xs3>
          <no-ssr>
            <lightbox thumbnail="https://images.unsplash.com/photo-1515678916313-2263ebfad5cb?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=a9bfa500366ccc943337ce0aa8b80809&auto=format&fit=crop&w=1350&q=80"
              :images="['https://images.unsplash.com/photo-1515678916313-2263ebfad5cb?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=a9bfa500366ccc943337ce0aa8b80809&auto=format&fit=crop&w=1350&q=80']"></lightbox>
            <lightbox thumbnail="https://images.unsplash.com/5/unsplash-bonus.jpg?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=e2847ac620c2330be2e990343ec347af&auto=format&fit=crop&w=1350&q=80  "
              :images="['https://images.unsplash.com/5/unsplash-bonus.jpg?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=e2847ac620c2330be2e990343ec347af&auto=format&fit=crop&w=1350&q=80  ']"></lightbox>
            <lightbox thumbnail="https://images.unsplash.com/photo-1532618403260-5aeffed45f6e?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=a8aa283fd0f0a9496c42acd56bd42c04&auto=format&fit=crop&w=1351&q=80"
              :images="['https://images.unsplash.com/photo-1532618403260-5aeffed45f6e?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=a8aa283fd0f0a9496c42acd56bd42c04&auto=format&fit=crop&w=1351&q=80']"></lightbox>
          </no-ssr>
        </v-flex>
        <v-flex lg4 xs3>
          <no-ssr>
            <lightbox thumbnail="https://images.unsplash.com/photo-1525648199074-cee30ba79a4a?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=be7af92635ae8a25f83c7cd27f91a701&auto=format&fit=crop&w=1350&q=80"
              :images="['https://images.unsplash.com/photo-1525648199074-cee30ba79a4a?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=be7af92635ae8a25f83c7cd27f91a701&auto=format&fit=crop&w=1350&q=80']"></lightbox>
            <lightbox thumbnail="https://images.unsplash.com/photo-1521017432531-fbd92d768814?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=e813bc9e93c2b7ede92476a3eddf3606&auto=format&fit=crop&w=1350&q=80"
              :images="['https://images.unsplash.com/photo-1521017432531-fbd92d768814?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=e813bc9e93c2b7ede92476a3eddf3606&auto=format&fit=crop&w=1350&q=80']"></lightbox>
            <lightbox thumbnail="https://images.unsplash.com/photo-1525610553991-2bede1a236e2?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=f4974b0a5e849c6553f27f686df2dcfc&auto=format&fit=crop&w=1350&q=80"
              :images="['https://images.unsplash.com/photo-1525610553991-2bede1a236e2?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=f4974b0a5e849c6553f27f686df2dcfc&auto=format&fit=crop&w=1350&q=80']"></lightbox>
            <lightbox thumbnail=""
              :images="['']"></lightbox>
          </no-ssr>
        </v-flex>
        <v-flex lg4 xs3>
          <no-ssr>
            <lightbox thumbnail="https://images.unsplash.com/photo-1432860560641-49d2a6156b81?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=f1dcdc74f8137f3511ffb4ee1a6f4fe0&auto=format&fit=crop&w=1351&q=80"
              :images="['https://images.unsplash.com/photo-1432860560641-49d2a6156b81?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=f1dcdc74f8137f3511ffb4ee1a6f4fe0&auto=format&fit=crop&w=1351&q=80']"></lightbox>
            <lightbox thumbnail="https://images.unsplash.com/photo-1530169911702-b9dab3762148?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=33d96ca4e15c878b258aab6771dd13d5&auto=format&fit=crop&w=1348&q=80"
              :images="['https://images.unsplash.com/photo-1530169911702-b9dab3762148?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=33d96ca4e15c878b258aab6771dd13d5&auto=format&fit=crop&w=1348&q=80']"></lightbox>
            <lightbox thumbnail="https://images.unsplash.com/photo-1510586909270-7b3ba37fd565?ixlib=rb-0.3.5&s=8ee476c3a24cb562c58d591cd16c7d41&auto=format&fit=crop&w=1350&q=80"
              :images="['https://images.unsplash.com/photo-1510586909270-7b3ba37fd565?ixlib=rb-0.3.5&s=8ee476c3a24cb562c58d591cd16c7d41&auto=format&fit=crop&w=1350&q=80']"></lightbox>
          </no-ssr>
        </v-flex>
      </v-layout>
    </v-container>
  </div>
</template>

<style lang="scss" scoped>

</style>
