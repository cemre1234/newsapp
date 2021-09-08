import React from "react";
import "./bigimage.css";
type BigimageProps = {
  image: string,
  name:string,
}
export const Bigimage: React.FC<BigimageProps> = ({image,name}) => {
  return (
    <div className="bigimage">
      <div
        className="big-image"
        style={{
          width: window.innerWidth,
          height: 92,
          backgroundImage: `url(${image})`,
        }}
      />
      <div
        className="bigimage-gradient"
        style={{
          width: window.innerWidth,
          height: 92,
        }}
      >
        <h3 className="bigimage-title">{name}</h3>
      </div>
    </div>
  );
};
