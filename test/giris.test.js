import { mount } from "@vue/test-utils";

import giris from "../pages/header/giris.vue";

describe("giris.vue", () => {
    let wrapper = mount(giris);
    it("There is a Üye Girişi", () => {
        expect(wrapper.text()).toContain("Üye Girişi");
    });
    it("There is a Fenerbahçe’ye", () => {
        expect(wrapper.text()).toContain("Fenerbahçe’ye");
    });
    it("There is a 'Dair'", () => {
        expect(wrapper.text()).toContain("Dair");
    });
    it("There is a Her Şey İçin, Hesabın Burada", () => {
        expect(wrapper.text()).toContain("Her Şey İçin, Hesabın Burada");
    });
    it("There is a 'Beni Hatırla'", () => {
        expect(wrapper.text()).toContain("Beni Hatırla");
    });
    it("There is a button of 'Şifreni mi unuttun?'", () => {
        expect(wrapper.text()).toContain("Şifreni mi unuttun?");
    });
    it("There is a button of 'OTURUM AÇ'", () => {
        expect(wrapper.text()).toContain("OTURUM AÇ");
    });
    it("There is a 'Henüz Üye Değil misin?'", () => {
        expect(wrapper.text()).toContain("Henüz Üye Değil misin?");
    });
    it("There is a 'Şimdi Katıl'", () => {
        expect(wrapper.text()).toContain("Şimdi Katıl");
    });

});