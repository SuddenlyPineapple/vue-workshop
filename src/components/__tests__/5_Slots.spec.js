import { shallowMount } from "@vue/test-utils";
import Slots from "../5_Slots";

describe("5_Slots", () => {
  const baseComponent = {
    name: "base-component",
    template: "<v-btn>Yeah!</v-btn>"
  };

  const headerComponent = {
    name: "baz-component",
    template: "<h1>I'm heading!</h1>"
  };

  const getWrapper = (component1, component2) =>
    shallowMount(Slots, {
      slots: { default: component1, heading: component2 }
    });

  it("should render given component", () => {
    const wrapper = getWrapper(baseComponent, headerComponent);
    expect(wrapper).toMatchSnapshot();
  });
});
