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
    it("There is a 'Üye Girişi'", () => {
        expect(wrapper.text()).toContain("Üye Girişi");
    });
    it("There is a 'Fenerbahçe’ye'", () => {
        expect(wrapper.text()).toContain("Fenerbahçe’ye");
    });
    it("There is a 'Dair'", () => {
        expect(wrapper.text()).toContain("Dair");
    });
    it("There is a 'Beni Hatırla'", () => {
        expect(wrapper.text()).toContain("Beni Hatırla");
    });
    it("There is a 'Üye Girişi'", () => {
        expect(wrapper.text()).toContain("Üye Girişi");
    });
    it("There is a button of 'Şifreni mi unuttun?'", () => {
        expect(wrapper.text()).toContain("Şifreni mi unuttun?");
    });
    it("There is a button of 'OTURUM AÇ'", () => {
        expect(wrapper.text()).toContain("OTURUM AÇ");
    });
    it("There is a button of 'Henüz Üye Değil misin? Şimdi Katıl'", () => {
        expect(wrapper.text()).toContain("Henüz Üye Değil misin? Şimdi Katıl");
    });
});