import React from "react";

const InfoPanel = () => {
  return (
    <div className="bg-white rounded-2xl shadow-md p-6 min-h-[180px] flex flex-col justify-center">
      <h2 className="text-xl font-bold mb-3 text-gray-800">Did You Know?</h2>
      <p className="text-base text-gray-600 leading-relaxed">
        Weather forecasting has evolved dramatically using satellites, AI models, and vast climate data.
        Today’s accurate short-term forecasts help communities prepare better, reduce disaster risks, and save lives.
      </p>
    </div>
  );
};

export default InfoPanel;
