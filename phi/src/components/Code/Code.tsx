import { CodeProps } from './CodeProps';

function Code({ language, children }: CodeProps) {
  return (
    <pre className={`language-${language}`}>
      <code>{children}</code>
    </pre>
  );
}

export default Code;
