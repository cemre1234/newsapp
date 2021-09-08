import { IonRow, IonCol, IonImg } from "@ionic/react";
import { Social } from "./socialShare";
type SocialTypes = {
  message: string,
  image: string,
  url: string,
  subject: string,
  file: string[] | undefined,
}
export const SocialShareButtons: React.FC<SocialTypes> = ({message, image, subject, file, url}) => {
  const socialshare = new Social();
  return (
    <IonRow>
      <IonCol className="ion-text-center">
        <IonImg
          onClick={() => socialshare.socialShareFacebook(message, image, url)}
          className="detailscreen-social-icon"
          src="/assets/icon/facebook.svg"
        ></IonImg>
        <IonImg
          onClick={() => socialshare.socialShareTwitter(message, image, url)}
          className="detailscreen-social-icon"
          src="/assets/icon/twitter.svg"
        ></IonImg>
        <IonImg
          onClick={() => socialshare.socialShareWhatsApp(message, image, url)}
          className="detailscreen-social-icon"
          src="/assets/icon/whatsapp.svg"
        ></IonImg>
        <IonImg
          onClick={() => socialshare.socialShare(message, subject, file, url)}
          className="detailscreen-social-icon"
          src="/assets/icon/share-blue.svg"
        ></IonImg>
      </IonCol>
    </IonRow>
  );
};
