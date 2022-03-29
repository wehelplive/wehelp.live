<template>
  <div>
    <div>Cars</div>

    <Suspense>
      <template #default>
        <pre>{{ cars }}
            <div class="bg-white">
                <div class="mx-auto py-12 px-4 max-w-7xl sm:px-6 lg:px-8 lg:py-24">
                    <div class="space-y-12">
                    <ul role="list" class="space-y-12 sm:grid sm:grid-cols-2 sm:gap-x-6 sm:gap-y-12 sm:space-y-0 lg:grid-cols-3 lg:gap-x-8">
                        <li v-for="record in cars.records" :key="record">
                        <div class="space-y-4">
                            <div class="aspect-w-3 aspect-h-2">
                                <!-- TBD: Fix src url -->
                            <img class="object-cover shadow-lg rounded-lg" src="${{record.fields.Attachments.url}}" alt="">
                            </div>

                            <div class="space-y-2">
                                <div class="text-lg leading-6 font-medium space-y-1">
                                    <h3>{{record.fields.Name}}</h3>
                                    <p class="text-indigo-600">{{record.fields.Color}}</p>
                                    <p class="text-indigo-600">{{record.fields.Model[0]}}</p>
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
      <template #fallback>
        <div>Loading...</div>
      </template>
    </Suspense>
  </div>
</template>

<script>
// TBD: Use environment variables.
export default {
  async setup() {
    const cars = await $fetch(
      'https://api.airtable.com/v0/appcCvlO2K4dtAons/Cars?api_key=keydEXl97LFVx03hM'
    )
    return { cars }
  },
}
</script>
