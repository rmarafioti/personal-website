// Tests getPosts' wiring to cmsFetch: its path, its tag and its empty value.
import { describe, expect, it, vi } from "vitest";

import { mockFetch } from "@/test/helpers";
import { getPosts } from "./getPosts";

describe("getPosts", () => {
  it("returns [] without calling fetch when HEADLESS_CMS_API_URL is unset", async () => {
    const fetchMock = mockFetch({ body: { data: [] } });

    const posts = await getPosts();

    expect(posts).toEqual([]);
    expect(fetchMock).not.toHaveBeenCalled();
  });

  it("fetches /api/public/posts tagged 'cms' and 'posts'", async () => {
    vi.stubEnv("HEADLESS_CMS_API_URL", "https://cms.test");
    vi.stubEnv("HEADLESS_CMS_API_KEY", "test-api-key");
    const fetchMock = mockFetch({ body: { data: [] } });

    await getPosts();

    const [url, init] = fetchMock.mock.calls[0];
    expect(url).toBe("https://cms.test/api/public/posts");
    expect(init.next.tags).toEqual(["cms", "posts"]);
  });
});
