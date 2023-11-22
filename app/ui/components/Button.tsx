import { aspergit } from '@/fonts';
import Link from 'next/link';

interface ButtonProps {
  content: string;
  href: string;
}

const Button: React.FC<ButtonProps> = ({ content, href }) => {
  return (
    <Link
      href={href}
      className={`${aspergit.className} btn transition-all ease-in-out hover:scale-95 `}
    >
      <span className={`${aspergit.className} uppercase`}>{content}</span>
    </Link>
  );
};

export default Button;
