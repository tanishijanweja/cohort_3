export const Button = ({ disabled, children, onClick }) => {
  return (
    <span
      onClick={onClick}
      className={`rounded-2xl text-4xl px-32 py-8 text-white cursor-pointer ${
        disabled ? "bg-[#7487a0]" : "bg-[##3fc0bc]"
      }`}
    >
      {children}
    </span>
  );
};
