import React, { useState } from "react";
import { IonList, IonItem, IonLabel, IonIcon } from "@ionic/react";
import "./about.css";
import { Capacitor } from "@capacitor/core";
import {
  hakkimizda,
  license,
  privacy_policy,
  contact_us,
} from "../../appconstants";
import { chevronForward } from "ionicons/icons";

export const About: React.FC = () => {
  const [checked, setChecked] = useState(false);
  const hakkimizda_url = Capacitor.convertFileSrc(hakkimizda);
  const privacy_policy_url = Capacitor.convertFileSrc(privacy_policy);
  const license_url = Capacitor.convertFileSrc(license);
  const contact_us_url = Capacitor.convertFileSrc(contact_us);
  return (
    <IonList>
      <IonItem key="1" class="ion-no-padding about-settings">
        <a className="label-href" href={hakkimizda_url}>
          <IonIcon icon={chevronForward} />
          <IonLabel className="toggle-label">About Us</IonLabel>
        </a>
      </IonItem>

      <IonItem key="2" class="ion-no-padding about-settings">
        <a className="label-href" href={privacy_policy_url}>
          <IonIcon icon={chevronForward} />

          <IonLabel className="toggle-label">Privacy Policy</IonLabel>
        </a>
      </IonItem>

      <IonItem key="3" class="ion-no-padding about-settings">
        <a className="label-href" href={license_url}>
          <IonIcon icon={chevronForward} />

          <IonLabel className="toggle-label">Licence</IonLabel>
        </a>
      </IonItem>

      <IonItem
        key="4"
        routerDirection="forward"
        class="ion-no-padding about-settings"
      >
        <a className="label-href" href={contact_us_url}>
          <IonIcon icon={chevronForward} />

          <IonLabel className="toggle-label">Contact Us</IonLabel>
        </a>
      </IonItem>
    </IonList>
  );
};
