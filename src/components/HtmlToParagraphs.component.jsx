/* eslint-disable react/prop-types */

const HtmlToParagraphs = ({ data, length }) => {
  const convertToParagraphs = (content) => {
    const parser = new DOMParser();
    const parsedHtml = parser.parseFromString(content, "text/html");
    const plainText = parsedHtml.body.textContent;

    const para = plainText.replace(/\s+/g, " ");

    const truncatedText =
      content.length > length ? `${para.slice(0, length)}...` : para;

    return truncatedText !== "null" ? truncatedText : "No Description🙁";
  };

  return <p className="desc">{convertToParagraphs(data)}</p>;
};

export default HtmlToParagraphs;
