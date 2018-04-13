<template>
  <div class="Bind">
    <span :title="message">
      鼠标悬停几秒钟查看此处动态绑定的提示信息
    </span>
    <p v-if="seen">条件和循环：</p>
    <ul>
      <li v-for="item in todos" v-bind:key='item'>
        {{item.text}}
      </li>
    </ul>
    <div v-if="loginType === 'username'">
      <label>Username</label>
      <input placeholder="Enter your username" key="username-input">
    </div>
    <div v-else>
      <label>Email</label>
      <input placeholder="Enter your email address" key="email-input">
    </div>
    <button @click="toggle">Toggle input type</button>
  </div>
</template>
<script>
export default {
  name: 'Bind',
  data () {
    return {
      message: '页面加载于' + new Date().toLocaleString(),
      seen: true,
      todos: [
        { text: '学习 JavaScript' },
        { text: '学习 Vue' },
        { text: '整个牛项目' }
      ],
      loginType: 'username'
    }
  },
  methods: {
    toggle: function () {
      if (this.loginType === 'username') {
        this.loginType = ''
      } else this.loginType = 'username'
    }
  }
}
</script>
