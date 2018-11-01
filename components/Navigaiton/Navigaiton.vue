<template>
<div id="navigation">
  
  <!--Navigation Toolbar-->
  <v-toolbar>
    <v-toolbar-side-icon class="hidden-md-and-up" @click="drawer = !drawer" />
    <v-toolbar-title>Coffee Shop</v-toolbar-title>
    <v-spacer></v-spacer>
    <v-toolbar-items class="hidden-sm-and-down">
      <v-btn flat href="/">Home</v-btn>
      <v-btn flat href="/ourbrews">Our Brews</v-btn>
      <v-btn flat href="/gallery">Gallery</v-btn>
      <v-btn flat href="/contact">Contact</v-btn>
    </v-toolbar-items>
  </v-toolbar>  
  <!-- Navigation Drawer -->
    <v-navigation-drawer
    class="brown darken-1"
    dark
    temporary
     v-model="drawer"
    absolute
  >
    <v-list>
       <v-list-tile
          v-for="(item, i) in items"
          :to="item.to"
          :key="i"
          router
          exact
        >
        <v-list-tile-action>
          <v-icon>{{ item.icon }}</v-icon>
        </v-list-tile-action>

        <v-list-tile-content>
          <v-list-tile-title>{{ item.title }}</v-list-tile-title>
        </v-list-tile-content>
      </v-list-tile>
    </v-list>
  </v-navigation-drawer>
</div>  
</template>

<script>
  export default {
    data () {
      return {
        // use this value to connect drawer icon to toggler
        drawer: false,
        scrolled:false,
        items: [
          { title: 'Home', icon: 'home',  to:"/" },
          { title: 'Our Brews', icon: 'free_breakfast', to:"/ourbrews" },
          { title: 'Gallery', icon: 'insert_photo', to:"/gallery" },
          { title: 'Contact', icon: 'perm_contact_calendar', to:"/contact" }
        ]
      }
    }   
  }
</script>