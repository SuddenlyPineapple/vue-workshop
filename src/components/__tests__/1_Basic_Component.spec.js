import { mount, createLocalVue } from "@vue/test-utils";
import BasicComponent from "../1_Basic_Component.vue";
import Vuetify from "vuetify";

describe("1_Basic_Component", () => {
  const localVue = createLocalVue();
  let vuetify;

  beforeEach(() => {
    vuetify = new Vuetify();
  });

  const getWrapper = propsData =>
    mount(BasicComponent, {
      propsData,
      localVue,
      vuetify
    });

  it("should render Card with button", () => {
    const wrapper = getWrapper();

    expect(wrapper.find("button")).toBeDefined();
    expect(wrapper.find(".v-card.red").exists()).toBeTruthy();
    expect(wrapper.find("p").text()).toContain("0");
  });

  it("should pass color prop to component", () => {
    const wrapper = getWrapper({ color: "green" });
    expect(wrapper.find(".v-card.green").exists()).toBeTruthy();
  });

  it("should increment value", async () => {
    const wrapper = getWrapper();
    expect(wrapper.find("p").text()).toContain("0");

    await wrapper.find("button").trigger("click");

    expect(wrapper.find("p").text()).toContain("1");
  });
});
