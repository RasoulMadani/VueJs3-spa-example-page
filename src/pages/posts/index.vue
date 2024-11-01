<script>
import axios from "axios";
import {ref} from "vue";
import {useRoute} from "vue-router";

export default {
  setup() {
    const posts = ref([]);
    const loading = ref(true);

    function getPosts() {
      axios.get("https://jsonplaceholder.typicode.com/posts")
          .then((response) => {
            posts.value = response.data;
            loading.value = false;
          })
          .catch((error) => {
            console.log(error);
          })
    }

    getPosts();
    return {posts,loading}
  }
}
</script>

<template>
      <div>
        <router-link class="btn btn-dark" :to="{name : 'createPost'}">Create Post</router-link>
      </div>

      <div v-if="loading" class="spinner-border" role="status">
        <span class="sr-only"></span>
      </div>

      <div v-else class="col-md-6" v-for="post in posts" :key="post.id">
        <div class="card" >
          <router-link class="card-header" :to="{name: 'postId',params: { id: post.id } }">
            {{ post.title }}
          </router-link>
          <ul class="list-group list-group-flush">
            <li class="list-group-item">Username : {{post.body}}</li>

          </ul>
        </div>
      </div>


</template>

<style scoped>

</style>