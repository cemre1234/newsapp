import React from "react";
import {
  IonHeader,
  IonToolbar,
  IonButtons,
  IonTitle,
  IonIcon,
  IonMenuToggle,
  IonRouterLink,
} from "@ionic/react";
import "./index.css";
type HeaderProps = {
  title?: string;
};

export const Header: React.FC<HeaderProps> = ({ title }) => (
  <IonHeader id="header-menu" className="menu-header">
    <IonToolbar>
      <IonButtons slot="start">
        <IonMenuToggle>
          <IonIcon name="menu-outline"></IonIcon>
        </IonMenuToggle>
      </IonButtons>
      <IonRouterLink routerLink="../tab1" routerDirection="forward">
        <IonTitle>
          <img className="logo" src="/assets/logo.png" />
        </IonTitle>
      </IonRouterLink>
    </IonToolbar>
  </IonHeader>
);
/*
        <IonMenuButton  />
*/
