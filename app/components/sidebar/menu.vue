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
          @click="menuClicked(item)"
          class="flex items-center justify-center gap-2 px-2 py-1 transition rounded cursor-pointer group relative"
        >
          <Icon size="40" :name="item.icon" class="text-white" />
          <span
            class="absolute bottom-0 left-0 w-full h-[2px] bg-red-500 scale-x-0 group-hover:scale-x-100 transition-transform duration-300"
          ></span>
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
  console.log("Emit evento: menu-clicked", menuItem);
  emit("menu-clicked", menuItem);
};
</script>

<style scoped></style>
