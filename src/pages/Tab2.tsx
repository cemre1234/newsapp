import {
  IonContent,
  IonPage,
} from "@ionic/react";
import { useEffect, useState } from "react";
import { CategoryListItem } from "../components/CategoryListItem";
import { Header } from "../components/Header";
import { getCategories } from "../services/home/getCategories";
import { CategoryItem } from "../transfertypes/CategoryItem";
import { ServiceResponse } from "../transfertypes/ServiceResponse";
import "./Tab2.css";

const Tab2: React.FC = () => {
  const [categories, setCategories] = useState<Array<CategoryItem>>([]);

  useEffect(() => {
    getCategories().then((result: ServiceResponse<Array<CategoryItem>>) => {
      console.log("result.data", result.data);
      if (result.success) setCategories(result.data);
    });
  }, []);


  return (
    <IonPage>
      <Header />
      <IonContent fullscreen>
        {categories.map((item) => (
          <CategoryListItem key={`categoryItem${item.id}`} item={item} />
        ))}
      </IonContent>
    </IonPage>
  );
};

export default Tab2;
