<template>
      <v-card>
        <v-container
          fluid
          grid-list-md
        >
          <v-layout row wrap>
            <v-flex
              v-for="card in cards"
              v-bind="{ [`sm${card.flex}`]: true }"
              :key="card.title"
              >
              <v-card color="brown darken-1">
                <v-img
                  :src="card.src"
                  height="200px"
                >
                  <v-container
                    fill-height
                    fluid
                    pa-2
                  >
                    <v-layout fill-height>
                      <v-flex xs12 align-end flexbox>
                        <span class="headline white--text" v-text="card.title"></span>
                      </v-flex>
                    </v-layout>
                  </v-container>
                </v-img>

                <v-card-actions>
                  <v-text>{{card.price}}</v-text>
                  <v-spacer></v-spacer>
                  <v-btn icon>
                    <v-icon>favorite</v-icon>
                  </v-btn>
                </v-card-actions>
              </v-card>
            </v-flex>
          </v-layout>
        </v-container>
      </v-card>
</template>

<script>
  export default {
    data: () => ({
      cards: [
        {price:"$ 3", title: 'Espresso  ', src: 'https://images.unsplash.com/photo-1517397190336-8c2241e717ff?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=5e9bccfd33faf6dd5badcea1ce4db352&auto=format&fit=crop&w=634&q=80', flex: 3 },
        {price:"$ 5", title: 'Latte', src: 'https://images.unsplash.com/photo-1534234757579-8ad69d218ad4?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=2a0803b76608469b1b3cbe9a61a602da&auto=format&fit=crop&w=1050&q=80', flex: 3 },
        {price:"$ 5", title: 'Macchiato', src: 'https://www.nespresso.com/ncp/res/uploads/recipes/b32e5a2d382143bfff2885b5348cbc0e52f753ef.jpg', flex: 3 },
        {price:"$ 5.5", title: 'Cappuccino', src: 'https://images.unsplash.com/photo-1532258391479-cdd295f31117?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=2729dcfc74e1ea9469271dbd8e47c867&auto=format&fit=crop&w=1050&q=80', flex: 3 },
        {price:"$ 3", title: 'Espresso  ', src: 'https://images.unsplash.com/photo-1517397190336-8c2241e717ff?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=5e9bccfd33faf6dd5badcea1ce4db352&auto=format&fit=crop&w=634&q=80', flex: 3 },
        {price:"$ 5", title: 'Latte', src: 'https://images.unsplash.com/photo-1534234757579-8ad69d218ad4?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=2a0803b76608469b1b3cbe9a61a602da&auto=format&fit=crop&w=1050&q=80', flex: 3 },
        {price:"$ 5", title: 'Macchiato', src: 'https://www.nespresso.com/ncp/res/uploads/recipes/b32e5a2d382143bfff2885b5348cbc0e52f753ef.jpg', flex: 3 },
        {price:"$ 5.5", title: 'Cappuccino', src: 'https://images.unsplash.com/photo-1532258391479-cdd295f31117?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=2729dcfc74e1ea9469271dbd8e47c867&auto=format&fit=crop&w=1050&q=80', flex: 3 },
        {price:"$ 3", title: 'Espresso  ', src: 'https://images.unsplash.com/photo-1517397190336-8c2241e717ff?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=5e9bccfd33faf6dd5badcea1ce4db352&auto=format&fit=crop&w=634&q=80', flex: 3 },
        {price:"$ 5", title: 'Latte', src: 'https://images.unsplash.com/photo-1534234757579-8ad69d218ad4?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=2a0803b76608469b1b3cbe9a61a602da&auto=format&fit=crop&w=1050&q=80', flex: 3 },
        {price:"$ 5", title: 'Macchiato', src: 'https://www.nespresso.com/ncp/res/uploads/recipes/b32e5a2d382143bfff2885b5348cbc0e52f753ef.jpg', flex: 3 },
        {price:"$ 5.5", title: 'Cappuccino', src: 'https://images.unsplash.com/photo-1532258391479-cdd295f31117?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=2729dcfc74e1ea9469271dbd8e47c867&auto=format&fit=crop&w=1050&q=80', flex: 3 },
      ]
    })
  }
</script>