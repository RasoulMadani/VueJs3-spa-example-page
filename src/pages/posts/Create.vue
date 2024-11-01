<script>
import {reactive, ref} from "vue";
import axios from "axios";

export default {
  setup() {
    const form = reactive({
      title: "",
      titleErrorText: "",
      body: "",
      bodyErrorText: "",
    })
    const loading = ref(false);
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
        createPost();
      }
      console.log(form.titleErrorText);
    }

    function createPost() {
      axios.post("https://jsonplaceholder.typicode.com/posts", {
        title: form.title,
        body: form.body,
        userId: 1,
      })
          .then((response) => {
            loading.value = false;
            console.log(response.data);
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
    <h2 class="mb-5">Create Post :</h2>
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
        <textarea
            v-model.lazy.trim="form.body" type="text" class="form-control"/>
        <div class="form-text text-danger">
          {{ form.bodyErrorText }}
        </div>
      </div>
      <button type="submit" class="btn btn-dark mt-4" :disabled="loading">
        <div v-if="loading" class="spinner-border spinner-border-sm" role="status"></div>
        Create Post
      </button>
    </form>
  </div>

</template>

<style scoped>

</style>