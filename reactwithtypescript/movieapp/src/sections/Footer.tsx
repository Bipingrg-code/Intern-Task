import Location from "../assets/icons/location.png";
const Footer = () => {
  return (
    <footer className=" bg-slate-600 w-full">
      <div className="container mx-auto flex gap-6 py-4">
        <div className="p-2">
          <h2 className="text-4xl font-bold leading-2 text-slate-100 p-4">
            Ramailo Movie
          </h2>
          <div className="flex p-2">
            <img
              src={Location}
              alt=""
              width={22}
              height={22}
              className="object-contain"
            />
            <p className="max-w-md text-sm text-white p-4">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. inventore
              deleniti et ipsum, dignissimos adipisci?
            </p>
          </div>
        </div>
        <div className="p-4">
          <h3 className="mb-3 text-xl font-bold text-slate-200">The Basic</h3>
          <ul className="text-sm font-medium leading-5 space-y-2 cursor-pointer text-slate-900">
            <li>About Weekend Watch</li>
            <li>Contact Us</li>
            <li>Support</li>
            <li>API</li>
          </ul>
        </div>
        <div className="p-4">
          <h3 className=" mb-3 text-xl font-bold text-slate-200">
            Get Involved
          </h3>
          <ul className="text-sm font-medium leading-5 space-y-2 cursor-pointer text-slate-900">
            <li>Contribution GuidLine</li>
            <li>Add New Movie</li>
            <li>Add New Tv Show</li>
          </ul>
        </div>
        <div className="p-4">
          <h3 className="mb-3 text-xl font-bold text-slate-200">Community</h3>
          <ul className="text-sm font-medium leading-5 space-y-2 cursor-pointer text-slate-900">
            <li>Guidelines</li>
            <li>Discussion</li>
            <li>Leaderboard</li>
            <li>Tweeter</li>
          </ul>
        </div>
        <div className="p-4">
          <h3 className="mb-3 text-xl font-bold text-slate-200">Legal</h3>
          <ul className="text-sm font-medium leading-5 space-y-2 cursor-pointer text-slate-900">
            <li>Terms of Use</li>
            <li>API term of Use</li>
            <li>Privacy Policy</li>
          </ul>
        </div>
      </div>
      <div className="bg-gray-800 h-[60px] flex ">
        <div className="container mx-auto flex justify-between items-center">
          <p className="text-base text-slate-100">
            &copy; All Right Reserved. Weekend watch all related Movies and Tv
            Shows are part Of Copy right
          </p>
          <span className="text-base text-slate-100">All Right Reserved</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
