import { fileURLToPath } from "node:url";
import { describe, it, expect } from "vitest";
import { setup, $fetch } from "@nuxt/test-utils";

describe("provider", async () => {
  await setup({
    rootDir: fileURLToPath(new URL("./fixtures/basic", import.meta.url)),
  });

  it("makes src", async () => {
    const page = await $fetch("/");

    expect(page).toContain('src="http://directus:port/assets/basic"');

    expect(page).toContain('src="http://directus:port/assets/cent?width=100"');
  });
});
