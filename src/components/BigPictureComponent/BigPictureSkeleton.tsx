import React from "react";
import {
  IonRouterLink,
  IonRow,
  IonCol,
  IonThumbnail,
  IonSkeletonText,
} from "@ionic/react";
import "./index.css";
export const BigPictureSkeleton: React.FC = () => {
  return (
    <IonRouterLink routerLink="/detail/1" routerDirection="forward">
      <IonRow className="bigcomponent">
        <IonCol className="bigcomponent-innerwrapper">
          <IonThumbnail className="big-thumbnail">
            <IonSkeletonText animated />
          </IonThumbnail>
          <IonRow>
            <IonCol>
              <div className="ion-text-left category-title">
                <IonSkeletonText animated />
              </div>
            </IonCol>
            <IonCol>
              <div className="ion-text-center category-date">
                <IonSkeletonText animated />
              </div>
            </IonCol>
          </IonRow>
          <IonRow>
            <IonCol>
              <div className="content">
                <IonSkeletonText animated />
                <IonSkeletonText animated />
                <IonSkeletonText animated />
              </div>
            </IonCol>
          </IonRow>
        </IonCol>
      </IonRow>
    </IonRouterLink>
  );
};
