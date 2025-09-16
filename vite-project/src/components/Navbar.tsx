import { ChevronLeft, CircleUser } from "lucide-react";

function Navbar() {
  return (
    <div className="w-full flex items-center justify-between px-4 sm:px-6 py-3 bg-[rgb(231,196,216)] shadow-md">
  
      <div className="flex items-center text-sm sm:text-base font-medium text-gray-700 cursor-pointer hover:text-gray-900 transition">
        <ChevronLeft className="w-4 h-4 sm:w-5 sm:h-5 mr-1" />
        <span className="hidden xs:inline">Back</span>
      </div>

  
      <div className="text-base sm:text-lg md:text-xl font-semibold text-center font-sans text-gray-900">
        Dashboard
      </div>


      <div className="text-gray-700 hover:text-gray-900 cursor-pointer">
        <CircleUser className="w-6 h-6 sm:w-7 sm:h-7" />
      </div>
    </div>
  );
}

export default Navbar;
