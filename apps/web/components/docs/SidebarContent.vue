<template>
  <h3 class="mb-4">
    <NuxtLink class="font-bold" to="/docs">Documentation</NuxtLink>
  </h3>
  <div v-for="category in categories" class="mb-4 last:mb-0">
    <h4 class="font-bold">{{ category }}</h4>
    <div class="flex flex-col">
      <NuxtLink
        v-for="document in documents[category]"
        class="relative pl-4 py-1 text-sm first:mt-2 border-l border-gray-300 dark:border-gray-700"
        :class="{
          'text-primary-500 hover:text-primary-500 !border-primary-500 font-semibold':
            document._path === route.path
        }"
        :to="document._path"
      >
        {{ document.title }}
      </NuxtLink>
    </div>
  </div>
</template>

<script setup>
const route = useRoute();

const { data } = await useAsyncData("docs-sidebar-content", () =>
  queryContent("docs").only(["title", "category", "hidden", "_path"]).find()
);

const documents = ref({});

for (const doc of data.value.filter(d => d.category && !d.hidden)) {
  if (!documents.value[doc.category]) {
    documents.value[doc.category] = [];
  }

  documents.value[doc.category].push(doc);
}

const categories = computed(() => Object.keys(documents.value));
</script>
