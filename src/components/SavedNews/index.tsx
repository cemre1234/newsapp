import React from "react";
import "./index.css";
import { LeftPictureComponent } from "../LeftPictureComponent";
import { DataItem } from "../../transfertypes/DataItem";
type ListProps = {
  match: any;
  item: DataItem;
};
export const SavedNews: React.FC<ListProps> = ({ match, item }) => (
    
      <LeftPictureComponent key={item.id} item={item} />

);
