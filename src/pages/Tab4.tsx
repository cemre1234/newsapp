import {
  IonContent,
  IonPage,
  IonRow,
} from "@ionic/react";
import { Header } from "../components/Header";
import { SavedNews } from "../components/SavedNews";
import { GetSavedItems} from "../services/saved/getSavedStatus";
import "./Tab4.css";

const Tab3: React.FC = () => {
  const variables = GetSavedItems();
  return (
    <IonPage>
      <Header />
      <IonContent fullscreen>
        <IonRow className="saved-wrapper">
            {variables.length > 0 ?variables.map((item,index) => {
              console.log(item);
               return <SavedNews key={index} match={item} item={item} />
            })
            : <span className="saved-span ion-text-center">Kayıtlı Haber Yok</span>
            }
        </IonRow>
      </IonContent>
    </IonPage>
  );
};

export default Tab3;
