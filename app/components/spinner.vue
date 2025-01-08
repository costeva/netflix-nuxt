<template>
  <div v-if="props.loading" :class="componentClasses">
    <Icon
      name="mdi:loading"
      class="animate-spin"
      :class="spinnerClasses"
      :style="{ fontSize: size }"
    />

    <slot>
      <div v-if="label" :class="labelClasses">
        {{ props.label }}
      </div>
    </slot>
  </div>
</template>

<script setup>
const props = defineProps({
  loading: {
    type: Boolean,
    default: true,
  },
  label: {
    type: String,
    default: "",
  },
  size: {
    type: String,
    default: "3rem",
  },
  color: {
    type: String,
    default: "blue-500",
    textColor: {
      type: String,
      default: "gray-700",
    },
    align: {
      type: String,
      default: "top",
    },
    borderWidth: {
      type: String,
      default: "4px",
    },
  },
});

const spinnerClasses = computed(() => [
  "rounded-full border-t-transparent animate-spin",
  `border-${props.color}`,
]);

const componentClasses = computed(() => [
  "flex",
  props.align === "top" || props.align === "bottom" ? "flex-col" : "flex-row",
  props.align === "bottom" ? "flex-col-reverse" : "",
  props.align === "right" ? "flex-row-reverse" : "",
  "justify-center items-center",
]);

const labelClasses = computed(() => [
  "mt-2 text-center",
  `text-${props.textColor}`,
  props.align === "bottom" ? "mb-2" : "",
  props.align === "left" ? "ml-2" : "",
  props.align === "right" ? "mr-2" : "",
]);
</script>

<style scoped></style>
