import { useState } from "react";

export default () => {
  const [pages, setPages] = useState(["1", "2", "3", , "...", "8", "9", "10"]);
  const [currentPage, setCurrentPage] = useState("1");

  return (
    <div className="max-w-screen-xl mx-auto mt-12 px-4 text-gray-600 md:px-8">
      <div className="hidden justify-between text-sm md:flex">
        <div className="flex items-center gap-12" aria-label="Pagination">
          <a href="javascript:void(0)" className="hover:text-[#BE0CE7]">
            Previous
          </a>
          <ul className="flex items-center gap-1">
            {pages.map((item, idx) => (
              <li key={item}>
                {item == "..." ? (
                  <div>{item}</div>
                ) : (
                  <a
                    href="javascript:void(0)"
                    aria-current={currentPage == item ? "page" : false}
                    className={`px-3 py-2 rounded-lg duration-150 hover:text-white hover:bg-[#BE0CE7] ${
                      currentPage == item
                        ? "bg-[#BE0CE7] text-white font-medium"
                        : ""
                    }`}
                  >
                    {item}
                  </a>
                )}
              </li>
            ))}
          </ul>
          <a href="javascript:void(0)" className="hover:text-[#BE0CE7]">
            Next
          </a>
        </div>
      </div>
      {/* On mobile version */}
      <div className="flex items-center justify-between text-sm text-gray-600 font-medium md:hidden">
        <a
          href="javascript:void(0)"
          className="px-4 py-2 border rounded-lg duration-150 hover:bg-gray-50"
        >
          Previous
        </a>
        <div className="font-medium"> 1-10 OF 120</div>
        <a
          href="javascript:void(0)"
          className="px-4 py-2 border rounded-lg duration-150 hover:bg-gray-50"
        >
          Next
        </a>
      </div>
    </div>
  );
};
