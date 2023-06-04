const Hero = () => {
  return (
    <div className="flex justify-between hero">
      <div className="w-[35rem] mt-40 ml-36 flex flex-col gap-8 ">
        <p className="text-6xl font-bold">Get insights with video interviews</p>
        <p className="w-[22rem]">
          Target all your clients during key moments throughout their product
          journey
        </p>

        <div className="flex items-center gap-6 text-sm">
          <button className="bg-[#005cda] rounded-full text-white px-5 py-3 font-bold">
            Start for free
          </button>
          <button className="font-bold ">Talk to sale</button>
        </div>

        <img className="w-100 mt-36" alt="company" src="/company.png" />
      </div>

      <div className="flex items-center">
        <img className="w-[45.2rem]" alt="banner" src="/hero_image.png" />
      </div>
    </div>
  );
};

export default Hero;
