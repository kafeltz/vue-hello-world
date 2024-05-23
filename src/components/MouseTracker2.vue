<script setup>
import { useMouse } from './mouse.js'

const { x, y } = useMouse()
</script>

<template>Mouse position(2) is at: {{ x }}, {{ y }}</template>