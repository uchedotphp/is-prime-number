<template>
  <div class="box">
    Input Range of Prime set here:
    <el-input-number v-model="range" :min="10"></el-input-number>

    <table style="width:100%">
      <caption>
        Monthly savings
      </caption>
      <tr>
        <th></th>
        <th v-for="primes in displayPrimeValues" :key="primes">{{ primes }}</th>
      </tr>
      <tr v-for="primes in displayPrimeValues" :key="primes">
        <td>{{ primes }}</td>
        <td v-for="primes in displayPrimeValues" :key="primes">
          {{ primes }}
        </td>
      </tr>
    </table>
  </div>
</template>

<script>
export default {
  name: "IsPrimeComponent",
  data() {
    return {
      range: 10
    };
  },
  methods: {
    isPrime(n) {
      const values = [];
      for (let i = 1, max = Math.sqrt(n); i <= max; i++) {
        if (n % i === 0) {
          values.push(i, n / i);
        }
      }
      values.sort((a, b) => a - b);
      return values.length === 2;
    }
  },
  computed: {
    displayPrimeValues() {
      const theRange = [];
      const primeNumbers = [];
      theRange.length = this.range;
      for (let index = 1; index <= theRange.length; index++) {
        if (this.isPrime(index)) {
          primeNumbers.push(index);
        }
      }
      return primeNumbers;
    }
  }
};
</script>

<style lang="css" scoped>
.box {
  width: 80vw;
  margin: 0 auto;
}

table,
th,
td {
  border: 1px solid black;
  border-collapse: collapse;
}
th,
td {
  padding: 5px;
  text-align: left;
}
</style>