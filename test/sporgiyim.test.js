import { mount, createLocalVue, config, shallowMount } from "@vue/test-utils";
import sporgiyim from "../components/sporgiyim.vue";

config.mocks["$fire"] = {
    database: {
        ref: () => {
            return "";
        }
    }
};

jest.mock("axios", () => ({
    get: () =>
        Promise.resolve({
            data: [{
                "id": 1,
                "image": "https://fenerium.com/Fenerium/media/images/urunler/TK011EAK01407.jpg",
                "price": 319.95,
                "title": "Erkek Lacivert Tribün Basic Eşofman Takımı"
            }, {
                "id": 2,
                "image": "https://fenerium.com/Fenerium/media/images/urunler/TK050E9Y01301.jpg",
                "price": "149,95",
                "title": "Erkek Gri Tribun Basic Eşofman Altı"
            }, {
                "id": 3,
                "image": "https://fenerium.com/Fenerium/media/images/urunler/TK050E9Y01407.jpg",
                "price": 149.95,
                "title": "Erkek Lacivert Tribün Basic Eşofman Altı"
            }, {
                "id": 4,
                "image": "https://fenerium.com/Fenerium/media/images/urunler/TK050E9S02301.jpg",
                "price": 139.95,
                "title": "Erkek Gri Basket Eşofman Altı"
            }, {
                "id": 5,
                "image": "https://fenerium.com/Fenerium/media/images/urunler/TK050E9K01305.jpg",
                "price": 149.95,
                "title": "Erkek Gri Tribün Basic Eşofman Altı"
            }, {
                "id": 6,
                "image": "https://fenerium.com/Fenerium/media/images/urunler/TK050EAY01407.jpg",
                "price": 164.95,
                "title": "Erkek Lacivert Aktif Tek Alt"
            }, {
                "id": 7,
                "image": "https://fenerium.com/Fenerium/media/images/urunler/TK050EAY02407.jpg",
                "price": 149.95,
                "title": "Erkek Lacivert Kolej Fenerbahçe 1907 Tek Alt"
            }, {
                "id": 8,
                "image": "https://fenerium.com/Fenerium/media/images/urunler/TK050EAK08305.jpg",
                "price": 149.95,
                "title": "Erkek Antrasit Tribün Nos Tek Alt"
            }, {
                "id": 9,
                "image": "https://fenerium.com/Fenerium/media/images/urunler/TK050EAK08407.jpg",
                "price": 149.95,
                "title": "Erkek Lacivert Tribün Nos Eşofman Altı"
            }, {
                "id": 10,
                "image": "https://fenerium.com/Fenerium/media/images/urunler/TK050EAK05407.jpg",
                "price": 114.95,
                "title": "Erkek Lacivert Tribün Kamuflaj Eşofman Altı"
            }, {
                "id": 11,
                "image ": "https://fenerium.com/Fenerium/media/images/urunler/TK050EBK01407.jpg",
                "price ": 169.95,
                "title": "Erkek Lacivert Basic Ribanalı Tek Alt"
            }, {
                "id": 12,
                "image": "https://fenerium.com/Fenerium/media/images/urunler/TK050EBK02301.jpg",
                "price": 179.95,
                "title": "Erkek Gri Tribün Yan Parçalı Tek Alt"
            }, {
                "id": 13,
                "image": "https://fenerium.com/Fenerium/media/images/urunler/TK050EBK05407.jpg",
                "price": 229.95,
                "title": "Erkek Lacivert Aktif Neon Logo Tek Alt"
            }, {
                "id": 14,
                "image": "https://fenerium.com/Fenerium/media/images/urunler/AT050EAS014BZ.jpg",
                "price": 279,
                "title": "Erkek Lacivert Beyaz 2020/21 A Takım Kamp Tek Alt"
            }, {
                "id ": 15,
                "image": "https://fenerium.com/Fenerium/media/images/urunler/AT050EAS024BZ.jpg",
                "price": 339,
                "title": "Erkek 2020/21 A Takım Antrenman Tek Alt"
            }, {
                "id": 16,
                "image": "https://fenerium.com/Fenerium/media/images/urunler/TK016EBK01407.jpg",
                "price": 599,
                "title": "Erkek Lacivert Tribün Kaban"
            }, {
                "id": 17,
                "image": "https://fenerium.com/Fenerium/media/images/urunler/AT012EAS014BZ.jpg",
                "price": 249,
                "title": "Erkek Lacivert Beyaz 2020/21 A Takım Kapri"
            }, {
                "id": 18,
                "image": "https://fenerium.com/Fenerium/media/images/urunler/TK012E9Y02407.jpg",
                "price": 94.95,
                "title ": "Erkek Lacivert Tribün Basic Kapri"
            }, {
                "id": 19,
                "image": "https://fenerium.com/Fenerium/media/images/urunler/AT514E9S014SR.jpg",
                "price": 89,
                "title": "Erkek Lacivert Fenerbahçe 19 Maç Şort"
            }, {
                "id": 20,
                "image": "https://fenerium.com/Fenerium/media/images/urunler/AT514E9S035LC.jpg",
                "price": 89,
                "title": "Erkek Sarı Fenerbahçe 19 Maç Şort"
            }, {
                "id": 21,
                "image": "https://fenerium.com/Fenerium/media/images/urunler/AT514E9S020LS.jpg",
                "price": 89,
                "title": "Erkek Beyaz Fenerbahçe 19 Maç Şort"
            }, {
                "id": 22,
                "image": "https://fenerium.com/Fenerium/media/images/urunler/AT514E9S06400.jpg",
                "price": 129,
                "title": "Erkek Lacivert Fenerbahçe Voleybol Maç Şort"
            }, {
                "id": 23,
                "image": "https://fenerium.com/Fenerium/media/images/urunler/AT514E9S07001.jpg",
                "price": 129,
                "title": "Erkek Beyaz Fenerbahçe Voleybol Maç Şort"
            }, {
                "id": 24,
                "image": "https://fenerium.com/Fenerium/media/images/urunler/AT514EAS014SR-03.jpg",
                "price": 169,
                "title": "Erkek Lacivert Sarı Fenerbahçe 2020/21 Maç Şort"
            }]
        })
}));

describe("sporgiyim.vue", () => {
    it("Render", () => {
        let wrapper = shallowMount(sporgiyim);
        expect(wrapper.text()).toContain("Spor Giyim");
    });
    it("Sepete Ekle Button", () => {
        expect(wrapper.text()).toContain("Sepete Ekle");
    });
});