<template>
  <div
    class="col-span-1 flex flex-col h-212 p-5 bg-white-500 box-border rounded-lg border-2 border-slate-200"
  >
    <div class="flex flex-col  pr-3 mb-4">
      <div v-if="photo.length !== 0" class="aspect-w-3 aspect-h-2">
        <img
          class="object-cover w-auto h-96 shadow-lg rounded-lg"
          :src="photo[0].url"
          alt=""
        />
      </div>
      <div v-else>
        <div class="object-cover h-96 w-auto shadow-lg rounded-lg p-20">
          <BrandLogo class="h-24 w-24 m-auto" />
        </div>
      </div>
      <div class="font-nunito text-zinc-600 text-bold mt-6">Id: {{ id }}</div>
      <div class="h-24 line-clamp-4 font-nunito text-subtitle mt-6">
        {{ name }}
      </div>
      <div
        class="line-clamp-10 font-nunito text-body text-subtitle text-zinc-600 mt-4"
      >
        {{ story }}
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'GuestsItem',
  props: {
    id: {
      type: String,
      default: Number,
    },
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
