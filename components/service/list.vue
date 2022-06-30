<template>
  <div class="grid grid-cols-auto-fill auto-rows-fr gap-4 p-2 pb-10">
    <ul
      v-for="service in services"
      :key="service.id"
      role="list"
      class="grid grid-cols-auto-fill"
    >
      <ServiceItem
        :field-id="service.id"
        :name="service.fields.Name"
        :description="service.fields.Description"
        :url="service.fields.URL"
        :location="service.fields.Location ? service.fields.Location : null"
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
