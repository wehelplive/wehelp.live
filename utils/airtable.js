/* global useRuntimeConfig, $fetch */
let cities = null

export const fetchServices = async (offset = null) => {
  try {
    const config = useRuntimeConfig()
    const options = {
      headers: {
        Authorization: `Bearer ${config.API_KEY}`,
      },
    }
    const offSet = offset ? `offset=${offset}` : ''
    const url = `https://api.airtable.com/v0/${config.BASE_ID}/Services?view=Grid%20view&${offSet}`
    const response = await $fetch(url, options)
    if (response?.offset) {
      return [...response.records, ...fetchServices(response.offset)]
    }
    return response.records
  } catch (error) {
    console.log(error)
  }
}

export const fetchCities = async (offset = null) => {
  try {
    const config = useRuntimeConfig()
    const options = {
      headers: {
        Authorization: `Bearer ${config.API_KEY}`,
      },
    }
    const offSet = offset ? `offset=${offset}` : ''
    const url = `https://api.airtable.com/v0/${config.BASE_ID}/Cities?view=Grid%20view&${offSet}`
    const response = await $fetch(url, options)
    if (response?.offset) {
      return [...response.records, ...fetchServices(response.offset)]
    }
    return response.records
  } catch (error) {
    console.log(error)
  }
}

export const getCities = async (locationId) => {
  if (!cities) {
    cities = await fetchCities()
  }
  return cities.find((city) => city.id === locationId)
}
