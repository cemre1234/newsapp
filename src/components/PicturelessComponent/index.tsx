import React from 'react';
import { IonCard, IonCardHeader, IonCardSubtitle, IonCardTitle, IonCardContent } from '@ionic/react';
type PicturelessProps = {
    subtitle: string,
    title: string,
    content: string
}
export const PicturelessComponent: React.FC<PicturelessProps> = ({title, subtitle, content}) => {
  return (
        <IonCard>
          <IonCardHeader>
            <IonCardSubtitle>{subtitle}</IonCardSubtitle>
            <IonCardTitle>{title}</IonCardTitle>
          </IonCardHeader>

          <IonCardContent>
            {content}
            </IonCardContent>
        </IonCard>
  );
};