<template>
  <div>
    <header
      class="flex items-center gap-2 p-4 hover:scale-[101%] transition cursor-pointer"
    >
      <Logo :src="logoSrc" />
    </header>
    <div class="px-4 grow">
      <div class="grid gap-2">
        <NuxtLink
          v-for="(item, index) in items"
          :key="index"
          :href="item.path"
          class="flex items-center justify-center gap-2 px-2 py-1 transition rounded cursor-pointer group relative"
          @click="menuClicked(item)"
        >
          <Icon size="40" :name="item.icon" class="text-white" />
          <span
            class="absolute bottom-0 left-0 w-full h-[2px] bg-red-500 scale-x-0 group-hover:scale-x-100 transition-transform duration-300"
          />
          <span
            class="text-xs font-medium text-gray-400 group-hover:text-red-500 transition duration-300 tracking-wide uppercase"
          >
            {{ item.label || "Sin título" }}
          </span>
        </NuxtLink>
      </div>
    </div>
  </div>
</template>

<script setup>
import logoSrc from "@/assets/image/netflix-logo.png";
const items = ref([
  {
    title: "Search",
    path: "/search",
    icon: "mdi:magnify",
    label: "Search",
  },
  {
    title: "Home",
    path: "/home",
    icon: "mdi:home-outline",
    label: "Home",
  },
]);

const emit = defineEmits(["menu-clicked"]);

const menuClicked = (menuItem) => {
  emit("menu-clicked", menuItem);
};
</script>

<style scoped></style>
