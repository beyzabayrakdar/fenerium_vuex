import { mount, config } from "@vue/test-utils";
import Login from "../components/Login.vue";

config.mocks["$fire"] = {
    auth: {
        signInWithEmailAndPassword: () => {
            return Promise.resolve({});
        }
    }
};
config.mocks["$store"] = {
    getters: {
        ["user/getUser"]: "this getter was mocked"
    },
    commit: () => {
        return;
    }
};

describe("Login Tests", () => {
    const wrapper = mount(Login);
    it("Successfull Login", () => {
        let loginButton = wrapper.find("button.btn-success");
        loginButton.trigger("click").then(() => {
            expect(wrapper.text()).toContain("Giriş Başarılı");
        });
    });
    it("There is a button of 'Şifremi Unuttum'", () => {
        expect(wrapper.text()).toContain("Şifremi Unuttum");
    });
    it("There is a button of 'Henüz Üye Değil misin? Şimdi Katıl'", () => {
        expect(wrapper.text()).toContain("Henüz Üye Değil misin? Şimdi Katıl");
    });
});