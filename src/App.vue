<script setup>
import { RouterLink, RouterView } from 'vue-router'

</script>

<template>

<nav class="navbar navbar-expand-lg bg-body-tertiary">
  <div class="container-fluid">
    <RouterLink to="/" class="navbar-brand">ShopFruit</RouterLink>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav">
        <li class="nav-item">
          
          <RouterLink to="/" class="nav-link">Home</RouterLink>
        </li>
        <li class="nav-item">
          <RouterLink to="/Cart" class="nav-link">Cart</RouterLink>
        </li>
        <li class="nav-item">
       
          <RouterLink to="/About" class="nav-link">About</RouterLink>
        </li>
      </ul>
    </div>
  </div>
</nav>

<RouterView/>
</template>