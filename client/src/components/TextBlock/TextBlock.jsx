const TextBlock = ({ heading, subheading }) => {
  return (
    <div className="w-[1740px] h-[75px] flex flex-col justify-center pl-8">
      <h2 className="font-poppins font-semibold text-[24px] leading-[36px] text-black">
        {heading}
      </h2>
      <p className="font-poppins font-normal text-[20px] leading-[30px] text-black mt-1">
        {subheading}
      </p>
    </div>
  );
};

export default TextBlock;
