const Hero = () => {
  return (
    <div className="relative min-h-[500px] flex items-center justify-center bg-gradient-to-r from-blue-500 to-indigo-600">
      {/* Hero content */}
      <div className="hero-content text-center text-white z-10">
        <h1 className="text-4xl font-bold">Welcome To The Weekend Watch</h1>
        <p className="text-lg">Millions of Movies, TV Shoes and many more.</p>

        {/* Search box */}
        <input
          type="text"
          placeholder="Search..."
          className="mt-4 px-4 py-2 rounded-full bg-white text-gray-800 w-64"
        />
      </div>
    </div>
  );
};

export default Hero;
