import { shallowMount } from "@vue/test-utils";
import ListRenderer from "../3_List_Rendering";

describe("3_List_Rendering", () => {
  const getWrapper = propsData =>
    shallowMount(ListRenderer, {
      propsData
    });

  it("should render default list", () => {
    const wrapper = getWrapper();
    expect(wrapper.html()).toMatchSnapshot();
  });

  it("should render list with data given in props", () => {
    const wrapper = getWrapper({
      list: [
        "Mettalica - Whiskey in the Jar",
        "Rise Against - Savior",
        "Amaranthe - 82nd All The Way"
      ]
    });
    expect(wrapper.html()).toMatchSnapshot();
  });
});
