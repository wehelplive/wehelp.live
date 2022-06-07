<template>
  <div
    class="col-span-1 flex flex-col p-5 bg-white-500 box-border rounded-lg border-2 border-solid border-[#0000001a]"
  >
    <div class="flex flex-col pr-3 mb-4">
      <div v-if="photo.length !== 0" class="aspect-w-3 aspect-h-2">
        <img
          class="object-cover w-auto h-96 shadow-lg rounded-lg"
          :src="photo[0].url"
          alt=""
        />
      </div>
      <div v-else>
        <div class="object-cover h-96 w-auto shadow-lg rounded-lg">
          <BrandLogo class="h-24 w-24 m-auto" />
        </div>
      </div>
      <div class="font-nunito text-subtitle mb-2 mt-8">Id: {{ id }}</div>
      <div class="font-nunito text-subtitle mb-2 mt-8">
        {{ name }}
      </div>
      <div class="font-nunito text-subtitle mb-2 mt-8">
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
      default: '',
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
