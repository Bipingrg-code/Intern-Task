interface BlockProps extends React.DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> {
  value: string;
  onClick: () => void;
}
export const Block: React.FC<BlockProps> = ({ value, onClick, ...rest }) => {
  return (
    <button
      {...rest}
      disabled={value? true : false}
      onClick={onClick}
      className="border-2 border-gray-400 rounded-md h-20 w-20 cursor-pointer flex items-center justify-center font-bold text-2xl"
    >
      {value}
    </button>
  );
};

export default Block;
