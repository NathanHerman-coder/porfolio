import React from "react";
function SkillsCard(props) {
 
 return (
  <div className="bg-gray-800 p-10 text-blue-200 flex flex-col  items-center m-5 rounded-lg">
    <h2 className="font-bold text-2xl text-center">{props.name}</h2>
    <p className="font-semibold text-[0.75rem] ">{props.description}</p>
  </div>
 )
}
export default SkillsCard