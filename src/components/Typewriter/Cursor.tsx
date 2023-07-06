import './styles.css';

interface CursorProps {
  cursorStyle?: string;
}

export const Cursor = ({ cursorStyle = '|' }: CursorProps): JSX.Element => {
  return (
    <span className='font-extrabold inline-block relative left-[1px] fast-pulse text-primary'>
      {cursorStyle}
    </span>
  );
};
