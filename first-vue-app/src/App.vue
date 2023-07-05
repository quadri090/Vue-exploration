<script setup>
import { RouterLink, RouterView } from 'vue-router'
import home from "./views/home.vue"
import nav from "./views/nav.vue"
import createAccount from "./views/createAccount.vue"
import entityAccount from "./views/entityAccount.vue"
import legalform from "./views/legalform.vue"
</script>

<script>
  export default {
    components: {
      // theme,
      home,
      nav,
      createAccount,
      entityAccount,
      legalform,
      // todo
      // navigation,
    },

    data () {
      return {
        // currentPath: window.location.hash,
        // message: 'Hello World',
        // count: 0,
        // text: "",
      }
    },

    // computed: {
    // currentView() {
    //   return routes[this.currentPath.slice(1) || '/']
    //   }
    // },

    // mounted() {
    // window.addEventListener('hashchange', () => {
		//   this.currentPath = window.location.hash
    //   })
    // },

    // methods: {
    //   increment() {
    //     this.count++
    //   },
    //   decrement() {
    //     this.count--
    //     if (count < 1 ) {
    //     this.decrement().disable = true;
    //     } else {
    //     this.decrement().disable = false;
    //     }
    //   },
    //   onInput(e) {
    //     this.text = e.target.value;
    //   },
    // }
  }
</script>

<template>
  <RouterView />
  <!-- class="router-view" v-slot="{ Component }">
    <Transition name="page-slide" mode="out-in">
      <component :is="Component"/>
    </Transition>
  </RouterView> -->
</template>

<style scoped>

  /* .page-slide-enter-from,
  .page-slide-leave-to {
    opacity: 0;
    transform: translateX(60px);
  }
  
  .page-slide-enter-active,
  .page-slide-leave-active {
    transition: 400ms ease all;
  } */

</style>
