<template>
  <div id="app">
    <!-- <img src="./assets/logo.png"> -->
    <router-view></router-view>
    <div class="ant-message" :class="{ 'on': message }" >
      <span  v-if="message"><i class="iconfont icon-jinggao" :class="classA"></i>{{message}}</span>
    </div>
  </div>
</template>

<script>
import store from './store'
export default {
  name: 'app',
  computed: {
        message () {
          return store.state.message
        },
        classA(){
          return store.state.messageclass
        }
  }
}
</script>

<style>

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
.ant-message {
    font-size: 12px;
    position: fixed;
    z-index: 1010;
    width: 100%;
    top: 16px;
    left: 0;
    opacity:0;
    text-align:center;
    transition: all 0.5s ease-in-out;
    /* pointer-events: none; */
}
.ant-message span{
   display:inline-block;
   padding:3px 10px;
   background:#ffffff;
   color:#666666;
   font-size:12px;
   line-height:22px;
   border-radius:3px;
   box-shadow:0px 0px 10px rgba(0,0,0,0.5);
}
.ant-message.on{
  top:60px;
  opacity:1;
}
.ant-message span .iconfont{
  font-size:14px;
  padding-right:5px;
}
.ant-message span .success{
   color:green; 
}
.ant-message span .alert{
  color:orange;
}
.ant-message span .fail{
  color:orange;
}
</style>
