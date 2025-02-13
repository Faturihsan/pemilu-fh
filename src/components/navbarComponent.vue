<template>
  <nav class="navbar navbar-expand-lg">
    <div class="container-fluid">
      <a class="navbar-brand" href="#">PPU FH-UH</a>
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav mx-auto text-center">
          <RouterLink
            to="/"
            class="nav-item nav-link"
            active-class="active"
            exact-active-class="active"
          >
            Kandidiat
          </RouterLink>
          <RouterLink
            to="/dpt"
            class="nav-item nav-link"
            active-class="active"
            exact-active-class="active"
          >
            DPT
          </RouterLink>
          <RouterLink
            to="/perolehan_suara"
            class="nav-item nav-link"
            active-class="active"
            exact-active-class="active"
          >
            Perolehan Suara
          </RouterLink>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  name: "navbarComponent",
};
</script>

<style scoped>
.navbar {
  background-color: #007bff !important;
  padding: 10px;
  display: flex;
  align-items: center;
}

.navbar-brand {
  color: white !important;
  font-weight: bold;
  margin-bottom: 5px;
}

.nav-link {
  color: white !important;
  font-weight: normal;
  margin-bottom: 5px;
  transition: color 0.3s ease-in-out, font-weight 0.1s ease-in-out;
}

.nav-link:hover {
  font-weight: bold;
  color: #c9c9c9 !important;
}

.nav-link.active {
  font-weight: bold !important;
  color: #fcc01c !important;
  transition: color 0.3s ease-in-out;
}

.navbar-toggler {
  border: 1px solid white;
}

.navbar-toggler-icon {
  filter: invert(1);
}

@media (max-width: 768px) {
  .navbar-nav {
    flex-direction: column;
    text-align: center;
  }

  .navbar-nav .nav-item {
    margin-bottom: 10px;
  }
}
</style>
