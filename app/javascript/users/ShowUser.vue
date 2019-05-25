<template>
  <!-- show  User modal starts -->
  <b-modal id="show-user" v-model="popupOpen" title="show user">
    <b-container>
      <b-row>
        <b-col>First Name</b-col><b-col>{{user.first_name}}</b-col>
      </b-row>
      <b-row>
        <b-col>Last Name</b-col><b-col>{{user.last_name}}</b-col>
      </b-row>
      <b-row>
        <b-col>Email</b-col><b-col>{{user.email}}</b-col>
      </b-row>
      <b-row>
        <b-col>Status</b-col><b-col>{{user.status}}</b-col>
      </b-row>
    </b-container>
    <b-btn v-b-modal="'create-tag'" variant="link" class="p-0" v-on:click="createTag('new')">Create Tag</b-btn>
    <create-tag :tag="tag" :selectUser="user"></create-tag>
  </b-modal>
</template>

<script>
import api from './scripts/api';
import CreateTag from './CreateTag'
export default {
  name: 'ShowUser',
  components: {
    CreateTag
  },
  props: {
    user: {
      tag: {}
    }
  },
  methods: {
    createTag: function(value){
      if (value == 'new') {
        this.tag = {
          description: '',
          user_id: this.user.id
        }
      } else {
        this.tag = JSON.parse(JSON.stringify(value))
      }
    }
  },
  data() {
    return {
      popupOpen: false,
      tag: {}
    }
  }
}
</script>
