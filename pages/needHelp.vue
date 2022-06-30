<template>
  <div>
    <NeedHelpService
      v-if="
        !$route.query.service && !$route.query.location && !$route.query.contact
      "
    />
    <NeedHelpDuration
      v-if="
        $route.query.service &&
          !$route.query.duration &&
          !$route.query.location &&
          !$route.query.contact
      "
    />
    <NeedHelpLocation
      v-if="
        $route.query.service &&
          $route.query.duration &&
          !$route.query.location &&
          !$route.query.contact
      "
    />
    <NeedHelpContact
      v-if="
        $route.query.service &&
          $route.query.duration &&
          $route.query.location &&
          !$route.query.contact
      "
    />
  </div>
</template>
<script></script>
