import Vue from "vue";
import Vuetify from "vuetify";
import { mount, createLocalVue } from "@vue/test-utils";
import ComputedProperties from "../4_Computed_Property";

Vue.use(Vuetify);
const localVue = createLocalVue();

describe("4_Computed_Properties", () => {
  let vuetify;

  beforeEach(() => {
    vuetify = new Vuetify();
  });

  const getWrapper = () =>
    mount(ComputedProperties, {
      localVue,
      vuetify
    });

  it("should render computed property component", () => {
    const wrapper = getWrapper();
    expect(wrapper).toMatchSnapshot();
  });

  it("should transform user input to uppercase", async () => {
    const wrapper = getWrapper();
    wrapper.find("input").setValue("foo");
    await wrapper.vm.$nextTick()
    expect(wrapper.find(".uppercase").text()).toBe("FOO");
  });
});
