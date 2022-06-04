<template>
  <GuestsList :guests="guests" />
</template>
<script>
import { fetchGuests } from '../utils/airtable'

export default {
  name: 'Guests',
  data: () => ({
    guests: [],
  }),
  async mounted() {
    this.guests = await fetchGuests()
  },
}
</script>
