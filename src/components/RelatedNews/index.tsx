import React from "react";
import {
  IonRouterLink,
  IonRow,
  IonCol,
  IonLabel,
  IonText,
} from "@ionic/react";
import "./index.css";
import { DataItem } from "../../transfertypes/DataItem";
type RelatedNewsComponent = {
  id: number;
  item: DataItem;
  subtitle: string;
  title: string;
  content: string;
  category: string;
};
export const RelatedNews: React.FC<RelatedNewsComponent> = ({
  id,
  title,
  subtitle,
  item,
  content,
  category,
}) => {
  return (
    <IonRow className="relatedcomponent">
      <IonCol className="relatedcomponent-innerwrapper">
        <IonRow>
          <IonCol>
            <div className="ion-text-left related-category-title">
              <IonLabel className="relatednews-label">
                <IonRouterLink
                  routerLink={`/list/${item.categories}`}
                  routerDirection="forward"
                >
                  {category}
                </IonRouterLink>
              </IonLabel>
            </div>
          </IonCol>
          <IonCol>
            <div className="ion-text-center related-category-date">
              {subtitle}
            </div>
          </IonCol>
          <IonCol>
            <div className="ion-text-right heart">
              <img src="/assets/icon/heart2.svg" />
            </div>
          </IonCol>
        </IonRow>
        <IonRow>
          <IonCol>
            <IonRouterLink
              routerLink={`/detail/${id}`}
              routerDirection="forward"
            >
              <IonText className="content">
                <h3>{title}</h3>
              </IonText>
            </IonRouterLink>
          </IonCol>
        </IonRow>
      </IonCol>
    </IonRow>
  );
};
