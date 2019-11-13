<template>
  <section>
    <div>
      <h1>Cash machine</h1>
      <div>
        <h4>Available Notes:</h4>
        <strong v-for="(note, index) in availableNotes" :key="index">
          {{ note }}{{ index !== availableNotes.length - 1 ? ',' : '' }}
        </strong>
      </div>
      <div class="action-wrapper">
        <InputControl v-model="entryCash"
                      :error="errors"
                      @change="resetErrors"
                      label="Amount"
                      type="number">
        </InputControl>

        <ButtonControl @click="calculateNotes"
                       :disabled=!entryCash>Submit
        </ButtonControl>
      </div>

      <div>
        <h4>Result:</h4>
        <div>{{ result }}</div>
      </div>
    </div>
  </section>
</template>


<script>
export default {
  name: 'CashView',

  data() {
    return {
      availableNotes: [100, 50, 20, 10],
      entryCash: null,
      errors: '',
      result: [],
    };
  },

  methods: {
    calculateNotes() {
      this.result = [];

      if (this.entryCash % 10 > 0) {
        this.errors = 'NoteUnavailableException';
      } else if (this.entryCash < 0) {
        this.errors = 'InvalidArgumentException';
      } else {
        let rest = this.entryCash;

        this.availableNotes.forEach((note) => {
          while (rest > 0 && rest - note >= 0) {
            rest -= note;
            this.result.push(note);
          }
        });
      }
    },

    resetErrors() {
      this.errors = '';
    },
  },
};
</script>

<style scoped>
  section {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
  }

  h4 {
    margin-bottom: 0;
  }

  .action-wrapper {
    margin-top: 20px;
    display: flex;
    align-items: baseline;
  }
</style>
