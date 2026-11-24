// Tests FormattedText against every row of the rendering examples in docs/cms/posts.md →
// Paragraph formatting, rendered to HTML. React escapes <, > and & in text, so markup typed by
// the site owner shows as &lt;b&gt; and never becomes an element.
import { renderToStaticMarkup } from "react-dom/server";
import { describe, expect, it } from "vitest";

import FormattedText from "./FormattedText";

// Every link a paragraph builds opens in a new tab.
const NEW_TAB = 'target="_blank" rel="noopener noreferrer"';

// [input as stored, expected HTML], in the table's order.
const EXAMPLES = [
  ["Hello **world**", "Hello <b>world</b>"],
  ["An *easy* walk", "An <i>easy</i> walk"],
  [
    "See [our menu](https://example.com/menu).",
    `See <a href="https://example.com/menu" ${NEW_TAB}>our menu</a>.`,
  ],
  [
    "**Bold** and *italic* and [a link](https://example.com)",
    `<b>Bold</b> and <i>italic</i> and <a href="https://example.com" ${NEW_TAB}>a link</a>`,
  ],
  ["5 * 3 * 2", "5 * 3 * 2"],
  ["** not bold **", "** not bold **"],
  ["*open", "*open"],
  ["[no url]", "[no url]"],
  ["[menu] (https://example.com)", "[menu] (https://example.com)"],
  ["**across\nlines**", "**across\nlines**"],
  ["_not italic_", "_not italic_"],
  ["**a *b* c**", "<b>a *b* c</b>"],
  [
    "[**Menu**](https://example.com)",
    `<a href="https://example.com" ${NEW_TAB}>**Menu**</a>`,
  ],
  ["<b>hi</b> & more", "&lt;b&gt;hi&lt;/b&gt; &amp; more"],
  ["***both***", "<b><i>both</i></b>"],
  ["*** spaced ***", "*** spaced ***"],
  ["**a*", "*<i>a</i>"],
  [
    "**[our menu](https://example.com/menu)**",
    `<b><a href="https://example.com/menu" ${NEW_TAB}>our menu</a></b>`,
  ],
  [
    "*see [the map](https://example.com/map)*",
    `<i>see <a href="https://example.com/map" ${NEW_TAB}>the map</a></i>`,
  ],
  [
    "***[both](https://example.com)***",
    `<b><i><a href="https://example.com" ${NEW_TAB}>both</a></i></b>`,
  ],
  [
    "**[a](https://example.com/**x)**",
    `<b><a href="https://example.com/**x" ${NEW_TAB}>a</a></b>`,
  ],
  ["[menu](http://example.com)", "[menu](http://example.com)"],
];

describe("FormattedText", () => {
  it.each(EXAMPLES)("renders %j as %j", (input, expected) => {
    const html = renderToStaticMarkup(<FormattedText text={input} />);

    expect(html).toBe(expected);
  });
});
