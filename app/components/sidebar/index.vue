<template>
  <div>
    <div
      class="z-50 flex items-center justify-between w-full h-full p-4 lg:hidden"
    >
      <Logo :src="logoSrc" />
      <Icon
        class="z-50 cursor-pointer left-2 top-2"
        size="30"
        name="stash:burger-classic-duotone"
        @click="open = true"
      />
      <div
        v-if="open"
        class="fixed top-0 left-0 z-[999] w-50 h-screen bg-black"
      >
        <Icon
          class="absolute z-50 cursor-pointer right-4 top-4"
          size="30"
          name="material-symbols:close"
          @click="open = false"
        />

        <SidebarMenu @menu-clicked="handleMenuClick" />
      </div>
    </div>

    <div class="hidden lg:flex w-[110px] h-screen flex-col justify-between">
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

<style scoped></style>
