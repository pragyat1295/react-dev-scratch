// import React from "react";
// import ReactDOM from "react-dom/client";
// import './index.css';

// // We have 2 ways to apply css:

// /*
// a) Use style object in the js file
// b) or use the className and use this className in your css file.

// */

// // const styleObj = {
// //   background: 'red',
// // }

// const Header = () => {
//   return (
//     <div
//     //  style={styleObj}
//      >
//       <h1>Header </h1>
//     </div>
//   );
// };

// // Config Driven UI: You can design your frontend that what should be appear on the different places
//   // based on their configure is called config driven UI.

//   // ------------ How config driven UI looks -------------

//   const config = [
//     {
//       type: 'carousel',
//       cards: [
//         {
//           offerName: '50% off',
//         },
//         {
//           offerName: 'No delivery fee',
//         },
//       ]
//     },

//     {
//       type: 'restaurents',
//       cards: [
//         {
//           restaruntName: 'Burger king',
//           imgTag: 'https://abc.com',
//           star: '4.2',
//         },
//         {
//           restaruntName: 'Pizza King',
//           imgTag: 'https://def.com',
//           star: '4.2',
//         },
//       ]
//     }
//   ]

//   // if we don't have one of these objects like offer/restarunts so, it woun't come to our frontend.
//   // Everything will be handled by the backend.
//   // ========================================================================================================

// const Body = () => {
//   return (
//     <div
//     //  style={styleObj}
//      >
//       <h1>Body </h1>
//     </div>
//   );
// };

// const Footer = () => {
//   return (
//     <div
//     //  style={styleObj}
//      >
//       <h1>Footer </h1>
//     </div>
//   );
// };



// const App = () => {
//   // <> this symbol is called react fragment. It will used to avoide unnecessary parent div inside your root.
//   return (
//     <> 
//       <Header/>
//       <Body/>
//       <Footer/>
//     </>
//   );
// };


// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(<App />);