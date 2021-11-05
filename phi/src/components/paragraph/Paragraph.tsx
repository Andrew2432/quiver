import { CSSProperties } from "react";
import { ParagraphProps } from "./ParagraphProps";

const paragraphStyles: CSSProperties = {
  fontSize: "1.5rem",
  fontFamily: "Source Sans Pro",
};

function Paragraph({ children }: ParagraphProps) {
  return <p style={paragraphStyles}>{children}</p>;
}

export default Paragraph;
