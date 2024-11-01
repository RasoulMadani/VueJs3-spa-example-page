<script >
export default {
  props: {
    user:Object
  }
}
</script>

<template>
  <div class="card" >
    <router-link class="card-header" :to="{name: 'userId',params: { id: user.id } }">
      {{ user.name }}
    </router-link>
    <ul class="list-group list-group-flush">
      <li class="list-group-item">Username : {{user.username}}</li>
      <li class="list-group-item">Email : {{user.email}}</li>
      <li class="list-group-item">Phone : {{user.phone}}</li>
    </ul>
  </div>
</template>

<style scoped>

</style>