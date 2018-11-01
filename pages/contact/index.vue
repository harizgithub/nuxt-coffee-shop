<template>
  <div>
    <v-layout row wrap class="text-sm-center text-md-left">
      <!-- google map -->
      <v-flex lg4>
        <gmap-map class="hidden-sm-and-down" :options="{styles:styles}" :center="center" :zoom="8" style="width: 100%; height: 840px">
        <gmap-marker :key="index" v-for="(m, index) in markers" :position="m.position" :clickable="true" :draggable="false"
          @click="center=m.position"></gmap-marker>
      </gmap-map>
      </v-flex>
      <v-flex lg4 class="col-1" xs12>
        <h1 class="display-3 text-xs-center">Contact</h1>
          <v-container class="shop-1">
            <div class="pb-5">
              <h2 class="display-1">Shop-1</h2>
            </div>
            <div>
              <v-icon class="fa fa-phone" /> <span class="pa-3"><a class="font-weight-thin" href="telno:123 456 789">123 456 789</a></span>
            </div>
            <div>
              <v-icon class="fa fa-location-arrow" /> <span class="pa-3"><a class="font-weight-thin">Lorem ipsum, dolor sit amet consectetur adipisicing.</a></span>
            </div>
          </v-container>
          <v-container lg4 class="shop-2">
            <div class="pb-5">
              <h2 class="display-1">Shop-2</h2>
            </div>
            <div>
              <v-icon class="fa fa-phone" /> <span class="pa-3"><a class="font-weight-thin" href="telno:123 456 789">123 456 789</a></span>
            </div>
            <div>
              <v-icon class="fa fa-location-arrow" /> <span class="pa-3"><a class="font-weight-thin">Lorem ipsum, dolor sit amet consectetur adipisicing.</a></span>
            </div>
          </v-container>
          <v-container class="email">
            <div class="pb-5">
              <h2 class="display-1">Mail Us @</h2>
            </div>
            <div>
              <v-icon class="fa fa-envelope" /> <span class="pa-3"><a class="font-weight-thin" href="telno:coffee@shop.com">coffee@shop.com</a></span>
            </div>
          </v-container>
             
      </v-flex>
      <v-flex xs12 lg4 class="form-cont">
        <!-- form component -->
        <Form />
      </v-flex>
    </v-layout>
  </div>
</template>

<style lang="scss" scoped>
$primary-color:rgba(00, 00, 00, 0.500);

  .col-1 {
        background-image: linear-gradient(to bottom, $primary-color, $primary-color), url("https://images.unsplash.com/photo-1529892485617-25f63cd7b1e9?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=6f3d3508fe6a3a1adb8301aa284f9381&auto=format&fit=crop&w=634&q=80");
        background-size: 100%;
        padding-top: 2%;
    }
  a {
    color: white;
    font-size: 2em;
    text-decoration: none;
  }
  #mail-icn {
    position: absolute;
  }
  .form-cont {
    background: #3E2723;
  }
       
</style>

<script>
  import Form from "~/components/Form/Form"
  // import google maps
  import * as VueGoogleMaps from '~/node_modules/vue2-google-maps/src/main'
  import Vue from 'vue';

  // map init
  Vue.use(VueGoogleMaps, {
    load: {
      key: 'AIzaSyDnS8Ua1JgpwDPJDdfZN1AX_QhaPLTA_rE',
      v: 'OPTIONAL VERSION NUMBER',
    }
  });

  export default {
     components: {
          Form
        },

    data() {
      return {
       
      // google map functions
        center: {
          lat: 10.5,
          lng: 11.0
        },
        markers: [{
          position: {
            lat: 10.0,
            lng: 10.0
          }
        }, {
          position: {
            lat: 11.0,
            lng: 11.0
          }
        }],

        // adding google maps styles via :options="{styles:styles}" attribute
        styles: [{
            "stylers": [{
                "visibility": "on"
              },
              {
                "saturation": -100
              },
              {
                "gamma": 0.54
              }
            ]
          },
          {
            "featureType": "road",
            "elementType": "labels.icon",
            "stylers": [{
              "visibility": "off"
            }]
          },
          {
            "featureType": "water",
            "stylers": [{
              "color": "#4d4946"
            }]
          },
          {
            "featureType": "poi",
            "elementType": "labels.icon",
            "stylers": [{
              "visibility": "off"
            }]
          },
          {
            "featureType": "poi",
            "elementType": "labels.text",
            "stylers": [{
              "visibility": "simplified"
            }]
          },
          {
            "featureType": "road",
            "elementType": "geometry.fill",
            "stylers": [{
              "color": "#ffffff"
            }]
          },
          {
            "featureType": "road.local",
            "elementType": "labels.text",
            "stylers": [{
              "visibility": "simplified"
            }]
          },
          {
            "featureType": "water",
            "elementType": "labels.text.fill",
            "stylers": [{
              "color": "#ffffff"
            }]
          },
          {
            "featureType": "transit.line",
            "elementType": "geometry",
            "stylers": [{
              "gamma": 0.48
            }]
          },
          {
            "featureType": "transit.station",
            "elementType": "labels.icon",
            "stylers": [{
              "visibility": "off"
            }]
          },
          {
            "featureType": "road",
            "elementType": "geometry.stroke",
            "stylers": [{
              "gamma": 7.18
            }]
          }
        ]
      }
    }
  }

</script>
