// A post's postDate (YYYY-MM-DD) for display, as "January 5, 2026". Formatted in UTC, the zone the
// date is parsed in, so the visitor's or the server's time zone never shifts it by a day.

const DATE_FORMAT = new Intl.DateTimeFormat("en-US", {
  year: "numeric",
  month: "long",
  day: "numeric",
  timeZone: "UTC",
});

export function formatPostDate(postDate) {
  return DATE_FORMAT.format(new Date(`${postDate}T00:00:00Z`));
}
