/* global useRuntimeConfig, $fetch */

const services = []

const setRecords = (records) => {
  records.forEach((element) => {
    services.push(element)
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

export const getCities = async (location) => {
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
