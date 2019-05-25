<template>
  <!-- create folder modal starts -->
  <b-modal id="create-tag" v-model="popupOpen" :title="checkTitle" @ok.prevent="CheckTag()" >
    <h6>Description </h6>
    <b-form-input type="text"
                    placeholder="Please Add Description "
                    v-model="tag.tag"></b-form-input>
  </b-modal>
  <!-- create folder modal ends -->
</template>

<script>
import api from './scripts/api';
import Finput from 'homes/components/Finput';
import { required } from 'vuelidate/lib/validators'

export default {
  name: 'CreateTag',
  components: {
    Finput
  },
  props: {
    selectUser: {},
    tag: {
      type: Object
    }
  },
  computed: {
    checkTitle: function() {
      if(this.tag.id){
        return 'Edit Tag'
      } else {
        return 'Create Tag'
      }
    },
    CheckOkLabel: function() {
      if(this.tag.id){
        return 'Save'
      } else {
        return 'Create'
      }
    }
  },
  methods: {
    CheckTag: function() {
      var self = this;
      api.createTag(self.tag, self.selectUser)
      .then(res => {
        if(res && res.data && res.data.id) {
          self.user.tags.push(res.data)
          self.$toasted.success("Tag created successfully")
          self.$v.tag.$reset()
          this.popupOpen = false;
        }
      })
      .catch(error => {
        self.$v.tag.$reset()
        self.$toasted.error("Error while creating tag.")
      });
    }
  },
  data() {
    return {
      popupOpen: false
    }
  },
  validations: {
    tag: {
      tag: { required }
    }
  }
}
</script>
