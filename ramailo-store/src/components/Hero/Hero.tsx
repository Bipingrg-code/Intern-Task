import { BsSearch } from "react-icons/bs";
export const Hero: React.FC = () => {
  return (
    <section className="text-gray-400 bg-gray-100 body-font">
      <div className="container mx-auto flex flex-col px-5 py-12 justify-center items-center">
        <img
          className="lg:w-2/6 md:w-3/6 w-5/6 mb-10 object-cover object-center rounded"
          alt="hero"
          src="https://dummyimage.com/720x600"
        />
        <div className="w-full md:w-2/3 flex flex-col mb-16 items-center text-center">
          <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
            Ramailo Dashain With Ramailo Store
          </h1>
          <p className="mb-8 leading-relaxed">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odio,
            porro modi cupiditate magnam vitae voluptatem iusto ipsam corporis
            veniam quos inventore, vero non illo quae dolor labore. A, suscipit
            dolores.
          </p>
          <div className="flex w-full justify-center items-end">
            <div className="relative mr-4 lg:w-full xl:w-1/2 w-2/4 md:w-full text-left">
              <label className="leading-7 text-center text-sm text-gray-400">
                Placeholder
              </label>
              <input
                type="text"
                id="hero-field"
                name="hero-field"
                className="w-full bg-slat rounded border bg-opacity-40 border-gray-700 focus:ring-2 focus:ring-blue-900 focus:bg-transparent focus:border-blue-500 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              />
            </div>
            <BsSearch size={36} className="cursor-pointer" />
          </div>
          <p className="text-sm mt-2 text-gray-500 mb-8 w-full">
            Neutra shabby chic ramps, viral fixie.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Hero;
