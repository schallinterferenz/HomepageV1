<template>
  <div>
      <b-navbar toggleable="lg" type="dark" variant="info" id="navBarMain">
        <b-navbar-brand
          href="#"
          style="color: white !important; font-size: 28px !important;"
        >SIR DIGITAL MEDIA</b-navbar-brand>

        <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
        <b-collapse id="nav-collapse" is-nav>
          <b-navbar-nav>
            <b-nav-item href="#">HOME</b-nav-item>
            <b-nav-item ><router-link to="/labels">LABELS</router-link></b-nav-item>
            <b-nav-item href="#">SHOP</b-nav-item>
            <b-nav-item href="#">IMPRESSUM</b-nav-item>
          </b-navbar-nav>
        </b-collapse>
      </b-navbar>
    </div>
</template>

<script>
export default {
    name : "NavBarMain"
}
</script>

<style>

</style>