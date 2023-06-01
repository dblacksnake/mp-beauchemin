<template>
    <img class='imgDisplay' :src="content?.src" :alt="content?.alt">
</template>

<script setup lang="ts">
defineProps({
    content: Object
})
</script>
