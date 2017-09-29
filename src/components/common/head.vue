<template>
    <header>
     <a href="/" class="iconfont prePage">&#xe606;</a>
     <p>注册</p>
   </header>
</template>
<script>
export default {
	    components:{
        
	    },
		mounted () {
			 this.clicktoggle();
		},
	    methods: {
	       clicktoggle:function(){
	         console.log(111)
	         console.log(this.$root)
	       },
	       fetchDate:function(){
	         console.log('change')
	         console.log(this.$route)
	       },
	    },
	    created() {
	     // 组件创建完后获取数据，
	     // 此时 data 已经被 observed 了
	     this.fetchDate();
	    },
	    watch: {
	     // 如果路由有变化，会再次执行该方法
	     "$route": "fetchDate"
	    }
}
</script>

<style>
</style>
