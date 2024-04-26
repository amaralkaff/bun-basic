import { describe, it, expect } from "bun:test";
import { User } from "../packages/user/user";

describe("User Package", () => {
  it("should create a new user with a name", () => {
    const user = new User("AmangLy");
    expect(user.name).toBe("AmangLy");
  });
});
