<template>
  <div
    class="col-span-1 flex flex-col p-5 bg-white-500 box-border rounded-lg border-2 border-solid border-[#0000001a]"
  >
    <div class="flex flex-col pr-3 mb-4">
      <div v-if="photo.length !== 0" class="aspect-w-3 aspect-h-2">
        <img
          class="object-cover shadow-lg rounded-lg"
          :src="photo[0].url"
          alt=""
        />
      </div>
      <div class="font-nunito text-subtitle mb-2">
        {{ name }}
      </div>
      <div class="font-nunito text-subtitle mb-2">
        {{ story }}
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'GuestsItem',
  props: {
    fieldId: {
      type: String,
      default: '',
    },
    name: {
      type: String,
      default: '',
    },
    story: {
      type: String,
      default: '',
    },
    photo: {
      type: Array,
      default() {
        return []
      },
    },
  },
}
</script>
