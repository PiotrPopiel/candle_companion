type FormErrorProps = {
  children: string | string[];
};

export default function FormError({ children }: FormErrorProps) {
  return (
    <div className="bg-red-200 text-sm rounded mt-2 py-1 px-4 border border-red-500 text-red-800 w-full text-center">
      {children}
    </div>
  );
}
