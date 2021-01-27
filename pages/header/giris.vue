<template>
  <div
    class="modal form-modal fade show"
    id="loginModal"
    data-toggle="stepModal"
    tabindex="-1"
    role="dialog"
    style="padding-right: 17px; display: block"
  >
    <div class="modal-dialog modal-dialog-scrollable" role="document">
      <div href="/" class="modal-content">
        <button type="button" class="btn-close" data-dismiss="modal" aria-label="Close">
          <i class="fa fa-times" aria-hidden="true"></i>
        </button>

        <div class="tab-content">
          <div id="signIn" class="tab-pane active">
            <div class="modal-header">
              <h5 class="modal-title">Üye Girişi</h5>
            </div>
            <div class="modal-body">
              <div class="desc">
                <p>
                  <strong>Fenerbahçe’ye</strong> Dair <br />
                  Her Şey İçin, Hesabın Burada
                </p>
              </div>

              <form
                action="/"
                class="primary-form login"
                data-toggle="loginForm"
                method="post"
                novalidate="novalidate"
                @submit="pressed"
              >
                <input
                  name="__RequestVerificationToken"
                  type="hidden"
                  value="Z8RVjXduuKlimcSOebjbE5-ikOA_Ev12FXLACtk5b9nqJr_1m96pQJDCs72Ih_sQ0eE3EhgOH_zQxwZnHa_KQOWi4jjRCUHmQZk8ldMS8AU1"
                />
                <div class="form-header">
                  <div class="form-group rendered">
                    <input
                      class="form-control requiredEmail"
                      type="email"
                      name="email"
                      data-msg-required="* Lütfen bu alanı doldurun."
                      data-msg-email="* Lütfen geçerli bir e-posta adresi girin."
                      placeholder="E-Posta"
                      v-model="email"
                    />
                  </div>
                  <div class="form-group rendered">
                    <input
                      class="form-control required"
                      type="password"
                      name="password"
                      data-msg-required="* Lütfen bu alanı doldurun."
                      placeholder="Şifre"
                      v-model="password"
                    />
                  </div>
                </div>
                <div class="form-body">
                  <div class="form-group-wrapper">
                    <div class="form-group active success rendered">
                      <label class="check-wrapper">
                        <div class="icheckbox_primary" style="position: relative">
                          <input
                            class="primary-icheck"
                            type="checkbox"
                            name="rememberMe"
                            style="position: absolute; opacity: 0"
                          /><ins
                            class="iCheck-helper"
                            style="
                              position: absolute;
                              top: 0%;
                              left: 0%;
                              display: block;
                              width: 100%;
                              height: 100%;
                              margin: 0px;
                              padding: 0px;
                              background: rgb(255, 255, 255);
                              border: 0px;
                              opacity: 0;
                            "
                          ></ins>
                        </div>
                        <span class="text">Beni Hatırla</span>
                      </label>
                    </div>
                    <nav class="nav">
                      <a
                        href="#passwordReminder"
                        data-toggle="tab"
                        class="text forget-password-link"
                        title=""
                        >Şifreni mi unuttun?</a
                      >
                    </nav>
                  </div>
                  <div class="form-group g-recaptcha-wrap rendered">
                    <div data-custom-captcha="">
                      <div style="width: 304px; height: 78px">
                        <div>
                          <iframe
                            src="https://www.google.com/recaptcha/api2/anchor?ar=1&amp;k=6Levt9IUAAAAAP2SYIqmdEt-_anP6mc3jmz-ZRIs&amp;co=aHR0cHM6Ly9mZW5lcml1bS5jb206NDQz&amp;hl=tr&amp;v=UFwvoDBMjc8LiYc1DKXiAomK&amp;size=normal&amp;cb=h7hve215w06n"
                            width="304"
                            height="78"
                            role="presentation"
                            name="a-w5n5ta7x5ixg"
                            sandbox="allow-forms allow-popups allow-same-origin allow-scripts allow-top-navigation allow-modals allow-popups-to-escape-sandbox"
                          ></iframe>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <button href="/" @click="login" type="submit" class="btn bg-cobalt text-white text-bold">
                  OTURUM AÇ
                </button>
              </form>
            </div>
            <div class="modal-footer">
              <nav class="nav">
                <a href="/kaydol" data-toggle="tab" class="modal-link">
                  <span>Henüz Üye Değil misin?</span> Şimdi Katıl
                </a>
              </nav>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      email: '',
      password: '',
      error: ''
    }
  },
  methods: {
    pressed(e) {
      e.preventDefault();
      this.$fire.auth
        .signInWithEmailAndPassword(this.email, this.password)
        .then(data => {
          console.log(data)
          this.$router.replace({ name: '/' })
        })
        .catch(error => {
          this.error = error
        })
    },
    login(e) {
      e.preventDefault();
      this.$fire.auth
        .signInWithEmailAndPassword(this.email, this.password)
        .then((res) => {
          console.log("Giriş başarılı");
          this.$store.commit("user/setUser", this.email);
          setTimeout(() => {
            window.location.href = "/";
          }, 1500);

          this.error = false;
          this.success = true;
        })
        .catch((err) => {
          console.log("Giriş başarısız");
          this.error = true;
        });
    },
  }
}
</script>
