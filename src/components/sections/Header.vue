<script >
export default {
  name: 'Header',
}
</script>

<template>
  <header class="">
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <a class="navbar-brand ms-4" href="#">WebProg.ir</a>
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>

      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav mr-auto">
          <li class="nav-item">
            <router-link to="/" class="nav-link" href="#">Home</router-link>
          </li>
          <li class="nav-item">
            <router-link to="/users" class="nav-link" href="#">Users</router-link>
          </li>

          <li class="nav-item">
            <router-link to="/posts" class="nav-link" href="#">Posts</router-link>
          </li>
        </ul>

      </div>
    </nav>
  </header>
</template>

<style scoped>
.router-link-active{
  color: rgba(0,0,0,0.9) !important;
  border-bottom: 2px solid rgba(0,0,0,0.9) !important;
}
</style>