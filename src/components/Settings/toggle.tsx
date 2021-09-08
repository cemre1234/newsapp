import React, { useState } from "react";
import { IonToggle, IonList, IonItem, IonLabel } from "@ionic/react";
import "./toggle.css";
export const ToggleExamples: React.FC = () => {
  const [checked, setChecked] = useState(false);
  const toggleDarkModeHandler = () => document.body.classList.toggle("dark");
  return (
    <IonList>
      <IonItem class="ion-no-padding settings">
        <IonLabel className="toggle-label">Dark Mode</IonLabel>
        <IonToggle
          slot="end"
          name="darkMode"
          onIonChange={toggleDarkModeHandler}
          value="pepperoni"
        />
      </IonItem>

      <IonItem class="ion-no-padding settings">
        <IonLabel className="toggle-label">Notifications</IonLabel>
        <IonToggle value="mushrooms" />
      </IonItem>
    </IonList>
  );
};
