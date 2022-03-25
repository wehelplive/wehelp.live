<template>
    <div class="grid w-screen h-screen gap-y-2 border-2 border-white rounded-md">
        <div v-for="car in cars" :key="car.id" :style="{'background-color': car.fields.Color ? `${car.fields.Color}` : 'black'}" class="grid grid-cols-auto-fit items-center justify-items-center">
            <div class="flex text-3xl text-white">
                {{ car.fields.Name }}
            </div>
                <div class="flex text-3xl text-white">
                {{ car.fields.Year }}
            </div>
        </div>
    </div>
</template>

<script>
export default {
    async setup() {
        const cars = ref([])
        const config = useRuntimeConfig()
        const option = {
            headers: { 
                'Authorization': `Bearer ${config.API_KEY}`, 
            }
        }
        const { data } = await useFetch(`https://api.airtable.com/v0/${config.BASE_ID}/Cars?maxRecords=5&view=Grid%20view`, option)
        if(data._rawValue.records) cars.value = data._rawValue.records
        return { cars }
    },
}
</script>

