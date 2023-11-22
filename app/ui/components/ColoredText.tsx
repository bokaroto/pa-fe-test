import { aspergit } from '@/fonts';

interface ColoredTextProps {
  text: string;
  uppercase?: boolean;
}
const ColoredText: React.FC<ColoredTextProps> = ({
  text,
  uppercase = false,
}) => {
  return (
    <div className="text-left">
      <h3
        className={`${
          aspergit.className
        } animate-charcter h3-xs sm:h3-sm md:h3-md xl:h3-xl ${
          uppercase ? 'uppercase' : ''
        }`}
      >
        {text}
      </h3>
    </div>
  );
};

export default ColoredText;
