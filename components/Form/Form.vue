<template>
  <v-container>
    <v-form v-model="valid">
      <v-text-field v-model="name" :rules="nameRules" :counter="10" label="Name" required></v-text-field>
      <v-text-field v-model="email" :rules="emailRules" label="E-Mail" required></v-text-field>
      <v-text-field v-model="phone" label="Phone"></v-text-field>
      <v-select v-model="select" :items="items" :rules="[v => !!v || 'Item is required']" label="Prebook" required></v-select>
      <v-checkbox v-model="checkbox" :rules="[v => !!v || 'You must agree to continue!']" label="Do you agree?"
        required></v-checkbox>
      <v-btn color="green" :disabled="!valid" @click="i">
        submit
      </v-btn>
    </v-form>
  </v-container>
</template>

<script>
  import axios from 'axios'

  export default {
    data: () => ({
      valid: false,
      name: '',
      nameRules: [
        v => !!v || 'name is required',
        v => v.length <= 10 || 'name must be less than 10 characters'
      ],
      email: '',
      emailRules: [
        v => !!v || 'E-mail is required',
        v => /.+@.+/.test(v) || 'E-mail Must be Vaild'
      ],
      phone: '+1',
      select: null,
      items: [
        'Prebook',
        'Feedback',
        'Other',
      ],
      checkbox: false
    }),
  }

</script>
