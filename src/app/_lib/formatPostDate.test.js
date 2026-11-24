// Tests formatPostDate: a postDate (YYYY-MM-DD) shows as a long date.
import { describe, expect, it } from "vitest";

import { formatPostDate } from "./formatPostDate";

describe("formatPostDate", () => {
  it("formats YYYY-MM-DD as a long date", () => {
    const result = formatPostDate("2026-03-15");

    expect(result).toBe("March 15, 2026");
  });
});
