import { mount } from "@vue/test-utils";

import kaydol from "../pages/kaydol.vue";

describe("kaydol.vue", () => {
    let wrapper = mount(kaydol);
    it("There is a Üye Ol", () => {
        expect(wrapper.text()).toContain("Üye Ol");
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
    it("There is a 'Colombia'", () => {
        expect(wrapper.text()).toContain("Colombia");
    });
    it("There is a button of 'KAYDOL'", () => {
        expect(wrapper.text()).toContain("KAYDOL");
    });
    it("There is a 'Zaten Üye misin ?'", () => {
        expect(wrapper.text()).toContain("Zaten Üye misin ?");
    });
    it("There is a button of 'Oturum Aç'", () => {
        expect(wrapper.text()).toContain("Oturum Aç");
    });


});