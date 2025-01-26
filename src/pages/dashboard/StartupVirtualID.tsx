import React from 'react';

export const StartupVirtualID: React.FC = () => {
  return (
    <div className="max-w-5xl mx-auto px-4 py-8">
      <div className="mb-8">
        <h1 className="text-2xl font-bold text-gray-900">View Virtual ID's</h1>
        <p className="text-sm text-gray-600">We are glad to see you again</p>
      </div>

      <div className="bg-white rounded-lg shadow-lg p-8 relative">
        {/* Virtual ID Badge */}
        <div className="absolute top-8 left-8">
          <span className="bg-green-500 text-white px-6 py-3 rounded-lg text-lg">
            Virtual ID
          </span>
        </div>

        {/* Header */}
        <div className="text-center mt-16 mb-12">
          <h2 className="text-3xl font-bold mb-2">Sathyabama Technology Business Incubator</h2>
          <p className="text-gray-600 text-lg">Jeppiaar Nagar, Rajiv Gandhi Road, Chennai, Tamil Nadu, 600119, India</p>
        </div>

        {/* Info Section */}
        <div className="grid grid-cols-3 gap-8 mb-12">
          <div>
            <p className="text-gray-600 mb-1">Startup Name:</p>
            <p className="text-2xl font-bold">Weebsitestudio</p>
          </div>
          <div>
            <p className="text-gray-600 mb-1">Founder Name:</p>
            <p className="text-2xl font-bold">Dharinish R</p>
          </div>
          <div>
            <p className="text-gray-600 mb-1">Founder's Place:</p>
            <p className="text-2xl font-bold">Chennai, Tamil Nadu</p>
          </div>
        </div>

        {/* Profile Image Section with Dotted Lines */}
        <div className="relative flex items-center justify-center mb-12">
          <div className="absolute w-full border-t border-dashed border-gray-300" style={{ zIndex: 0 }}></div>
          <div className="relative z-10">
            <div className="w-40 h-40 rounded-full overflow-hidden bg-gray-200 border-4 border-white shadow-lg">
              <img
                src="/path-to-profile-image.jpg"
                alt="Profile"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>

        {/* Dates Section */}
        <div className="flex justify-between mb-12">
          <div>
            <p className="text-gray-600 mb-1">Booked on</p>
            <p className="text-2xl font-bold">09.11.2024</p>
          </div>
          <div className="text-right">
            <p className="text-gray-600 mb-1">Validity till</p>
            <p className="text-2xl font-bold">09.12.2024</p>
          </div>
        </div>

        {/* Footer Section */}
        <div className="flex justify-between items-center">
          <div className="flex-1">
            <p className="text-gray-600 mb-1">Approved For:</p>
            <p className="text-xl font-bold">Meeting Room</p>
          </div>
          <div className="flex-1 flex justify-center">
            <img
              src="/qr-code.png"
              alt="QR Code"
              className="w-28 h-28"
            />
          </div>
          <div className="flex-1 flex justify-end">
            <img
              src="/approved-stamp.png"
              alt="Approved"
              className="w-28 h-28"
            />
          </div>
        </div>

        {/* Approval Banner */}
        <div className="mt-8 bg-green-50 p-4 rounded-lg">
          <div className="flex items-center justify-center space-x-4">
            <p className="text-gray-700 text-lg">
              <span className="font-medium">Approved For:</span> Meeting Room
              <span className="mx-4">|</span>
              <span className="font-medium">Approved by:</span> Sathyabama Technology Business Incubator
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};


// import React from "react";

// const StartupVirtualID: React.FC = () => {
//   return (
//     <div className="w-[600px] mx-auto bg-white shadow-lg rounded-lg border border-gray-300">
//       <div className="p-6 flex flex-col">
//         <div className="flex justify-between items-center">
//           <div>
//             <h2 className="text-xl font-bold text-gray-800">Sathyabama Technology Business Incubator</h2>
//             <p className="text-sm text-gray-600">Jeppiaar Nagar, Rajiv Gandhi Road, Chennai, Tamil Nadu, 600119, India</p>
//           </div>
//           <div>
//             <span className="px-3 py-1 text-sm font-semibold text-white bg-green-600 rounded-full">Virtual ID</span>
//           </div>
//         </div>

//         <div className="flex justify-between items-center mt-4">
//           <div>
//             <p className="text-sm font-semibold text-gray-600">Startup Name:</p>
//             <p className="text-lg font-bold text-gray-800">Weebsitestudio</p>
//           </div>
//           <div className="flex flex-col">
//             <p className="text-sm font-semibold text-gray-600">Founder Name:</p>
//             <p className="text-lg font-bold text-gray-800">Dharinish R</p>
//           </div>
//           <div className="flex flex-col">
//             <p className="text-sm font-semibold text-gray-600">Founder's Place:</p>
//             <p className="text-lg font-bold text-gray-800">Chennai, Tamil Nadu</p>
//           </div>
//         </div>

//         <div className="flex items-center justify-between mt-6">
//           <div>
//             <p className="text-sm font-semibold text-gray-600">Booked on:</p>
//             <p className="text-lg font-bold text-gray-800">09.11.2024</p>
//           </div>
//           <div className="w-20 h-20 rounded-full overflow-hidden border-2 border-gray-300">
//             <img
//               src="https://via.placeholder.com/150"
//               alt="Founder"
//               className="w-full h-full object-cover"
//             />
//           </div>
//           <div>
//             <p className="text-sm font-semibold text-gray-600">Validity till:</p>
//             <p className="text-lg font-bold text-gray-800">09.12.2024</p>
//           </div>
//         </div>

//         <div className="mt-6 flex justify-between items-center">
//           <div>
//             <p className="text-sm font-semibold text-gray-600">Approved For:</p>
//             <p className="text-lg font-bold text-gray-800">Meeting Room</p>
//           </div>
//           <div>
//             <p className="text-sm font-semibold text-gray-600">Approved by:</p>
//             <p className="text-lg font-bold text-gray-800">Sathyabama Technology Business Incubator</p>
//           </div>
//         </div>

//         <div className="flex justify-between items-center mt-4">
//           <div>
//             <div className="w-16 h-16">
//               <img
//                 src="https://via.placeholder.com/150"
//                 alt="QR Code"
//                 className="w-full h-full object-cover"
//               />
//             </div>
//           </div>
//           <div className="text-red-600 font-bold text-sm">APPROVED</div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default StartupVirtualID;