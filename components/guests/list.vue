<template>
  <div class="grid grid-cols-auto-fit gap-6 p-2">
    <ul v-for="guest in guests" :key="guest.id" role="list">
      <GuestsItem
        v-if="guest.fields.Status === 'Validated' || 'Published'"
        :field-id="guest.id"
        :name="guest.fields.Name"
        :story="guest.fields.Story"
        :photo="guest.fields.Photo"
        :status="guest.fields.Status"
      />
    </ul>
  </div>
</template>
<script>
export default {
  name: 'GuestsList',
  props: {
    guests: {
      type: Array,
      default: () => [],
    },
  },
}
</script>
