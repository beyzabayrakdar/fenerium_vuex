<template>
  <div>
    <HeaderMenu />
    <Nuxt />
    <Footer />
  </div>
</template>

<script>
import HeaderMenu from "@/components/HeaderMenu";
import Footer from "@/components/Footer";
import firebase from "firebase";
import Cookies from "js-cookie";

export default {
  components: {
    HeaderMenu,
    Footer,
  },
  data() {
    return {
      loggedIn: false,
    };
  },
  mounted() {
    this.setupFirebase();
  },
  asyncData() {},
  methods: {
    setupFirebase() {
      firebase.auth().onAuthStateChanged((user) => {
        if (user) {
          // User is signed in.
          console.log("signed in");
          this.$fire.auth.currentUser
            .getIdToken(true)
            .then((token) => Cookies.set("access_token", token));
          this.loggedIn = true;
        } else {
          Cookies.remove("access_token");
          // if (Cookies.set('access_token', 'blah')) {
          // }
          // No user is signed in.
          this.loggedIn = false;
          console.log("signed out", this.loggedIn);
        }
      });
    },
  },
};
</script>

<style>
html {
  font-family: "Source Sans Pro", -apple-system, BlinkMacSystemFont, "Segoe UI",
    Roboto, "Helvetica Neue", Arial, sans-serif;
  font-size: 16px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
}

*,
*::before,
*::after {
  box-sizing: border-box;
  margin: 0;
}

.button--green {
  display: inline-block;
  border-radius: 4px;
  border: 1px solid #3b8070;
  color: #3b8070;
  text-decoration: none;
  padding: 10px 30px;
}

.button--green:hover {
  color: #fff;
  background-color: #3b8070;
}

.button--grey {
  display: inline-block;
  border-radius: 4px;
  border: 1px solid #35495e;
  color: #35495e;
  text-decoration: none;
  padding: 10px 30px;
  margin-left: 15px;
}

.button--grey:hover {
  color: #fff;
  background-color: #35495e;
}
</style>
