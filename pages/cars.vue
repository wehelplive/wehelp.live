<template>
  <Suspense>
    <template #default>
      <div
        v-for="car in list"
        :key="car.id"
        class="container"
        style="{`background-color: ${car.fields.color} %`}"
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
    <template #fallback>
      <div>Loading...</div>
    </template>
  </Suspense>
</template>

<script>
export default {
  async setup() {
    const data = await $fetch(
      'https://api.airtable.com/v0/appv6M4U4ckXcHzhU/Cars?api_key=keyQ54SEzABIZEm9F'
    )
    console.log(data.records)
    return {
      list: data.records,
    }
  },
}
</script>

<style scoped>
.container {
  display: flex;
  justify-content: center;
  align-items: center;

  color: rgb(94, 6, 6);
}
div {
  margin: 20px;
}
</style>
