<template>
  <button @click="submit">Button</button>
</template>

<script>
export default {
  methods: {
    submit () {
      this.$emit('register-success', { foo: 'bar' })
    }
  }
}
</script>
