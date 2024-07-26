import { useState } from "react";

export default () => {
  const [steps, setStep] = useState({
    stepsItems: ["Cart", "Checkout", "Completed"],
    currentStep: 2,
  });

  return (
    <div className="max-w-2xl mx-auto px-4 md:px-0">
      <ul
        aria-label="Steps"
        className="items-center text-gray-400 font-medium md:flex"
      >
        {steps.stepsItems.map((item, idx) => (
          <li
            aria-current={steps.currentStep == idx + 1 ? "step" : false}
            className="flex-1 last:flex-none flex gap-x-2 md:items-center"
          >
            <div className="flex items-center flex-col gap-x-2">
              <div
                className={`w-8 h-8 rounded-full border-2 flex-none flex items-center justify-center ${
                  steps.currentStep > idx + 1
                    ? "bg-[#BE0CE7] border-[#BE0CE7]"
                    : "" || steps.currentStep == idx + 1
                    ? "border-gray-400"
                    : " text-gray-400 "
                }`}
              >
                <span
                  className={` ${
                    steps.currentStep > idx + 1
                      ? "hidden"
                      : "" || steps.currentStep == idx + 1
                      ? "text-gray-400 "
                      : ""
                  }`}
                >
                  {idx + 1}
                </span>
                {steps.currentStep > idx + 1 ? (
                  <h1 className="text-white "> {idx + 1}</h1>
                ) : (
                  ""
                )}
              </div>
              <hr
                className={`h-12 border md:hidden ${
                  idx + 1 == steps.stepsItems.length
                    ? "hidden"
                    : "" || steps.currentStep > idx + 1
                    ? "border-gray-400"
                    : ""
                }`}
              />
            </div>
            <div className="h-8 flex items-center md:h-auto">
              <h3
                className={`text-sm  ${
                  steps.currentStep == idx + 1
                    ? "text-gray-400"
                    : "text-[#BE0CE7]"
                }`}
              >
                {item}
              </h3>
            </div>
            <hr
              className={`hidden mr-2 w-full border md:block ${
                idx + 1 == steps.stepsItems.length
                  ? "hidden"
                  : "" || steps.currentStep > idx + 1
                  ? "border-[#BE0CE7]"
                  : ""
              }`}
            />
          </li>
        ))}
      </ul>
    </div>
  );
};
