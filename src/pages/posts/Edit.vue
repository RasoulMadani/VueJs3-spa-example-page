<script>
import { ref} from "vue";
import axios from "axios";
import Swal from 'sweetalert2'
import {useRoute} from "vue-router";
import PostForm from "../../components/posts/Form.vue";

export default {
  components:{
    PostForm
  },
  setup() {
    const loading = ref(false);
    const post = ref({});
    const route = useRoute();
    const pageLoading = ref(true);
    function getPost() {
      axios.get(` https://jsonplaceholder.typicode.com/posts/${route.params.id}`)
          .then((response) => {
            post.value = response.data;
            pageLoading.value = false;
          })
          .catch((error) => {
            console.log(error);
          })
    }

    getPost();

    function updatePost(form) {
      loading.value = true;
      axios.put(`https://jsonplaceholder.typicode.com/posts/${route.params.id}`, {
        title: form.title,
        body: form.body,
        id: route.params.id,
        userId: 1,
      })
          .then((response) => {
            loading.value = false;
            Swal.fire({
              title: 'Thanks!',
              text: 'Post updated successfully.',
              icon: 'success',
              confirmButtonText: 'Ok'
            })
          })
          .catch((error) => {
            console.log(error);
          });
    }

    return {
      loading,updatePost,post,pageLoading
    }
  }
}
</script>

<template>
  <div v-if="pageLoading" class="spinner-border" role="status">
    <span class="sr-only"></span>
  </div>
  <div v-else class="col-md-6 ">
    <h2 class="mb-5">Edit Post :</h2>

    <PostForm @formData="updatePost" :button-loading="loading" button-text="Edit Post"  :post="post" />
  </div>

</template>

<style scoped>

</style>