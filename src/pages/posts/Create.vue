<script>
import {reactive, ref} from "vue";
import axios from "axios";
import Swal from 'sweetalert2'
import PostForm from "../../components/posts/Form.vue";

export default {
  components:{
    PostForm
  },
  setup() {
    const loading = ref(false);
    function createPost(formData) {
      loading.value = true;
      axios.post("https://jsonplaceholder.typicode.com/posts", {
        title: formData.title,
        body: formData.body,
        userId: 1,
      })
          .then(() => {
            loading.value = false;
            Swal.fire({
              title: 'Thanks!',
              text: 'Post created successfully.',
              icon: 'success',
              confirmButtonText: 'Ok'
            })
          })
          .catch((error) => {
            console.log(error);
          });
    }

    return {
      createPost,loading
    }
  }
}
</script>

<template>

  <div class="col-md-6 ">
    <h2 class="mb-5">Create Post :</h2>

    <PostForm @formData="createPost" :button-loading="loading" button-text="Create Post" />
  </div>

</template>

<style scoped>

</style>