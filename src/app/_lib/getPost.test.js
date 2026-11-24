// Tests getPost: it finds one post in the CMS's list by the route param, or returns null.
import { describe, expect, it, vi } from "vitest";

import { mockFetch } from "@/test/helpers";
import { getPost } from "./getPost";

// Two posts in the PublicPost shape from docs/cms/posts.md.
const POSTS = [
  {
    id: "post-2",
    header: "Second",
    subHeader: null,
    postDate: "2026-02-01",
    createdAt: "2026-02-01T12:00:00.000Z",
    updatedAt: "2026-02-01T12:00:00.000Z",
    body: [{ type: "paragraph", text: "Two" }],
  },
  {
    id: "post-1",
    header: "First",
    subHeader: "The first post",
    postDate: null,
    createdAt: "2026-01-01T12:00:00.000Z",
    updatedAt: "2026-01-01T12:00:00.000Z",
    body: [{ type: "paragraph", text: "One" }],
  },
];

function stubCmsEnv() {
  vi.stubEnv("HEADLESS_CMS_API_URL", "https://cms.test");
  vi.stubEnv("HEADLESS_CMS_API_KEY", "test-api-key");
}

describe("getPost", () => {
  it("returns the post whose id matches", async () => {
    stubCmsEnv();
    mockFetch({ body: { data: POSTS } });

    const post = await getPost("post-1");

    expect(post).toEqual(POSTS[1]);
  });

  it("returns null when no post matches", async () => {
    stubCmsEnv();
    mockFetch({ body: { data: POSTS } });

    const post = await getPost("missing");

    expect(post).toBeNull();
  });
});
