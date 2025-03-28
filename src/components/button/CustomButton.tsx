import { Icon } from '@iconify/react';

interface CustomButtonProps {
  onClick: () => void;
  title: string;
  icon?: string;
}

const CustomButton: React.FC<CustomButtonProps> = ({
  onClick,
  title,
  icon,
}) => {
  return (
    <button
      onClick={onClick}
      className="text-black border-gray-300 flex text-sm items-center border rounded-md p-2 font-semibold cursor-pointer transition-all duration-300 ease-in-out hover:bg-gray-50 hover:border-gray-400 hover:scale-105"
    >
      {icon && (
        <Icon
          icon={icon}
          className="w-4 h-4 mr-3 text-gray-500 transition-all duration-300 ease-in-out hover:text-indigo-600"
        />
      )}

      {title}
    </button>
  );
};

export default CustomButton;
