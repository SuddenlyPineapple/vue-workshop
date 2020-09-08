import { shallowMount } from "@vue/test-utils";
import BasicComponent from "@/components/1_Basic_Component.vue";

const updateWrapper = async wrapper => await wrapper.vm.$nextTick();

describe("1_Basic_Component", () => {
  const getWrapper = propsData =>
    shallowMount(BasicComponent, {
      propsData
    });

  it("should render Card with button", () => {
    const wrapper = getWrapper();
    expect(wrapper.find("v-btn")).toBeDefined();
    expect(wrapper.find("v-card")).toBeDefined();
    expect(wrapper.find("v-card").props("color")).toBe("red");
    expect(wrapper.text()).toContain("0");
  });

  it("should pass color prop to component", () => {
    const wrapper = getWrapper({ color: "green" });
    expect(wrapper.find("v-card").props("color")).toBe("green");
  });

  it("should increment value", async () => {
    const wrapper = getWrapper();
    expect(wrapper.find("p").text()).toContain("0");

    wrapper.find("v-btn").trigger("click");
    await updateWrapper(wrapper);

    expect(wrapper.find("p").text()).toContain("1");
  });
});
