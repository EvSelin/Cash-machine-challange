<template>
  <button :class="[{ 'is-loading': loading }, setVariant]"
          @click="$emit('click', $event)"
          :disabled="disabled"
          type="button">
    <slot />
  </button>
</template>

<script>
export default {
  name: 'Button',
  props: {
    loading: {
      type: Boolean,
      default: false,
    },

    disabled: {
      type: Boolean,
      default: false,
    },

    variant: {
      type: String,
      default: 'default',
      validator: val => ['default', 'flat'].indexOf(val) !== -1,
    },
  },

  computed: {
    setVariant() {
      return `control-variant--${this.variant}`;
    },
  },
};
</script>

<style lang="scss" scoped>
  button {
    font-size: 1rem;
    box-shadow: none;
    border-radius: 0;
    background: transparent;

    &:focus {
      outline: none;
    }
  }

  .control-variant {
    &--default {
      padding: 0.5rem;
      border: 1px solid grey;
    }
  }
</style>
