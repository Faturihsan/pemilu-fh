<template>
  <navbar-component />
  <main class="container-global">
    <div class="position-search">
      <form class="d-flex custome-icon-search" role="search" @submit.prevent>
        <input
          class="search-control"
          type="search"
          v-model="searchQuery"
          placeholder="Search..."
          aria-label="Search"
        />
        <img src="../assets/Search.svg" class="search-icon" alt="Search Icon" />
      </form>
    </div>
    <h1>DPT</h1>
  </main>
</template>

<script>
import navbarComponent from "../components/navbarComponent.vue";
export default {
  name: "Dpt",
  components: {
    navbarComponent,
  },
};
</script>

<style scoped>
.position-search {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 20px;
  margin-left: 3px;
  gap: 20px;
  flex-wrap: nowrap; /* Tetap dalam satu baris */
  width: 100%; /* Pastikan container penuh */
}

.search-control {
  color: #000000;
  background: #ffffff;
  height: 42px;
  border-radius: 10px;
  padding: 5px 20px 5px 40px;
  font-size: 16px;
  border: 1px solid transparent;
  transition: border-color 0.3s ease, width 0.3s ease;
  box-shadow: 0px 0px 15px rgba(0, 0, 0, 0.15), 0px 0px 10px rgba(0, 0, 0, 0.1);
  width: 100%;
}

.search-control:focus {
  border: none;
  outline: none;
  border-color: #b0c4de;
  box-shadow: 0 0 8px #b0c4de;
  background: #f4f6f5;
}

.search-icon {
  position: absolute;
  left: 10px;
  top: 50%;
  transform: translateY(-50%);
  width: 20px;
  height: 20px;
  color: #000000;
  cursor: pointer;
  transition: width 0.3s ease, height 0.3s ease;
}

.custome-icon-search:focus-within .search-icon {
  filter: brightness(0);
  width: 22px;
  height: 22px;
}

.custome-icon-search {
  position: relative;
  width: 100%;
}

@media screen and (max-width: 768px) {
  .position-search {
    gap: 10px; /* Kurangi jarak agar tetap dalam satu baris */
    flex-wrap: nowrap; /* Pastikan tetap satu baris */
    width: 100%;
  }

  .custome-icon-search,
  .search-control {
    flex: 1; /* Biarkan elemen menyesuaikan diri */
    min-width: 200px; /* Pastikan tidak terlalu kecil */
    max-width: 100%; /* Tidak melebihi container */
    width: 100%; /* Ambil seluruh ruang yang tersedia */
    box-sizing: border-box; /* Menambahkan box-sizing untuk menghitung padding dan margin */
  }
}

@media screen and (max-width: 480px) {
  .custome-icon-search,
  .search-control {
    min-width: 165px; /* Pastikan tetap terlihat */
    max-width: 100%;
  }

  .search-icon {
    width: 16px; /* Kurangi ukuran ikon di mobile */
    height: 16px;
  }
}
</style>
