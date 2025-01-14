<template>
  <nav class="flex flex-col h-full" aria-label="Menú principal">
    <header
      class="flex items-center gap-2 p-4 hover:scale-[101%] transition cursor-pointer bg-gray-900"
    >
      <Logo :src="logoSrc" />
    </header>
    <div class="px-2 grow bg-gray-900 overflow-y-auto">
      <div class="grid gap-2 mt-4">
        <NuxtLink
          v-for="(item, index) in items"
          :key="index"
          :href="item.path"
          class="flex items-center gap-2 px-4 py-2 transition rounded cursor-pointer group relative"
          :aria-label="item.label || 'Sin título'"
          @click="menuClicked(item)"
        >
          <Icon size="24" :name="item.icon" class="text-white" />
          <span
            class="absolute bottom-0 left-0 w-full h-[2px] bg-red-500 scale-x-0 group-hover:scale-x-100 transition-transform duration-300"
            aria-hidden="true"
          />
          <span
            class="ml-2 text-sm font-medium text-gray-400 group-hover:text-red-500 transition duration-300 tracking-wide uppercase"
          >
            {{ item.label || "Sin título" }}
          </span>
        </NuxtLink>
        <button
          class="w-full py-2 mt-3 text-sm font-semibold text-white bg-red-600 rounded hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-600"
          @click="handleSubmit"
        >
          Cerrar sesión
        </button>
      </div>
    </div>
  </nav>
</template>

<script setup>
import logoSrc from "@/assets/image/netflix-logo.png";
const router = useRouter();
const { logout } = useAuth();
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

const handleSubmit = async () => {
  await logout();
  router.push("/");
};
</script>

<style scoped></style>
