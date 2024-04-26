import { describe, it, expect } from "bun:test";

describe("Web Fetch API", () => {
  it("should support fetch", async () => {
    const response = await fetch(
      "https://example.com"
    );
    expect(response.status).toBe(200);
    expect(response.headers.get("content-type")).toContain("text/html");
    expect(await response.text()).toContain("Example Domain");
  });
});
