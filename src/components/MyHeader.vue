<!-- myheader.vue -->
<script>
export default {
  props: ['title'],
  inject:['theme']
}
</script>

<template>
  <h4>{{ title }}</h4>
  <p>
    <slot name="subtitle"></slot>
  </p>

  <p>Inject: {{ this.theme }}</p>

</template>