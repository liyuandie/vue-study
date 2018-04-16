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
    <div id="dynamic-component-demo">
      <button v-for="tab in tabs" v-bind:key="tab" v-bind:class="['tab-button', { active: currentTab === tab }]" v-on:click="currentTab = tab">{{ tab }}</button>

      <keep-alive>
        <component v-bind:is="currentTabComponent" class="tab"></component>
      </keep-alive>
    </div>
  </div>
</template>
<script>
import { Post, Archive } from './Dynamic Components/index'
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
      loginType: 'username',
      currentTab: 'Posts',
      tabs: ['Posts', 'Archive']
    };
  },
  methods: {
    toggle: function () {
      if (this.loginType === 'username') {
        this.loginType = '';
      } else this.loginType = 'username';
    }
  },
  computed: {
    currentTabComponent: function () {
      return 'tab-' + this.currentTab.toLowerCase()
    }
  }
};
</script>

<style>
.tab-button {
  padding: 6px 10px;
  border-top-left-radius: 3px;
  border-top-right-radius: 3px;
  border: 1px solid #ccc;
  cursor: pointer;
  background: #f0f0f0;
  margin-bottom: -1px;
  margin-right: -1px;
}
.tab-button:hover {
  background: #e0e0e0;
}
.tab-button.active {
  background: #e0e0e0;
}
.tab {
  border: 1px solid #ccc;
  padding: 10px;
}
.posts-tab {
  display: flex;
}
.posts-sidebar {
  max-width: 40vw;
  margin: 0;
  padding: 0 10px 0 0;
  list-style-type: none;
  border-right: 1px solid #ccc;
}
.posts-sidebar li {
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
  cursor: pointer;
}
.posts-sidebar li:hover {
  background: #eee;
}
.posts-sidebar li.selected {
  background: lightblue;
}
.selected-post-container {
  padding-left: 10px;
}
.selected-post > :first-child {
  margin-top: 0;
  padding-top: 0;
}
</style>

