import styles from '../../styles/paragraph/Paragraph.module.css';
import { ParagraphProps } from './ParagraphProps';

function Paragraph({ children }: ParagraphProps) {
  return <p className={styles['paragraph']}>{children}</p>;
}

export default Paragraph;
