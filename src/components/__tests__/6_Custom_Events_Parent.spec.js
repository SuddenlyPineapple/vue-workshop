import Vuetify from "vuetify";
import { mount, createLocalVue } from "@vue/test-utils";

const localVue = createLocalVue();

import Parent from "../6_Custom_Events_Parent";
import Snackbar from "../6_Custom_Events_Child";

describe("6_Custom_Events_Parent", () => {
  let vuetify;

  beforeEach(() => {
    vuetify = new Vuetify();
  });

  const getWrapper = () =>
    mount(Parent, {
      localVue,
      vuetify,
      stubs: {
        Snackbar
      }
    });

  it("should render parent component", () => {
    const wrapper = getWrapper();
    expect(wrapper.html()).toMatchSnapshot();
  });

  it("should unlock button when it's child emit unlock-button event", async () => {
    const wrapper = getWrapper();
    
    expect(wrapper.findAll("button").at(1).attributes().disabled).toBeDefined()
    
    await wrapper.findComponent(Snackbar).vm.$emit("unlock-button");

    expect(wrapper.findAll("button").at(1).attributes().disabled).toBeUndefined()
  });
});
