<template>
  <div>
    <client-only>
      <div>Cars</div>

      <Suspense>
        <template #default>
          <pre>
            <div class="bg-white">
                <div class="mx-auto py-12 px-4 max-w-7xl sm:px-6 lg:px-8 lg:py-24">
                    <div class="space-y-12">
                    <ul card="list" class="space-y-12 sm:grid sm:grid-cols-2 sm:gap-x-6 sm:gap-y-12 sm:space-y-0 lg:grid-cols-3 lg:gap-x-8">
                        <li v-for="record in cars.records" :key="record.id">
                        <div class="space-y-4">
                            <div class="aspect-w-3 aspect-h-2">
                            <img class="object-cover shadow-lg rounded-lg" v-bind:src='record.fields.Attachments[0].url' alt="">
                            </div>
                            <div class="space-y-1">
                                <div class="text-lg leading-6 font-medium space-y-1">
                                    <h3>{{record.fields.Name}}</h3>
                                    <p class="text-indigo-600">Color: {{record.fields.Color}}</p>
                                    <p class="text-indigo-600">Model: {{record.fields.Model[0]}}</p>
                                </div>
                            </div>
                        </div>
                        </li>
                    </ul>
                    </div>
                </div>
            </div>  
        </pre>
        </template>
      </Suspense>
    </client-only>
  </div>
</template>

<script>
export default {
  async setup() {
    const config = useRuntimeConfig()
    const cars = await $fetch(
      `https://api.airtable.com/v0/${config.BASE_ID}/Cars?api_key=${config.API_KEY}`
    )
    return { cars }
  },
}
</script>
