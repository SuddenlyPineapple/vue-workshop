import { shallowMount } from "@vue/test-utils";
import ConditionalStatements from "../2_Conditional_Statements";

const updateWrapper = async wrapper => await wrapper.vm.$nextTick();

describe("2_Conditional_Statements", () => {
  const getWrapper = () => shallowMount(ConditionalStatements);

  it("should show it's easy", () => {
    const wrapper = getWrapper();
    console.log(wrapper.html());
    expect(wrapper.find("v-switch").attributes("label")).toContain("No");
    expect(wrapper.find("v-img").attributes("alt")).toBe("easy");
  });

  it("should show it's hard after changing decision", async () => {
    const wrapper = getWrapper();
    expect(wrapper.find("v-switch").attributes("label")).toContain("No");
    expect(wrapper.find("v-img").attributes("alt")).toBe("easy");

    wrapper.setData({ isThisWorkshopHard: true });
    await updateWrapper(wrapper);

    expect(wrapper.find("v-switch").attributes("label")).toContain("Yes");
    expect(wrapper.find("v-img").attributes("alt")).toBe("hard");
  });
});
