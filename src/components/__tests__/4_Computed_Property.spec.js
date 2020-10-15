import { shallowMount } from "@vue/test-utils";
import ComputedProperties from "../4_Computed_Property";

describe("4_Computed_Properties", () => {
  const getWrapper = () => shallowMount(ComputedProperties);

  it("should render actual time and date", () => {
    const wrapper = getWrapper();
    expect(wrapper).toMatchSnapshot();
  });
});
