<template>
  <div>
    <h2>What would you like to do?</h2>

    <!-- Buttons will mount/unmount which every component you choose -->
    <router-link to="/getRecord"><button>Generate a report!</button></router-link>
    <router-link to="/addRecord"><button>Add a transaction!</button></router-link>
  </div>
</template>

<style>
button {
  padding: 10px;
  margin: 10px;
}
</style>
