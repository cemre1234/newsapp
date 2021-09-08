import React, { useEffect, useState } from "react";
import {
  IonPage,
  IonContent,
} from "@ionic/react";
import "./index.css";
import { Bigimage } from "./bigimage";
import { Header } from "../Header";
import { BackButton } from "../BackButton";
import { SkeletonTextList } from "../SkeletonList";
import { CategoryItem } from "../../transfertypes/CategoryItem";
import { useHistory } from "react-router";
import { ServiceResponse } from "../../transfertypes/ServiceResponse";
import { getSingleCategoryData } from "../../services/home/getSingleCat";
import { Refresher } from "../Refresher";
type ListProps = {
  match: any;
  item: CategoryItem
};
export const List: React.FC<ListProps> = ({ match, item}) => {
  const history = useHistory<{ item: { thumbnail: string, name: string } }>();
  const [category ,setCategory] = useState<CategoryItem>();

  useEffect(() => {
    getSingleCategoryData(match.params.id).then((result: ServiceResponse<CategoryItem>) => {
      console.log("result.data", result.data);
      if (result.success) setCategory(result.data);
    });
  }, [match.params.id]);
  return (
    <IonPage>
      <Header />
      <IonContent fullscreen>
        <BackButton />
        <Bigimage name={category?.name ? category.name: ''} image={category?.thumbnail ? category.thumbnail: ''} />
        <Refresher />

        <SkeletonTextList id={match.params.id} />
      </IonContent>
    </IonPage>
  );
};
