<template>
  <UCard>
    <template #header>
      <h3 class="!mt-0">In This Section</h3>
    </template>
    <div class="flex flex-col">
      <NuxtLink
        v-for="page in pages"
        class="flex pl-2 py-0.5 border-l border-gray-300 dark:border-gray-700"
        :to="page._path"
      >
        {{ page.title }}
      </NuxtLink>
    </div>
  </UCard>
</template>

<script setup>
const props = defineProps({
  mod: String
});

const pages = ref([]);

const { data } = await useAsyncData(props.mod + "-docs-listing", () =>
  queryContent("docs", props.mod).only(["title", "_path"]).find()
);

pages.value = data.value.slice(1);
</script>
