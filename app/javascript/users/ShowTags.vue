<template>
  <!-- Initial Page start -->
  <b-modal id="show-tags">
    <div>
      <b-table striped hover :items="tags" :fields="fields">
       <template slot="actions" slot-scope="data">
          <div>
            <b-dropdown id="ddown-dropright" dropright variant="primary" class="m-2">
              <template slot="button-content">
                <i class="icon ion-ios-more"></i>
              </template>
              <b-dropdown-item v-b-modal="'create-tag'" variant="link" v-on:click="createTag(data.item)">Edit</b-dropdown-item>
              <b-dropdown-item @click="deleteTag(data.item)" href="#">Delete</b-dropdown-item>
            </b-dropdown>
          </div>
        </template>
      </b-table>
    </div>
    <create-tag :tag="tag" :selectUser="user"></create-tag>
  </b-modal>
</template>

<script>
import api from './scripts/api';
import Swal from 'sweetalert2/dist/sweetalert2.js'
import CreateTag from './CreateTag'

export default {
  name: 'Showtag',
  components: {
    Swal,
    CreateTag
  },
  props: {
    user: {},
    tags: []
  },
  computed: {
    GetTags: function() {
      return this.user.tags
    }
  },
  methods: {
    createTag: function(tag){
      debugger
      this.tag = JSON.parse(JSON.stringify(tag))
    },
    deleteTag: function(tag){
      Swal.fire({
        title: 'Are you sure?',
        text: "You want to delete  "+tag.name+'  user',
        type: 'warning',
        position: 'top-end',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes, delete it!'
      }).then((result) => {
        if (result.value) {
          var self = this;
          api.deleteTag(tag.id)
          .then(res => {
            if(res && res.data && res.data.id) {
              self.user.tags = _.reject(self.user.tags, { id: res.data.id })
              self.$toasted.success("Tag is deleted successfully.")
            }
          })
          .catch(error => {
            console.log(error);
          });
        }
      })
    }
  },
  data() {
    return {
      tag: {},
      fields: [
        {
          key: 'tag',
          label: 'Description',
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
      ]
    }
  }
}
</script>
