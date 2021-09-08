import React, { useEffect, useState } from "react";
import {
  IonMenu,
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
  IonList,
} from "@ionic/react";
import { getCategories } from "../../services/home/getCategories";
import { ServiceResponse } from "../../transfertypes/ServiceResponse";
import { CategoryItem } from "../../transfertypes/CategoryItem";
import { MenuListItem } from "./MenuListItem";

export const Menu: React.FC = () => {
  const [categories, setCategories] = useState<Array<CategoryItem>>([]);

  useEffect(() => {
    getCategories().then((result: ServiceResponse<Array<CategoryItem>>) => {
      console.log("result.data", result.data);
      if (result.success) setCategories(result.data);
    });
  }, []);
return (
  <IonMenu side="start" contentId="maincontent">
    <IonHeader>
      <IonToolbar color="primary">
        <IonTitle>Start Menu</IonTitle>
      </IonToolbar>
    </IonHeader>
    <IonContent>
      <IonList>
        {categories.map((item) => (
          <MenuListItem key={`categoryItem${item.id}`} item={item} />
        ))}
      </IonList>
    </IonContent>
  </IonMenu>
);
}

