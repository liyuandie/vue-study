<template>
  <div class="hello">
    <input v-model='message'>
    <p> {{message}}</p>
    <button @click="reverse">反转文字</button>
    <my-component></my-component>
  </div>
</template>

<script>
export default {
  name: 'Hello',
  data () {
    return {
      message: 'this is my first vue app'
    }
  },
  methods: {
    reverse: function () {
      this.message = this.message.split('').reverse().join('')
    }
  }
}
</script>
