import React from "react";
import {
  IonThumbnail,
  IonLabel,
  IonRow,
  IonCol,
  IonRouterLink,
  IonText,
} from "@ionic/react";
import "./index.css";
import { DataItem } from "../../transfertypes/DataItem";
import { LikeButtonGray } from "../LikeButton/likebuttongray";
type LeftPictureProps = {
  item: DataItem;
};
export const LeftPictureComponent: React.FC<LeftPictureProps> = ({ item }) => {
  return (
      <div className="leftpicturecomponent-innerwrapper ion-background-color">
        <IonRow>
          <IonCol>
            <IonRouterLink
              routerLink={`/detail/${item.id}`}
              routerDirection="forward"
            >
              <IonThumbnail className="left-thumbnail">
              {item.video === undefined ? (
              <img src={item.image_url} />
                ) : (
                  <>
                    <div className=" leftpicturecomponent-video"></div>
                    <img src={item.image_url} />
                  </>
                )}
              </IonThumbnail>
            </IonRouterLink>
          </IonCol>
          <IonCol>
            <IonRow>
              <IonCol aria-colspan={2} className="maxWidth">
                <IonRouterLink
                  routerLink={`/list/${item.categories}`}
                  routerDirection="forward"
                >
                  <IonLabel className="leftpicture-label-first">
                    {item.category}
                  </IonLabel>
                </IonRouterLink>
              </IonCol>
              <IonCol>
                <LikeButtonGray data={item}/>                  
              </IonCol>
            </IonRow>
            <IonRouterLink
              routerLink={`/detail/${item.id}`}
              routerDirection="forward"
            >
              <IonRow>
                <IonCol>
                  <div className="ion-text-start">
                    <IonText class="ion-text-wrap">{item.title}</IonText>
                  </div>
                </IonCol>
              </IonRow>
            </IonRouterLink>

            <IonRow>
              <IonCol>
                <div className="ion-text-start">
                  <span className="leftpicture-span">{item.agophrase}</span>
                </div>
              </IonCol>
            </IonRow>
          </IonCol>
        </IonRow>
      </div>
  );
};
