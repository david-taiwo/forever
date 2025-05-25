import React from "react";

const PlaceOrder = () => {
  return (
    <div className="flex flex-col sm:flex-row justify-between gap-4 pt-5 sm:pt-14  min-h-[80vh] border-t">
      {/* -----------Left Side */}
      <div className="flex flex-col gap-4 w-full sm:max-w-[480px]">
        <div className="text-xl sm:text-2xl my-3">
          <Title text1={"DELIVERY"} text2={"INFORMATION"} />
        </div>
        <div className="flex gap-3">
          <input
            className="border border-gray-300 rounded py-1.5"
            type="text"
            placeholder="First Name"
          />
        </div>
      </div>
    </div>
  );
};

export default PlaceOrder;
