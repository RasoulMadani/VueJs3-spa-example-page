<script>
import axios from "axios";
import {ref} from "vue";
import UserCardView from '../../components/users/CardView.vue'
import {useRoute} from "vue-router";

export default {
  components: {
    UserCardView
  },
  setup() {
    const user = ref({});
    const loading = ref(true);
    const route = useRoute();
    function getUser() {
      axios.get(`https://jsonplaceholder.typicode.com/users/${route.params.id}`)
          .then((response) => {
            user.value = response.data;
            loading.value = false;
          })
          .catch((error) => {
            console.log(error);
          })
    }

    getUser();
    return {user,loading}
  }
}
</script>

<template>


      <div v-if="loading" class="spinner-border" role="status">
        <span class="sr-only"></span>
      </div>

      <div v-else class="col-md-4">
        <UserCardView :user="user"/>
      </div>

</template>

<style scoped>

</style>