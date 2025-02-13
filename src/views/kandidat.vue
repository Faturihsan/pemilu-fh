<template>
  <navbar-component />
  <div class="header-section">
    <div
      style="padding: 50px"
      class="overflow-x-auto flex justify-center items-center"
    >
      <h1
        style="
          text-align: center;
          color: white;
          margin-bottom: 20px;
          margin-top: -10px;
        "
      >
        JUMLAH DPT
      </h1>
      <table class="w-full border-collapse text-white text-center">
        <thead>
          <tr class="bg-gray-800">
            <th style="width: 50px" class="border border-white px-4 py-2">
              No
            </th>
            <th style="width: 600px" class="border border-white px-4 py-2">
              Program Studi
            </th>
            <th style="width: 200px" class="border border-white px-4 py-2">
              Jumlah
            </th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(item, index) in data" :key="index" class="bg-gray-700">
            <td class="border border-white px-4 py-2">{{ index + 1 }}</td>
            <td class="border border-white px-4 py-2">
              {{ item.programStudi }}
            </td>
            <td class="border border-white px-4 py-2">{{ item.jumlah }}</td>
          </tr>
          <tr class="bg-gray-900 font-bold">
            <td class="border border-white px-4 py-2" colspan="2">Total</td>
            <td class="border border-white px-4 py-2">{{ totalJumlah }}</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
  <main class="container-global">
    <div style="margin-top: 40px" align="center">
      <h1 style="text-align: center">PEROLEHAN SUARA</h1>
      <hr style="width: 50%" />
      <p style="text-align: center; margin: -5px">
        Presentase Suara Masuk : 0.00%
      </p>
      <hr style="width: 50%" />
    </div>
    <div class="card" style="width: 18rem">
      <img src="..." class="card-img-top" alt="..." />
      <div class="card-body">
        <h5 class="card-title">Card title</h5>
        <p class="card-text">
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </p>
        <a href="#" class="btn btn-primary">Go somewhere</a>
      </div>
    </div>
  </main>
</template>

<script>
import navbarComponent from "../components/navbarComponent.vue";

export default {
  name: "Kandidat",
  components: {
    navbarComponent,
  },
  data() {
    return {
      data: [
        { programStudi: "S1-Ilmu Hukum", jumlah: 120 },
        { programStudi: "S1-HAN", jumlah: 95 },
      ],
    };
  },
  computed: {
    totalJumlah() {
      return this.data.reduce((sum, item) => sum + item.jumlah, 0);
    },
  },
};
</script>

<style scoped>
.header-section {
  background-color: #007bff;
  height: 100%;
  margin-top: 100px;
  display: flex;
  justify-content: center;
  align-items: center;
}

.table {
  border-color: white;
}
</style>
