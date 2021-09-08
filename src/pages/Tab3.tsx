import {
  IonContent,
  IonPage,
} from "@ionic/react";
import { Header } from "../components/Header";
import { SettingsComponent } from "../components/Settings";
import "./Tab3.css";

const Tab3: React.FC = () => {
  return (
    <IonPage>
      <Header />
      <IonContent fullscreen>
        <SettingsComponent label="Settings"/>
      </IonContent>
    </IonPage>
  );
};

export default Tab3;
