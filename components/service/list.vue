<template>
  <div class="grid grid-cols-auto-fit gap-6 p-2">
    <ul v-for="service in services" :key="service.id" role="list">
      <ServiceItem
        :field-id="service.id"
        :name="service.fields.Name"
        :description="service.fields.Description"
        :url="service.fields.URL"
        :location="service.fields.Location ? service.fields.Location[0] : null"
        :type="service.fields.Type"
        :services="service.fields.Services"
        :phone="service.fields.Phone"
        :rating="service.fields.Rating"
      />
    </ul>
  </div>
</template>
<script>
export default {
  name: 'ServiceList',
  props: {
    services: {
      type: Array,
      default: () => [],
    },
  },
}
</script>
