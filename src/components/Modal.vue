<template>
  <div>
    <GDialog v-model="value">
      Content
    </GDialog>

    <button @click="onOpen">Open Dialog</button>

  </div>
</template>

<script>
import { ref } from 'vue'
import "gitart-vue-dialog/dist/style.css";
import { GDialog, plugin } from "gitart-vue-dialog";

export default {
  name: "Modal",
  components: {
    GDialog,
  },
  setup() {
    const value = ref(false)
    const onOpen = () => {
      value.value = true
    }

    return {
      value,
      onOpen,
    }
  },
}
</script>

<style scoped>

</style>
