<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <h2>Essential Links</h2>
    <ul>
      <li><a href="https://vuejs.org" target="_blank">Core Docs</a></li>
      <li><a href="https://forum.vuejs.org" target="_blank">Forum</a></li>
      <li><a href="https://chat.vuejs.org" target="_blank">Community Chat</a></li>
      <li><a href="https://twitter.com/vuejs" target="_blank">Twitter</a></li>
      <br>
      <li><a href="http://vuejs-templates.github.io/webpack/" target="_blank">Docs for This Template</a></li>
    </ul>
    <h2>Ecosystem</h2>
    <ul>
      <li><a href="http://router.vuejs.org/" target="_blank">vue-router</a></li>
      <li><a href="http://vuex.vuejs.org/" target="_blank">vuex</a></li>
      <li><a href="http://vue-loader.vuejs.org/" target="_blank">vue-loader</a></li>
      <li><a href="https://github.com/vuejs/awesome-vue" target="_blank">awesome-vue</a></li>
    </ul>
     <h1 v-if="admin_id">你好：{{admin_id}} {{store_admin}}</h1>
     <h1 v-if="admin_id">你好{{store_admin}}</h1>
     <router-link to="login" v-else>登录</router-link>
     <router-link to="login">登录</router-link>
    <div>{{ count }}</div>
    <button @click="countadd">点击</button>
  </div>
</template>

<script>
import store from '../store'
export default {
  name: 'hello',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  computed: {
    count:function() {
      return store.state.count
    },
    admin_id:function(){
        return localStorage.getItem("LOGIN_TOKEN")&&JSON.parse(localStorage.getItem("LOGIN_TOKEN")).admin_id
    },
    store_admin:function(){
       return store.state.admin_id
    }
  },
  methods: {
    countadd () {
      store.commit('increment')
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
