<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <nav class="navbar">
    <div class="container-fluid">
      <RouterLink class="navbar-brand" to="#">
        <img
          src="@/assets/logo.svg"
          alt="Logo"
          width="30"
          height="24"
          class="d-inline-block align-text-top"
        />
        <span class="text-logo">Poke Api</span>
      </RouterLink>
      <div class="links-navbar">
        <RouterLink to="/" class="link">Home</RouterLink>
        <RouterLink to="/about" class="link">About</RouterLink>
        <RouterLink to="/pokemons" class="link">Pokemons</RouterLink>
        <RouterLink to="/counter" class="link">Counter</RouterLink>
        <RouterLink to="/favorites" class="link">Favorites</RouterLink>
      </div>
    </div>
  </nav>

  <RouterView />
</template>

<style scoped>

    .navbar {
        background-color: rgb(39, 39, 39);
    }
    .text-logo {
        color: aliceblue;
        margin-left: 1rem;
    }
    .links-navbar {
        display: flex;
        flex-direction: row;
        gap: 1rem;
    }
    .link {
        color: aliceblue;
        text-decoration: none;
        font-size: small;
    }
    
</style>