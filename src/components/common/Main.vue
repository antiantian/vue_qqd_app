<template>
    <div>
       <transition name="move" mode="out-in"><router-view></router-view></transition>
       <footer2></footer2>
    </div>
</template>
<script>
import vHead from './head.vue';
import footer2 from './footer.vue';
export default {
    components:{
        vHead,footer2
    }
}
</script>

<style>
</style>
