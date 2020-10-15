import { shallowMount } from "@vue/test-utils";
import Watchers from "../4_Watchers";

jest.mock("lodash/debounce", () => jest.fn(fn => fn));
jest.useFakeTimers();

describe("4_Watchers", () => {
  let cmp;

  beforeEach(() => {
    cmp = shallowMount(Watchers);
  });

  it("should change answer after question change", done => {
    cmp.setData({ question: "Am I happy?" });

    expect(cmp.vm.question).toBe("Am I happy?");

    cmp.vm.$nextTick(() => {
      expect(cmp.vm.answer).toBe("Waiting for you to stop typing...");
      done();
    });
  });
});
