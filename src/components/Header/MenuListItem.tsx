import React from "react";
import { IonRouterLink, IonItem, IonButton } from "@ionic/react";
import "./index.css";
import { CategoryItem } from "../../transfertypes/CategoryItem";
import { useHistory } from "react-router";
import { menuController } from "@ionic/core";

type MenuListItemProps = {
  item: CategoryItem;
};
export const MenuListItem: React.FC<MenuListItemProps> = ({ item }) => {
  const history = useHistory();
  return (
    <IonRouterLink
      onClick={() => {
        history.push(`/list/${item.id}`, { item: item });
      }}
      routerDirection="forward"
    >
        <IonItem onClick={async () => await menuController.toggle()}>{item.name}</IonItem>
    </IonRouterLink>
  );
};
