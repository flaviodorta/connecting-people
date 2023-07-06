import { TypewriterProps, useTypewriter } from './useTypewrite';
import { Cursor } from './Cursor';

interface ComponentProps extends TypewriterProps {
  cursor?: boolean;
  cursorStyle?: string;
  className?: string;
}

export const Typewriter = ({
  className,
  texts = [],
  typeSpeed = 70,
  deleteSpeed = 100,
  delaySpeed = 2000,
  initialDelay = null,
  cursorStyle = '|',
  cursor = true,
}: ComponentProps) => {
  const text = useTypewriter({
    texts,
    typeSpeed,
    deleteSpeed,
    delaySpeed,
    initialDelay,
  });

  return (
    <>
      <span className={className}>
        {text}
        {cursor && <Cursor cursorStyle={cursorStyle} />}
      </span>
    </>
  );
};
