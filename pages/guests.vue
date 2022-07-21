<template>
  <div>
    <div v-if="guests.length">
      <GuestsList :guests="guests" />
    </div>
    <div
      v-else
      class="flex w-full h-full min-h-screen items-center justify-center"
    >
      <loader-item />
    </div>
  </div>
</template>
<script>
import { fetchGuests } from '../utils/airtable'

export default {
  name: 'Guests',
  data: () => ({
    guests: [],
  }),
  async mounted() {
    this.guests = (await fetchGuests()).filter((item) =>
      ['Validated', 'Published'].includes(item.fields.Status)
    )
  },
}
</script>
