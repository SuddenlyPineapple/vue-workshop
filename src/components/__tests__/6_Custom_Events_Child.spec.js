import Vue from "vue";
import Vuetify from "vuetify";
import { mount, createLocalVue } from "@vue/test-utils";

Vue.use(Vuetify);
const localVue = createLocalVue();

import Child from "../6_Custom_Events_Child";

describe("6_Custom_Events_Child", () => {
  let vuetify;

  beforeEach(() => {
    vuetify = new Vuetify();
  });

  const getWrapper = () =>
    mount(Child, {
      localVue,
      vuetify
    });

  it("should render child component", () => {
    const wrapper = getWrapper();
    expect(wrapper.html()).toMatchSnapshot();
  });

  it("should emit event when closing snackbar", async () => {
    const wrapper = getWrapper();
    const event = jest.fn();
    const button = wrapper.find(".v-btn");

    wrapper.vm.$on("unlock-button", event);
    expect(event).toHaveBeenCalledTimes(0);
    button.trigger("click");
    expect(event).toHaveBeenCalledTimes(1);
  });
});
