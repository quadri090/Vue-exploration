<script>
    export default {
      data () {
        return {
          awesome: true,
          switch: "Light"
        }
    },

    methods: {
      toggle() {
        this.awesome = !this.awesome;
        document.querySelector('body').classList.toggle('bg-black');
        document.querySelector('body').classList.toggle('text-white');
      }
    }
  }
</script>

<template>
    <div class="mt-6 flex gap-6">
        <button @click="toggle" class="border-[1px] border-orange-500 w-[70px] rounded-md">{{ switch }}</button>
        <h1 v-if="awesome">White Is Divine</h1>
        <h1 v-else>Black is Beautiful</h1>
    </div>
</template>