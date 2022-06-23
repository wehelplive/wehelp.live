/* global useRuntimeConfig, $fetch */
let cities = null

export const fetchServices = async (offset = null, filter = {}) => {
  try {
    const config = useRuntimeConfig()
    const options = {
      headers: {
        Authorization: `Bearer ${config.API_KEY}`,
      },
    }
    const offSet = offset ? `offset=${offset}` : ''
    const args = []
    for (const [key, val] of Object.entries(filter)) {
      const name = key.charAt(0).toUpperCase() + key.slice(1)
      const value =
        val
          .toLowerCase()
          .charAt(0)
          .toUpperCase() + val.slice(1)
      const array = ['Services'].includes(name)
      if (val) args.push({ name, value, isArray: array })
    }
    const param = args.length > 0 ? filterByFieldName(args) : ''
    console.log(param)
    const url = `https://api.airtable.com/v0/${config.BASE_ID}/Services?${param}&view=Accomodations&${offSet}`
    const response = await $fetch(url, options)

    if (response?.offset) {
      const nextResponse = await fetchServices(response.offset)
      return [...response.records, ...nextResponse]
    }
    return response.records
  } catch (error) {
    console.log(error)
    return []
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

const filterByFieldName = (fields = []) => {
  let formula
  if (fields.length === 1) {
    if (fields[0].isArray) {
      return `filterByFormula=SEARCH(%22${fields[0].value}%22%2C+ARRAYJOIN(%7B${fields[0].name}%7D))`
    } else {
      return `filterByFormula=LOWER(${fields[0].name})+%3D+LOWER('${fields[0].value}')`
    }
  }

  fields.forEach((field, index) => {
    if (index === 0) {
      formula = 'filterByFormula='
      if (field.isArray) {
        formula += `OR(SEARCH(%22${field.value}%22%2C+ARRAYJOIN(%7B${field.name}%7D))`
      } else {
        formula += `OR(LOWER(${field.name})+%3D+LOWER('${field.value}')`
      }
    } else if (field.isArray) {
      formula += `+SEARCH(%22${field.value}%22%2C+ARRAYJOIN(%7B${field.name}%7D))`
    } else {
      formula += `+LOWER(${field.name})+%3D+LOWER('${field.value}')`
    }
    const last = fields.length - 1
    if (index !== last) {
      formula += '%2C'
    } else {
      formula += ')'
    }
  })
  return formula
}
