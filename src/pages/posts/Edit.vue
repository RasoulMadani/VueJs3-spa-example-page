<script>
import {reactive, ref} from "vue";
import axios from "axios";
import Swal from 'sweetalert2'
import {useRoute} from "vue-router";

export default {
  setup() {
    const form = reactive({
      title: "",
      titleErrorText: "",
      body: "",
      bodyErrorText: "",
    })
    const loading = ref(false);
    const route = useRoute();

    function getPost() {
      axios.get(` https://jsonplaceholder.typicode.com/posts/${route.params.id}`)
          .then((response) => {
            console.log(response.data);
            form.title = response.data.title;
            form.body = response.data.body;
          })
          .catch((error) => {
            console.log(error);
          })
    }

    getPost();
    function validate() {
      if (form.title === "") {
        form.titleErrorText = "Title is required";
      } else {
        form.titleErrorText = "";
      }

      if (form.body === "") {
        form.bodyErrorText = "Title is required";
      } else {
        form.bodyErrorText = "";
      }

      if (form.title !== "" && form.body !== "") {
        loading.value = true;
        updatePost();
      }
      console.log(form.titleErrorText);
    }

    function updatePost() {
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
      form, validate,loading
    }
  }
}
</script>

<template>

  <div class="col-md-6 ">
    <h2 class="mb-5">Edit Post :</h2>
    <form @submit.prevent="validate">
      <div class="form-group">
        <label for="exampleInputEmail1"

        >Title</label>
        <input

            type="text" class="form-control"
            v-model.lazy.trim="form.title"

        >
        <div class="form-text text-danger">
          {{ form.titleErrorText }}
        </div>
      </div>

      <div class="form-group">
        <label for="exampleInputPassword1">Body</label>
        <textarea rows="6"
            v-model.lazy.trim="form.body" type="text" class="form-control"/>
        <div class="form-text text-danger">
          {{ form.bodyErrorText }}
        </div>
      </div>
      <button type="submit" class="btn btn-dark mt-4" :disabled="loading">
        <div v-if="loading" class="spinner-border spinner-border-sm" role="status"></div>
        Edit Post
      </button>
    </form>
  </div>

</template>

<style scoped>

</style>