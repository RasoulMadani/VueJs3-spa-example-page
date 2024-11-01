<script>
import axios from "axios";
import {ref} from "vue";
import UserCardView from '../../components/users/CardView.vue'
export default {
  components: {
    UserCardView
  },
  setup() {
    const users = ref([]);
    function getUsers() {
      axios.get("https://jsonplaceholder.typicode.com/users")
          .then((response) => {
            users.value = response.data;
          })
          .catch((error) => {
            console.log(error);
          })
    }
    getUsers();
    return{users}
  }
}
</script>

<template>
  <div class="container mt-5">
    <div class="row g-3">
      <div class="col-md-4" v-for="user in users" :key="user.id">

        <UserCardView :user="user"  />
        </div>
    </div>
  </div>
</template>

<style scoped>

</style>