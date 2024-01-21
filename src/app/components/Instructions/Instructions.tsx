export const Instructions = (): JSX.Element => {
  return (
    <div className="flex flex-col items-left mb-4">
      <h2 className="mb-2 text-light-grey font-bold">Instructions</h2>
      <p className="mb-1.5">
        <span className="text-bubble-gum">To add any HTML Tags:</span> Simply
        select the text and click any of the tags; they&apos;ll appear at the
        start and end. To insert a breakline click where needed; a line break
        will appear there. To add a link, paste the URL, click &lt;a&gt; tag;
        link wraps the selected text.
      </p>
      <p className="mb-1.5">
        <span className="text-bubble-gum">Handling Multiple Lines:</span>{" "}
        Selecting lines and click the break tag adds a break between them,
        pressing &lt;li&gt; converts each sentence into a list item.
      </p>
      <p className="mb-1.5">
        <span className="text-bubble-gum">Text capitalization:</span> Adjusts
        the capitalization of the selected text.
      </p>
      <p className="mb-1.5">
        <span className="text-bubble-gum">Font Preview:</span> Allows us to
        change the font family of titles, text and links to preview how they
        will appear.
      </p>
    </div>
  );
};

export default Instructions;
