import styles from '../styles/Button.module.css';
import Link from 'next/link';

interface ButtonProps {
  href?: string;
  text: string;
  onClick?: (e: any) => void;
}

const Button: React.FC<ButtonProps> = (props) => {

  const renderButton = () => (
    <button onClick={props.onClick} className={styles.button}>{props.text}</button>
  );

  return props.href ? (
    <Link href={props.href}>
      {renderButton()}
    </Link>
  ) : renderButton()
}

export default Button;