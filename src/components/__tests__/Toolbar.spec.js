import { shallowMount, createLocalVue } from "@vue/test-utils";
import Vuex from "vuex";
import Toolbar from "../Toolbar";

const localVue = createLocalVue();
localVue.use(Vuex);

describe("Toolbar component", () => {
  let getters;
  let store;

  beforeEach(() => {
    getters = {
      routes: jest.fn()
    };
    store = new Vuex.Store({
      getters
    });
  });

  it("should render Toolbar", () => {
    const wrapper = shallowMount(Toolbar, { store, localVue });
    console.log(wrapper.html()); // Sposób na podejrzenie zawartości renderowanego HTML'a
    expect(wrapper.find("v-app-bar")).toBeDefined();
  });
});
