<template>
  <div class="box">
    Input Range of Prime set here:
    <el-input-number v-model="range" :min="10"></el-input-number>
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
  computed: {
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