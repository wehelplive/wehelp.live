<template>
  <div>
    <h1>Cars</h1>
  </div>
</template>

//
<script>
import axios from 'axios'
export default {
  async asyncData() {
    const api =
      'https://api.airtable.com/v0/appcCvlO2K4dtAons/Cars?api_key=keydEXl97LFVx03hM'
    const cars = await axios.get(api).then((response) => {
      return response.data
    })
    console.log(response)
    return { cars }
  },
  data() {
    return {
      error: 'Error',
    }
  },
}
</script>
