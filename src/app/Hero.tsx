<<<<<<< HEAD
// // import Search from "./Elements/page";
// import HeroPageDetails from "./HeroPageDetails";

// export default function Hero() {
//   return (

//     // <div className="relative overflow-x-hidden overflow-y-hidden w-full h-[235px] md:h-[235px] lg:h-[235px] bg-gray-100 ">
//     //   <div className=" before:absolute  before:top-[0px] before:w-[100%] gap-14 before:left-0 before:bg-[#53f] flex  before:rounded-[90%] z-10 before:h-[450px] before:scale-[3] before:translate-y-[-150%]">
        
//   // <div className="z-0  mx-auto">
//           <HeroPageDetails/>
//           {/* <Search/> */}
//       // </div>
      
// //   </div>
// // </div>
//   );
// }
=======
export default function Home() {
  return (
    <div className="">
      <div className="container text-white mx-auto px-4 py-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div className="text-left">
            <h1 className="font-bold text-3xl text-justify md:text-4xl lg:text-6xl font-roboto">
              Welcome to <br />
              <span className="text-pink-500">ShypBuddy.com</span>
            </h1>
            <p className="text-base py-2 text-justify md:text-lg">
            
            ShypBuddy is a leading logistics aggregator dedicated to simplifying shipping solutions for businesses of all sizes. Our platform connects merchants with a network of trusted carriers, offering seamless and cost-effective shipping options worldwide.
          
          
            Whether you're an e-commerce store shipping products to customers, a small business sending packages to suppliers, or a large enterprise managing complex logistics operations, ShypBuddy has you covered. Say goodbye to the hassle of comparing rates, managing multiple carrier accounts, and tracking shipments across different platforms.
         
            </p>
          </div>
          <div className="md:px-6">
            <p className="py-1 px-5">How we can Help you ?</p>
            <input
              type="text"
              placeholder="Search"
              className="w-full px-10 py-2 rounded-full bg-white text-gray-800 focus:outline-none focus:ring-2 focus:ring-purple-600 transition-colors duration-300 shadow-md hover:shadow-lg focus:shadow-lg"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
>>>>>>> bdd12310aabe1648fe166bc0612b416d61ef061a
