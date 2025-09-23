export const Input = ({ onClick, type, placeholder }) => {
  return (
    <span
      onClick={onClick}
      className={`p-4 text-4xl px-2 py-2 text-white cursor-pointer bg-[#19406a] rounded-2xl`}
    >
      <input
        type={type}
        placeholder={placeholder}
        className="bg-[#092c59] outline-none "
      ></input>
    </span>
  );
};
