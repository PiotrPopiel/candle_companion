type FormButtonProps = {
  children: React.ReactNode;
  action: () => void;
};

export default function CancelButton({ children, action }: FormButtonProps) {
  return (
    <button
      onClick={action}
      className="mt-8  bg-red-400 rounded text-gray-50 font-bold  px-4 py-2 transition-all hover:scale-110 active:size-105 focus:size-105">
      {children}
    </button>
  );
}
