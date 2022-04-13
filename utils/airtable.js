/* global useRuntimeConfig, $fetch */

const services = []

const setRecords = (records) => {
  records.forEach((element) => {
    const cities = []
    const locations = element.fields?.Location
    if (locations) {
      locations.forEach(async (location) => {
        const result = await getCities(location)
        cities.push(result)
      })
      services.push({
        ...element,
        fields: { ...element.fields, Location: cities },
      })
    } else {
      services.push(element)
    }
  })
}

export const getServices = async () => {
  const config = useRuntimeConfig()
  const options = {
    headers: {
      Authorization: `Bearer ${config.API_KEY}`,
    },
  }
  let offset = null
  do {
    const offSet = offset ? `offset=${offset}` : ''
    const url = `https://api.airtable.com/v0/${config.BASE_ID}/Services?view=Grid%20view&${offSet}`
    const response = await $fetch(url, options)
    if (response?.offset) {
      setRecords(response.records)
      offset = response.offset
    } else {
      setRecords(response.records)
      offset = null
    }
  } while (offset)

  return services
}

const getCities = async (location) => {
  const config = useRuntimeConfig()
  const options = {
    headers: {
      Authorization: `Bearer ${config.API_KEY}`,
    },
  }
  const url = `https://api.airtable.com/v0/${config.BASE_ID}/Cities/${location}`
  const response = await $fetch(url, options)
  if (response) return response
}
