import React from "react";
import {
  IonThumbnail,
  IonItem,
  IonRow,
  IonCol,
  IonSkeletonText,
} from "@ionic/react";
import "./index.css";

export const LeftPictureSkeleton: React.FC = () => (
  <IonItem className="leftpicturecomponent ion-no-padding">
    <div className="leftpicturecomponent-innerwrapper fullwidth">
      <IonRow>
        <IonCol>
          <IonThumbnail className="left-thumbnail-skeleton">
            <IonSkeletonText animated />
          </IonThumbnail>
        </IonCol>
        <IonCol>
          <IonRow>
            <IonCol>
              <IonSkeletonText animated />
            </IonCol>
            <IonCol>
              <IonSkeletonText animated />
            </IonCol>
          </IonRow>
          <IonRow>
            <IonCol>
              <div className="ion-text-start">
                <IonSkeletonText animated />
                <IonSkeletonText animated />
                <IonSkeletonText animated />
                <IonSkeletonText animated />
                <IonSkeletonText animated />
                <IonSkeletonText animated />
              </div>
            </IonCol>
          </IonRow>
        </IonCol>
      </IonRow>
    </div>
  </IonItem>
);
