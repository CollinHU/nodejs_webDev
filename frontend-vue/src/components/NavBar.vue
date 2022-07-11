<template>
  <div>
    <b-navbar toggleable="md" type="dark" fixed="top" style="background-color:#054a83fd;">
      <b-navbar-brand :to="{ path: '/' }">
        <img src="../assets/images/companyLogo.png" width="45" alt="Logo" />
        源牌
      </b-navbar-brand>

      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

      <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav>
          <b-nav-item :to="{ path: '/' }" data-cy="nav-bar-home" link-classes="text-light">主页 </b-nav-item>
          <b-nav-item :to="{ path: '/todo' }" data-cy="nav-bar-todo" link-classes="text-light">Todo </b-nav-item>
          <b-nav-item :to="{ path: '/another-page' }" data-cy="nav-bar-another-page" link-classes="text-light">Another
            Page </b-nav-item>
          <b-nav-item-dropdown data-cy="nav-bar-sample-page" text="Sample Page" right link-classes="text-dark">
            <b-dropdown-item :to="{ path: '/sample-page/1' }" data-cy="nav-bar-sample-page-1">Page 1</b-dropdown-item>
            <b-dropdown-item :to="{ path: '/sample-page/2' }" data-cy="nav-bar-sample-page-2">Page 2</b-dropdown-item>
          </b-nav-item-dropdown>
        </b-navbar-nav>

        <!-- Right aligned nav items -->

        <b-navbar-nav class="ml-auto" v-if="isLoggedIn() === false">
          <b-nav-item :to="{ path: '/login' }" data-cy="nav-bar-login" link-classes="btn btn-light text-dark">登录
          </b-nav-item>
          <!--<b-nav-item :to="{ path: '/register' }" data-cy="nav-bar-register"
            link-classes="btn btn-primary mx-1 text-dark">Sign up</b-nav-item>
            -->
        </b-navbar-nav>
        <b-navbar-nav class="ml-auto" v-if="isLoggedIn() === true">
          <b-nav-item v-if="user" :to="{ path: '/account' }" data-cy="nav-bar-welcome-text"
            link-classes="btn btn-link text-light">欢迎您, {{ user.first_name }}</b-nav-item>
          <b-nav-item :to="{ path: '/account' }" data-cy="nav-bar-account" link-classes="btn btn-light text-dark">
            我的账户</b-nav-item>
          <b-nav-item :to="{ path: '/logout' }" data-cy="nav-bar-logout" link-classes="btn btn-danger text-light">
            登出</b-nav-item>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
  </div>
</template>

<script>
import { mapGetters, mapState } from 'vuex';

export default {
  name: 'NavBar',
  computed: {
    ...mapState('auth', ['user']),
    ...mapGetters('auth', ['isLoggedIn'])
  }
};
</script>
