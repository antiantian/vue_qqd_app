<template>
    <div>
       <transition name="move" mode="out-in"><router-view></router-view></transition>
       <v-footer></v-footer>
    </div>
</template>
<script>
import vHead from './head.vue';
import vFooter from './footer.vue';
export default {
    components:{
        vHead,vFooter
    }
}
</script>

<style>
</style>
