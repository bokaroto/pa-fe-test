import Link from 'next/link';

interface NavigationLinkProps {
  href?: string;
  dataReplace?: string;
  spanContent?: string;
}

const NavigationLink: React.FC<NavigationLinkProps> = ({
  href = '#',
  dataReplace,
  spanContent,
}) => {
  return (
    <Link
      href={href}
      className="hover-link small text-white"
      data-replace={dataReplace}
    >
      <span>{spanContent}</span>
    </Link>
  );
};

export default NavigationLink;
