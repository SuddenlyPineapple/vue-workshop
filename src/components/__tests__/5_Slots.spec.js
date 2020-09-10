import { shallowMount } from "@vue/test-utils";
import Slots from "../5_Slots";

describe("5_Slots", () => {
  const bazComponent = {
    name: "baz-component",
    template: "<v-btn>Yeah!</v-btn>"
  };

  const getWrapper = component =>
    shallowMount(Slots, { slots: { default: component } });

  it("should render given component", () => {
    const wrapper = getWrapper(bazComponent);
    expect(wrapper).toMatchSnapshot();
  });
});
