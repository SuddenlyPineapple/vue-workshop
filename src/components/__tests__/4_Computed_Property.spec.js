import { shallowMount } from "@vue/test-utils";
import ComputedProperties from "../4_Computed_Property";

describe("4_Computed_Properties", () => {
  const getWrapper = () => shallowMount(ComputedProperties);

  it("should render actual time and date", () => {
    const mockDate = new Date(1599763138465);
    jest.spyOn(global, "Date").mockImplementation(() => mockDate);
    const wrapper = getWrapper();
    expect(wrapper).toMatchSnapshot();
  });
});
