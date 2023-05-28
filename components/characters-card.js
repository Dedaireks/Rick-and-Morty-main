import Image from "next/image";
import React from "react";

export const CharactersCard = ({ name, species, image }) => {
  return (
    <div style={{
        display: "flex",
        width: '240',
        height:'224',
        flexDirection: "column",
        gap: "4px",
        boxShadow: '0px 1px 5px rgba(0, 0, 0, 0.2), 0px 3px 4px rgba(0, 0, 0, 0.12), 0px 2px 4px rgba(0, 0, 0, 0.14)',
        borderRadius: "4px"}}>
      <Image src={image} width='240' height='240' style={{borderRadius:'8px 8px 0px 0px'}}/>
      <span style={{color:'rgba(0, 0, 0, 0.87)',width:'min-content'}}>{name}</span>
      <span style={{color:'#00000099',width:'min-content'}}>{species}</span>
    </div>
  );
};
