<script setup lang="ts">
defineOptions({
    name: 'LButton'
})

</script>

<template>
    <button class="l-button">
        <slot></slot>
    </button>
</template>

<style lang="scss" scoped>
.l-button {
    background-color: pink;
    display: inline-block;
    padding: 6px 12px;
    margin-bottom: 0;
    font-size: 14px;
    font-weight: 400;
    line-height: 1.42857143;
    text-align: center;
    white-space: nowrap;
    vertical-align: middle;
    -ms-touch-action: manipulation;
    touch-action: manipulation;
    cursor: pointer;
    }