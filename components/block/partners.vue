<template>
  <div
    ref="slider"
    class="flex flex-row items-center justify-center overflow-x-scroll sm:overflow-x-hidden cursor-grab sm:cursor-default no-scrollbar gap-8 h-[191px] bg-white-500"
    @scroll="handleScroll"
  >
    <div class="flex align-middle gap-8 h-1/5 sm:h-2/5 px-5 sm:px-0 no-select">
      <img
        src="/partners/pg-avogados.svg"
        alt="PG avogados"
        class="no-select"
      />
      <img src="/partners/banovo.svg" alt="Banovo" class="no-select" />
      <img src="/partners/snk.svg" alt="SNK" class="no-select" />
    </div>
  </div>
</template>
<script>
import { ref } from 'vue'
export default {
  setup() {
    const slider = ref(null)
    let timer = null
    function handleScroll(e) {
      if (timer !== null) {
        clearTimeout(timer)
      }
      timer = setTimeout(function() {
        // do something
        slider.value.scrollLeft = 0
      }, 1000)
    }
    return {
      handleScroll,

      slider,
    }
  },
}
</script>
<style scoped>
.no-scrollbar::-webkit-scrollbar {
  display: none;
}
.no-select {
  /* user-select: none; */
  /*-webkit-user-drag: none;*/
}
</style>
