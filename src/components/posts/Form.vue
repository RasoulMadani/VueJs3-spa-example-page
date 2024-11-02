<script >
import {reactive, ref} from "vue";

export default {
  props:{
    buttonLoading:Boolean,
  },
  setup(props, { emit }) {
    console.log(
        props
    )
    const form = reactive({
      title: "",
      titleErrorText: "",
      body: "",
      bodyErrorText: "",
    })

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
        emit('formData',form);
      }

    }
    return {form,validate};
  }
}
</script>

<template>
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
    <button type="submit" class="btn btn-dark mt-4" :disabled="buttonLoading">
      <div v-if="buttonLoading" class="spinner-border spinner-border-sm" role="status"></div>
      Create Post
    </button>
  </form>
</template>

<style scoped>

</style>