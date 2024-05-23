<template>
  <div class="alert-box">
    <strong>This is an Error for Demo Purposes</strong>
    <i>
      <slot />
    </i>
  </div>
</template>

<style scoped>
.alert-box { background-color: red; color: #fff; }
.alert-box i {
  font-style: italic;
}
</style>