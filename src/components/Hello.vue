<template>
  <div class="hello">
    {{message}}
    <button v-on: click="reverseMessage">反转消息</button>
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
    reverseMessage: function () {
      this.message = this.message.split('').reverse().join('')
    }
  }
}
</script>
