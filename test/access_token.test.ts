import { fileURLToPath } from "node:url";
import { describe, it, expect } from "vitest";
import { setup, $fetch } from "@nuxt/test-utils";

describe("access_token", async () => {
  await setup({
    rootDir: fileURLToPath(new URL("./fixtures/access_token", import.meta.url)),
  });

  it("includes in path", async () => {
    const page = await $fetch("/");

    expect(page).toContain('src="http://directus:port/assets/basic?access_token=xxx"');

    expect(page).toContain('src="http://directus:port/assets/hand?access_token=hand"');
  });
});
