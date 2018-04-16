<template>
  <div id="app">
    <Hello></Hello>
    <bind></bind>
  </div>
</template>

<script>
import Hello from './components/Hello'
import Bind from './components/Bind'
export default {
  name: 'App',
  components: {
    Hello,
    Bind
  }
}
</script>

<style>
/*#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}*/
</style>
