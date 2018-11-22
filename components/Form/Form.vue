<template>
  <v-container>
    <v-form ref="form" v-model="valid" lazy-validation>
      <v-text-field v-model="name" :rules="nameRules" :counter="10" label="Name" required></v-text-field>
      <v-text-field v-model="email" :rules="emailRules" label="E-mail" required></v-text-field>
      <v-text-field v-model="phone" :rules="phoneRules" label="Phone" required></v-text-field>
      <v-select v-model="select" :items="items" :rules="[v => !!v || 'Item is required']" label="Reason to Contact"
        required></v-select>
      <v-text-field v-model="message" :rules="text" label="Message" required></v-text-field>

      <v-btn color="green" :disabled="!valid" @click="submit">
        submit
      </v-btn>
      <v-btn flat @click="clear">clear</v-btn>
    </v-form>
  </v-container>
</template>

<script>
  import axios from 'axios'

  export default {
    data: () => ({
      valid: true,
      name: '',
      nameRules: [
        v => !!v || 'Name is required',
        v => (v && v.length <= 10) || 'Name must be less than 10 characters'
      ],
      email: '',
      emailRules: [
        v => !!v || 'E-mail is required',
        v => /.+@.+/.test(v) || 'E-mail must be valid'
      ],
      select: null,
      items: [
        'I Have Question',
        'Business Inquiry',
        'To Book in Advance',
      ],
      checkbox: false
    }),

    methods: {
      submit() {
        if (this.$refs.form.validate()) {
          // Native form submission is not yet supported
          axios.post('/api/submit', {
            name: this.name,
            email: this.email,
            select: this.select,
          })
        }
      },
      clear() {
        this.$refs.form.reset()
      }
    }
  }

</script>
