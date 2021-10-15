import { createLocalVue, shallowMount } from "@vue/test-utils";
import Vuetify from "vuetify";
import ConditionalStatements from "../2_Conditional_Statements";

describe("2_Conditional_Statements", () => {
  const localVue = createLocalVue();
  let vuetify;

  beforeEach(() => {
    vuetify = new Vuetify();
  });
  const getWrapper = () =>
    shallowMount(ConditionalStatements, { localVue, vuetify });

  it("should show it's easy", () => {
    const wrapper = getWrapper();
    expect(wrapper.find("v-switch-stub").attributes("label")).toContain("No");
    expect(wrapper.find("v-img-stub").attributes("alt")).toBe("easy");
  });

  it("should show it's hard after changing decision", async () => {
    const wrapper = getWrapper();
    expect(wrapper.find("v-switch-stub").attributes("label")).toContain("No");
    expect(wrapper.find("v-img-stub").attributes("alt")).toBe("easy");

    await wrapper.setData({ isThisWorkshopHard: true });

    expect(wrapper.find("v-switch-stub").attributes("label")).toContain("Yes");
    expect(wrapper.find("v-img-stub").attributes("alt")).toBe("hard");
  });
});
