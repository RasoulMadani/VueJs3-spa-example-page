<script>
import axios from "axios";
import {ref} from "vue";
import {useRoute} from "vue-router";

export default {
  setup() {
    const post = ref({});
    const loading = ref(true);
    const route = useRoute();
    function getPost() {
      axios.get(` https://jsonplaceholder.typicode.com/posts/${route.params.id}`)
          .then((response) => {
            console.log(response.data);
            post.value = response.data;
            console.log(post.value.title);
            loading.value = false;
          })
          .catch((error) => {
            console.log(error);
          })
    }

    getPost();
    return {post, loading, route}
  }
}
</script>

<template>


  <div v-if="loading" class="spinner-border" role="status">
    <span class="sr-only"></span>
  </div>

  <div v-else class="col-md-6">
    <div class="card">
      <div class="card-header">
        {{ post.title }}
      </div>


      <ul class="list-group list-group-flush">
        <li class="list-group-item">Username : {{ post.body }}</li>

      </ul>
      <div class="card-footer">
        <button class="btn btn-sm btn-danger me-4">Delete</button>
        <button class="btn btn-sm btn-dark">Edit</button>
      </div>
    </div>
  </div>


</template>

<style scoped>

</style>