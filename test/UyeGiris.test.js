import { mount, config } from "@vue/test-utils";
import giris from "../pages/header/giris.vue";

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
    const wrapper = mount(giris);
    it("There is a button of 'OTURUM AÇ'", () => {
        expect(wrapper.text()).toContain("OTURUM AÇ");
    });
    it("There is a 'Üye Girişi'", () => {
        expect(wrapper.text()).toContain("Üye Girişi");
    });
    it("There is a 'Beni Hatırla'", () => {
        expect(wrapper.text()).toContain("Beni Hatırla");
    });
    it("There is a 'Şimdi Katıl?'", () => {
        expect(wrapper.text()).toContain("Şimdi Katıl");
    });
});