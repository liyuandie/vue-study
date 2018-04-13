<template>
  <div class="Bind">
    <span v-bind:title="message">
      鼠标悬停几秒钟查看此处动态绑定的提示信息
    </span>
    <p v-if="seen">现在能看到</p>
    <ul>
      <li v-for="item in todos" v-bind:key='item'>
        {{item.text}}
      </li>
    </ul>
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
      ]
    }
  }
}
</script>
