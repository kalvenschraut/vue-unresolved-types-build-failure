<script setup lang="ts">
import type { Color } from "types";

interface Props {
  color: Color;
}
const { color = "red" } = defineProps<Props>();
</script>

<template>
  <div :style="`color: ${color}`">Some Text</div>
</template>
