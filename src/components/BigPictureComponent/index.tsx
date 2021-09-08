import React from "react";
import {
  IonRouterLink,
  IonRow,
  IonCol,
  IonThumbnail,
  IonLabel,
  IonText,
} from "@ionic/react";
import "./index.css";
import { DataItem } from "../../transfertypes/DataItem";
import { useHistory } from "react-router";
import { LikeButtonGray } from "../LikeButton/likebuttongray";

type BigComponentProps = {
  item: DataItem;
};
export const BigPictureComponent: React.FC<BigComponentProps> = ({ item }) => {
  const history = useHistory();

  return (
    <IonRow className="bigcomponent ">
      <IonCol className="bigcomponent-innerwrapper ion-background-color">
        <IonRouterLink
          routerLink={`/detail/${item.id}`}
          routerDirection="forward"
        >
          <IonThumbnail className="big-thumbnail">
            {item.video === undefined ? (
              <img className="bigcomponent-picture" src={item.image_url} />
            ) : (
              <>
                <div className=" bigpicture-video"></div>
                <img className="bigcomponent-picture " src={item.image_url} />
              </>
            )}
          </IonThumbnail>
        </IonRouterLink>

        <IonRow>
          <IonCol>
            <div className="ion-text-left category-title">
              <IonRouterLink
                onClick={() => {
                  history.push(`/list/${item.categories}`, { item: item });
                }}
              >
                <IonLabel className="bigpicture-label">
                  {item.category}
                </IonLabel>
              </IonRouterLink>
            </div>
          </IonCol>
          <IonCol>
            <LikeButtonGray data={item} />
          </IonCol>
        </IonRow>
        <IonRouterLink
          routerLink={`/detail/${item.id}`}
          routerDirection="forward"
        >
          <IonRow>
            <IonCol>
              <IonText className="content">
                <h3>{item.title}</h3>
              </IonText>
              <div className="ion-text-left category-date">
                {item.agophrase}
              </div>
            </IonCol>
          </IonRow>
        </IonRouterLink>
      </IonCol>
    </IonRow>
  );
};
