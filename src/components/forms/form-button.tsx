type FormButtonProps = {
  children: React.ReactNode;
};

export default function FormButton({ children }: FormButtonProps) {
  return (
    <button
      type="submit"
      className="mt-8  bg-secondary-purple rounded text-gray-50 font-bold  px-4 py-2 transition-all hover:scale-110 active:size-105 focus:size-105">
      {children}
    </button>
  );
}
