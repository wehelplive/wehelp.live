<template>
 <h1> {{ data.cars }} </h1>
</template>

<script setup>
const { data } = await useFetch('/api/cars')
</script>

<script>
// async function getCars() {
//     const apiKey = 'keySAqbxhxOPTQxya'
//     const apiUrl = `https://api.airtable.com/v0/app5FuD1YnKgDpJJz/Cars?api_key=${apiKey}`
//     try {
//         const response = await fetch(apiUrl);
//         const data = await response.json();  
//         console.log(data);
//     } catch (error) {
        
//     }
// }
// getCars();
</script>
