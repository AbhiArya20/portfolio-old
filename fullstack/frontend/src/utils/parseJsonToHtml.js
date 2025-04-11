import { generateHTML } from "@tiptap/html";
import parse from "html-react-parser";
import { extensions } from "../Constants/tiptapExtensions";

const parseJsonToHtml = (json) => {
  return parse(generateHTML(json, extensions));
};

export default parseJsonToHtml;
