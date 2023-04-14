import React from 'react';

const MyButtons = () => {
  return (
    <div className="flex justify-between mx-4">
      <button className="w-1/2 px-4 py-2 mr-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-opacity-50">
        Button 1
      </button>
      <button className="w-1/2 px-4 py-2 ml-2 bg-red-500 text-white rounded-md hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-600 focus:ring-opacity-50">
        Button 2
      </button>
    </div>
  );
};

export default MyButtons;
