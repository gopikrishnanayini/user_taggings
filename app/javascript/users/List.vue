<template>
  <!-- Initial Page start -->
  <div>
    <b-breadcrumb :items="items" />
    <b-jumbotron bg-variant="white">
      <h1 slot="header">User's List</h1>
      <h5 slot="lead">List of User's.</h5>
      <hr class="my-4" />
      <template>
        <div class="w-100" style="text-align:center;">
          <b-table bordered :fields="fields" :items="users" :filter="filter" :sort-by.sync="sortBy"
      :sort-desc.sync="sortDesc">
            <template slot="first_name" slot-scope="data">
              <b-link v-b-modal="'show-tags'" variant="link" v-on:click="showUser(data.item)">{{data.item.first_name}}</b-link>
            </template>
            <template slot="actions" slot-scope="data">
              <div>
                <b-dropdown id="ddown-dropright" dropright variant="primary" class="m-2">
                  <template slot="button-content">
                    <i class="icon ion-ios-more"></i>
                  </template>
                  <b-dropdown-item @click="disableUser(data.item)">Disable</b-dropdown-item>
                  <b-dropdown-item v-b-modal="'show-user'" v-on:click="showUser(data.item)">Show</b-dropdown-item>
                  <b-dropdown-item @click="editUser(data.item.id)">Edit</b-dropdown-item>
                  <b-dropdown-item @click="deleteUser(data.item)" href="#">Delete</b-dropdown-item>
                </b-dropdown>
              </div>
            </template>
          </b-table>
        </div>
      </template>
      <show-user :user="user"></show-user>
      <show-tags :user="user" :tags="GetTags"></show-tags>
    </b-jumbotron>
  </div>
</template>

<script>
import api from './scripts/api';
import Finput from 'homes/components/Finput';
import Swal from 'sweetalert2/dist/sweetalert2.js'
import ShowUser from './ShowUser'
import ShowTags from './ShowTags'

export default {
  name: 'List',
  components: {
    Finput,
    Swal,
    ShowUser,
    ShowTags
  },
  computed: {
    GetTags: function() {
      return this.user.tags
    }
  },
  methods: {
    editUser: function(value){
      window.open("/users/"+parseInt(value)+"/edit")
    },
    showUser: function(user){
      return this.user = user
    },
    disableUser: function(user){
      var self = this;
      api.disableUser({user: { id: user.id, status: "disable"}})
      .then(res => {
        self.$toasted.success("User updated successfully")
      })
      .catch(error => {
        console.log(error);
      });
    },
    deleteUser: function(user){
      Swal.fire({
        title: 'Are you sure?',
        text: "You want to delete  "+user.name+'  user',
        type: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes, delete it!'
      }).then((result) => {
        if (result.value) {
          var self = this;
          api.deleteUser(user.id)
          .then(res => {
            if(res && res.data && res.data.id) {
              self.users = _.reject(self.users, { id: res.data.id })
              self.$toasted.success("Folder is deleted successfully.")
            }
          })
          .catch(error => {
            console.log(error);
          });
        }
      })
    }
  },
  created() {
    api.fetchUsers()
    .then(res => {
      let docs = res.data.payload
      this.users = docs
    })
    .catch(error => {
      console.log(error);
    });
  },
  data() {
    return {
      fields: [
        {
          key: 'first_name',
          label: 'First Name',
          sortable: true
        },
        {
          key: 'last_name',
          label: 'Last Name',
          sortable: true
        },
        {
          key: 'status',
          label: 'Status',
          sortable: true
        },
        {
          key: 'updated_at',
          label: 'Updated On',
          sortable: true
        },
        {
          key: 'actions',
          label: '',
          variant: 'danger'
        }
      ],
      users: [],
      user: {
        tags: []
      },
      items: [
        {
          text: 'User',
          href: '/'
        }
      ],
      filter: '',
      delete_user: {},
      sortBy: 'first_name',
      sortDesc: false,
    }
  },
}
</script>
