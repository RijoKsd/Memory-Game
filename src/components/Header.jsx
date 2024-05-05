const Header = () => {
  return (
    <header className="animate-slide-in-left flex flex-col items-center gap-3 pt-10 text-center my-5">
      <h1 className=" text-4xl md:text-6xl font-extrabold  bg-gradient-to-r from-sky-500 to-indigo-500 text-transparent bg-clip-text">
        Mind Flip
      </h1>
      <p className="text-sm md:text-lg text-gray-500 tracking-tighter mt-3 ">
        Test your memory skills! Click on items, but beware—don&#39;t click the
        same one twice.
      </p>
      <p className=" text-sm md:text-lg text-gray-500">
        Shuffle your brain and see how far you can go.
      </p>
    </header>
  );
};

export default Header;
