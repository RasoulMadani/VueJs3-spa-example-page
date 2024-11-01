<script>
import axios from "axios";

export default {
  setup() {

    function getUsers() {
      axios.get("https://jsonplaceholder.typicode.com/users")
          .then((response) => {
            console.log(response.data);
          })
          .catch((error) => {
            console.log(error);
          })
    }
    getUsers();
  }
}
</script>

<template>
  <h1>users</h1>
</template>

<style scoped>

</style>