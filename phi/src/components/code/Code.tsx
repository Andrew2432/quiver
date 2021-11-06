import { CSSProperties } from "react";
import { CodeProps } from "./CodeProps";

const codeStyles: CSSProperties = {
  fontSize: "1.3rem",
  fontFamily: "Hack",
};

function Code({ language, children }: CodeProps) {
  return (
    <pre className={`language-${language}`} style={codeStyles}>
      <code>{children}</code>
    </pre>
  );
}

export default Code;
