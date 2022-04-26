<template>
  <div class="grid grid-cols-auto-fit gap-6">
    <ul v-for="service in services" :key="service.id" role="list">
      <TServiceListItem
        :field-id="service.id"
        :name="service.fields.Name"
        :description="service.fields.Description"
        :url="service.fields.URL"
        :location="service.fields.Location"
        :type="service.fields.Type"
      />
    </ul>
  </div>
</template>
<script>
import TServiceListItem from '../components/services/TServiceListItem.vue'
import { getServices } from '../utils/airtable.js'

export default {
  name: 'Services',
  components: {
    TServiceListItem,
  },
  data: () => ({
    services: [],
  }),
  async mounted() {
    const result = await getServices()
    this.services = result
  },
}
</script>
