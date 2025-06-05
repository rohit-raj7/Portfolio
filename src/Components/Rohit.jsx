// // import React from 'react';
// // import { assets } from '../assets/assets';

// // function Rohit() {
// //   return (
// //     <div className="flex items-center justify-center ">
// //       <div className="relative w-64 h-64">
        
// //         <div className="absolute inset-0 bg-blue-300 rotate-6 rounded-lg shadow-lg scale-110"></div>
// //         <div className="absolute inset-0 bg-blue-400 rotate-3 rounded-lg shadow-md scale-105"></div>
        
// //         <img 
// //           src={assets.rohit_img} 
// //           alt="A paper boat floating on water" 
// //           className="relative w-full h-full object-cover rounded-lg shadow-xl"
// //         />
        
// //       </div>
// //     </div>
// //   );
// // }

// // export default Rohit;



import React from 'react';
import { assets } from '../assets/assets';

function Rohit() {
  return (
    <div className="flex items-center justify-cente">
      <div className="relative w-64 h-64 md:w-72 md:h-72">  
        <div className="absolute inset-0 bg-blue-300 rotate-6 rounded-lg shadow-lg scale-110"></div>
        <div className="absolute inset-0 bg-blue-400 rotate-3 rounded-lg shadow-md scale-105"></div>
        
        <img 
          src={assets.rohit_img} 
          alt="A paper boat floating on water" 
          className="relative w-full h-full object-cover rounded-lg shadow-xl"
        />
      </div>
    </div>
  );
}

export default Rohit;








