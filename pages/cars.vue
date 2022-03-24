<template>
    <div class="list">
        <div v-for="car in cars" :key="car.id" :style="{'background-color': car.fields.Color ? `${car.fields.Color}` : 'black'}" class="list-item">
            <div class="name">
                {{ car.fields.Name }}
            </div>
                <div class="year">
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
<style scoped>
.list {
    display: grid;
    row-gap: 1em;
    width: 100vw;
    height: 100vh;
    border: 2px solid #ccc;
    border-radius: 10px;
}

.list-item {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
}

.name, .year {
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 2em;
    color: white;
}
</style>
