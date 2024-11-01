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
    const users = ref([]);
    const loading = ref(true);
    function getUsers() {
      axios.get("https://jsonplaceholder.typicode.com/users")
          .then((response) => {
            users.value = response.data;
            loading.value = false;
          })
          .catch((error) => {
            console.log(error);
          })
    }

    getUsers();
    return {users,loading}
  }
}
</script>

<template>


      <div v-if="loading" class="spinner-border" role="status">
        <span class="sr-only"></span>
      </div>

      <div v-else class="col-md-4" v-for="user in users" :key="user.id">
        <UserCardView :user="user"/>
      </div>


</template>

<style scoped>

</style>