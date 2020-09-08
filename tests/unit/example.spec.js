import { shallowMount } from "@vue/test-utils";
import HelloWorld from "@/components/HelloWorld.vue";
import Header from "@/components/Header.vue";

describe("Should all pass 👌", () => {
  describe("HelloWorld component", () => {
    it("renders props.msg when passed", () => {
      const msg = "new message";
      const wrapper = shallowMount(HelloWorld, {
        propsData: { msg }
      });
      expect(wrapper.text()).toMatch(msg);
    });
  });

  describe("Header component", () => {
    it("should render Header", () => {
      const wrapper = shallowMount(Header);
      console.log(wrapper.html()); // Sposób na podejrzenie zawartości renderowanego HTML'a
      expect(wrapper.find("v-app-bar")).toBeDefined();
    });
  });
});
