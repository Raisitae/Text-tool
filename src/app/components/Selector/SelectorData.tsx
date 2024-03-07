//call this button data?

export const selectorsData = [
  {
    title: "Font style and line breaks",
    type: 1,
    buttons: [
      { tag: "b", text: "<b>" },
      { tag: "i", text: "<i>" },
      { tag: "strong", text: "<strong>" },
      { tag: "br", text: "<br/>" },
    ],
  },
  {
    title: "Headings",
    type: 1,
    buttons: [
      { tag: "h2", text: "<h2>" },
      { tag: "h3", text: "<h3>" },
      { tag: "h4", text: "<h4>" },
      { tag: "h5", text: "<h5/>" },
      { tag: "h6", text: "<h6/>" },
      { tag: "h7", text: "<h7/>" },
    ],
  },
  {
    title: "Lists",
    type: 1,
    buttons: [
      { tag: "ol", text: "<ol>" },
      { tag: "ul", text: "<ul>" },
      { tag: "li", text: "<li>" },
    ],
  },
  {
    title: "Enter a link",
    type: 2,
    placeholder: "Enter your url",
    label: "Open in a new tab",
    buttons: [{ tag: "a", text: "<a href=”your-input”>" }],
  },
  {
    title: "Capitalization",
    type: 1,
    buttons: [
      { tag: "upper", text: "TO UPPER" },
      { tag: "lower", text: "to lower" },
      { tag: "sentence", text: "Sentence Case" },
    ],
  },
];
