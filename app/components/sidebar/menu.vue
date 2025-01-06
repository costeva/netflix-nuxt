<template>
  <div>
    <header
      class="flex items-center gap-2 p-4 hover:scale-[101%] transition cursor-pointer"
    >
      <Logo />
    </header>
    <div class="px-4 grow">
      <div class="grid gap-2">
        <NuxtLink
          v-for="(item, index) in items"
          :key="index"
          :href="item.path"
          class="flex items-center gap-2 px-2 py-1 transition rounded cursor-pointer hover:bg-neutral-100"
        >
          <Icon size="40" :name="item.icon" color="black" />
        </NuxtLink>
      </div>
    </div>
  </div>
</template>

<script setup>
import { NuxtLink } from "#components";

const items = ref([
  {
    title: "Overview",
    path: "/",
    icon: "mdi:magnify",
  },
  {
    title: "Transactions",
    path: "/transactions",
    icon: "mdi:home-outline",
  },
  {
    title: "Account",
    path: "/",
    icon: "mdi:trending-up",
  },
  {
    title: "Contacts",
    path: "/",
    icon: "mdi:television",
  },
  {
    title: "Settings",
    path: "/",
    icon: "mdi:movie-outline",
  },
]);
</script>

<style scoped></style>
