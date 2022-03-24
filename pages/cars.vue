<template>
  <div
    v-for="car in list"
    :key="car.id"
    :style="{
      'background-color': car.fields.color ? `${car.fields.color}` : 'orange',
    }"
    class="container"
  >
    <div>
      {{ car.fields.color }}
    </div>
    <div>
      {{ car.fields.Name }}
    </div>
    <div>
      {{ car.fields.year }}
    </div>
  </div>
</template>
<script>
export default {
  name: 'Airtable',
  data() {
    return {
      list: [],
    }
  },
  async created() {
    const { data } = await useFetch('/api/adb')
    this.list = data._rawValue.data
  },
}
</script>
<style scoped>
.container {
  display: flex;
  justify-content: center;
  align-items: center;

  color: white;
}
div {
  margin: 20px;
}
</style>
