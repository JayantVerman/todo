module.exports.getDate=function (){
    const today = new Date();

const options = {
  weekday: "long",
  day: "numeric",
  month: "long",
};

return today.toLocaleDateString("en-US", options);
}

//second way to exports and function decleration

// module.exports.getDate=getDate;
// let getDate=function (){
//     let today = new Date();

// let options = {
//   weekday: "long",
//   day: "numeric",
//   month: "long",
// };

// return today.toLocaleDateString("en-US", options);
// }

exports.getDate=function (){   //its called anonymous function
    const today = new Date();

const options = {
  weekday: "long",
  day: "numeric",
  month: "long",
};

return today.toLocaleDateString("en-US", options);
}

//third way to exports and function decleration

// module.exports.getDay=function (){
//     let today = new Date();

// let options = {
//   weekday: "long",

// };

// return today.toLocaleDateString("en-US", options);

// }


