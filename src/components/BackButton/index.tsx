import React from 'react';
import { IonBackButton, IonHeader, IonToolbar, IonButtons } from '@ionic/react';
import './index.css';
export const BackButton: React.FC = () => (

    <IonHeader className="backbutton">
      <IonToolbar className="backbutton-toolbar">
        <IonButtons slot="start">
          <IonBackButton defaultHref="./tab1" />
        </IonButtons>
      </IonToolbar>
    </IonHeader>

);