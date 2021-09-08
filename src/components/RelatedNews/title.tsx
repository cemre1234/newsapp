import React from "react";
import "./title.css";
type TitleProps = {
  title: string;
};
export const RelatedNewsTitleComponent: React.FC<TitleProps> = ({ title }) => {
  return (
    <div className="titlecomponent">
      <div className="titlecomponent-label">
        <div id="title-label" className="title-label">
          {title}
        </div>
      </div>
      <div className="titlecomponent-shape">
        <div className="shape"></div>
      </div>
    </div>
  );
};

