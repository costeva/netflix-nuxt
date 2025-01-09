<template>
  <div>
    <div
      class="fixed top-0 left-0 right-0 z-50 flex items-center justify-between p-4 bg-gray-900 lg:hidden"
    >
      <Logo :src="logoSrc" />
      <button
        class="z-50 cursor-pointer focus:outline-none focus:ring-2 focus:ring-red-500"
        aria-label="Abrir menú"
        @click="open = true"
      >
        <Icon name="stash:burger-classic-duotone" size="30" />
      </button>
    </div>

    <div v-if="open" class="fixed inset-0 z-50 flex">
      <div
        class="fixed inset-0 bg-black bg-opacity-50"
        @click="open = false"
      ></div>

      <div class="relative w-64 bg-gray-900 h-full shadow-lg">
        <div class="flex justify-end p-4">
          <button
            class="absolute z-50 cursor-pointer right-4 top-4 focus:outline-none focus:ring-2 focus:ring-red-500"
            aria-label="Cerrar menú"
            @click="open = false"
          >
            <Icon name="material-symbols:close" size="30" />
          </button>
        </div>

        <SidebarMenu @menu-clicked="handleMenuClick" />
      </div>
    </div>

    <div class="hidden lg:flex w-[140px] h-screen flex-col justify-between">
      <SidebarMenu />
    </div>
  </div>
</template>

<script setup>
import logoSrc from "@/assets/image/netflix-logo.png";

const open = ref(false);

const handleMenuClick = () => {
  open.value = false;
};
</script>

<style scoped>
body {
  padding-top: 4rem;
}
</style>
