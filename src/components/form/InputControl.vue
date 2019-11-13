<template>
  <div :class="['control-wrapper', { 'is-invalid': error }]">
    <div :class="['control', setVariant ]">
      <span v-if="label"
            v-text="label"
            class="label">
      </span>

      <input @input="handleInput"
             @change="handleChange"
             @blur="$emit('blur')"
             @focus="$emit('focus')"
             :type="type">
    </div>

    <div v-if="error"
         v-text="error"
         class="error-output">
    </div>
  </div>
</template>

<script>

export default {
  name: 'InputField',
  props: {
    variant: {
      type: String,
      default: 'default',
      validator: val => ['default', 'flat'].indexOf(val) !== -1,
    },

    label: {
      type: String,
      default: 'label',
    },

    error: {
      type: String,
      default: '',
    },

    type: {
      type: String,
      default: '',
    },
  },

  computed: {
    setVariant() {
      return `control-variant--${this.variant}`;
    },
  },

  methods: {
    handleInput(e) {
      this.$emit('input', e.target.value);
    },

    handleChange(e) {
      this.$emit('change', e.target.value);
    },
  },
};
</script>

<style lang="scss" scoped>
  .control-wrapper {
    display: inline-block;
    margin-top: 10px;

    &.is-invalid {
      .label {
        color: red;
      }
    }

    .error-output {
      font-size: 0.75rem;
      color: red;
    }
  }

  .control {
    display: inline-block;
    position: relative;

    .label {
      position: absolute;
      font-size: 0.75rem;
      top: calc(0% - 8px);
      left: 10px;
      background-color: #fff;
      padding: 0 0.25rem;
    }

    input {
      background: transparent;
      box-shadow: none;
      font-size: 1em;

      &:focus {
        outline: 0;
      }
    }
  }

  .control-variant {
    &--default {
      input {
        padding: 0.5rem;
        border: 1px solid gray;
      }
    }
  }
</style>
