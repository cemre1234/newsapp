import React from "react";
import {  IonRouterLink } from "@ionic/react";
import "./index.css";
import { CategoryItem } from "../../transfertypes/CategoryItem";
import { useHistory } from "react-router";

type CategoryListItemProps = {
  item: CategoryItem;
};
export const CategoryListItem: React.FC<CategoryListItemProps> = ({ item }) => {
  const history = useHistory();
  return (
    <IonRouterLink
      onClick={() => {
        history.push(`/list/${item.id}`, { item: item });
      }}
      routerDirection="forward"
    >
      <div className="category-item">
        <div
          className="category-image"
          style={{
            width: window.innerWidth,
            height: 100,
            backgroundImage: `url(${item.thumbnail})`,
          }}
        />
        <div
          className="category-gradient"
          style={{
            width: window.innerWidth - 20,
            height: 50,
          }}
        >
          <p className="category-label">{item.name}</p>
        </div>
      </div>
    </IonRouterLink>
  );
};
