<script setup lang="ts">
defineOptions({
    name: 'LeeButton'
})

</script>

<template>
    <button class="lee-button">
        <slot></slot>
    </button>
</template>

<style  scoped>
.lee-button {
    background-color: pink;
    display: inline-block;
    color: #fff;
    }
</style>