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
    const url = `https://api.airtable.com/v0/${config.BASE_ID}/Services?view=Everything&${offSet}`
    const response = await $fetch(url, options)

    if (response?.offset) {
      const nextResponse = await fetchServices(response.offset)
      return await getLocation([...response.records, ...nextResponse])
    }
    return await getLocation(response.records)
  } catch (error) {
    console.log(error)
    return []
  }
}

const getLocation = (data) => {
  let records = data
  records = Promise.all(
    records.map(async (record) => {
      if (
        record.fields?.Location !== undefined &&
        record.fields.Location.length > 0
      ) {
        const location = await getCities(record.fields?.Location[0])
        return {
          ...record,
          fields: {
            ...record.fields,
            Location: location,
          },
        }
      } else {
        return record
      }
    })
  )
  return records
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
      const nextResponse = await fetchServices(response.offset)
      return [...response.records, ...nextResponse]
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

export const fetchGuests = async (offset = null) => {
  try {
    const config = useRuntimeConfig()
    const options = {
      headers: {
        Authorization: `Bearer ${config.API_KEY}`,
      },
    }
    const offSet = offset ? `offset=${offset}` : ''
    const url = `https://api.airtable.com/v0/${config.BASE_ID}/Guests?&${offSet}`
    const response = await $fetch(url, options)
    if (response?.offset) {
      const nextResponse = await fetchGuests(response.offset)
      return [...response.records, ...nextResponse]
    }
    return response.records
  } catch (error) {
    console.log(error)
  }
}
