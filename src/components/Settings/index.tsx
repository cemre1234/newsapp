import React from "react";
import {
  IonRow,
  IonCol,
  IonPage,
  IonContent,
  IonHeader,
  IonImg,
} from "@ionic/react";
import "./index.css";
import { Header } from "../Header";
import { TitleComponent } from "../LeftPictureComponent/title";
import { ToggleExamples } from "./toggle";
import { About } from "./about";
type SettingsProps = {
  label: string;
};
export const SettingsComponent: React.FC<SettingsProps> = ({ label }) => (
  <IonPage>
    <Header />
    <IonContent fullscreen>
      <IonHeader className="settings">
        <TitleComponent title="Settings" />
      </IonHeader>
      <ToggleExamples />
      <IonHeader className="settings">
        <TitleComponent title="About" />
      </IonHeader>
      <About />
      <IonRow className="settings-social">
        <IonCol className="ion-text-center">
          <IonImg
            className="settings-social-icon"
            src="/assets/icon/facebook.svg"
          ></IonImg>
          <IonImg
            className="settings-social-icon"
            src="/assets/icon/twitter.svg"
          ></IonImg>
          <IonImg
            className="settings-social-icon"
            src="/assets/icon/whatsapp.svg"
          ></IonImg>
          <IonImg
            className="settings-social-icon"
            src="/assets/icon/share-blue.svg"
          ></IonImg>
        </IonCol>
      </IonRow>
    </IonContent>
  </IonPage>
);
