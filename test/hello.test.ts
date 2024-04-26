import { describe, it, expect } from "bun:test";
import { sayHello } from "../src/hello";

describe("Bun Test Runner", () => {
  it("should support unit tests with AmangLy", () => {
    const response = sayHello("AmangLy");
    expect(response).toBe("Hello from AmangLy");
  });

  it("should support unit tests with Bun", () => {
    const response = sayHello("Bun");
    expect(response).toBe("Hello from Bun");
  });

  it("should support unit tests with Jest", () => {
    const response = sayHello("Jest");
    expect(response).toBe("Hello from Jest");
  });
});
