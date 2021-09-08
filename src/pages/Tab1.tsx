import { IonContent, IonPage, useIonViewWillEnter } from "@ionic/react";
import "./Tab1.css";
import { Slider } from "../components/Slider";
import { Header } from "../components/Header";
import { SkeletonHome } from "../components/SkeletonHome";
import { Refresher } from "../components/Refresher";
import { useEffect } from "react";
import { BannerAd, AdMobPlus, InterstitialAd } from "@admob-plus/capacitor";
type Tab1Type = {
  item: any;
};
const Tab1: React.FC<Tab1Type> = ({ item }) => {
  /*const banner = new BannerAd({
    adUnitId: "ca-app-pub-3940256099942544/6300978111",
    position: "top",
  });*/
  //const scroll = useRef<HTMLIonContentElement | null>(null);
  /*(async () => {
    const interstitial = new InterstitialAd({
      adUnitId: 'ca-app-pub-3940256099942544/1033173712',
    })
    await interstitial.load()
    await interstitial.show()
  })()*/

  useEffect(() => {
    /*document.addEventListener("deviceready", async () => {
      await banner.show();
    });
    */

  }, []);

  useIonViewWillEnter(() => {
    item.current && item.current.scrollToTop(1000);
  });
  return (
    <IonPage id="root">
      <Header />
      <IonContent ref={item} scrollEvents={true} fullscreen>
        <Refresher />
        <Slider />
        <SkeletonHome />
      </IonContent>
    </IonPage>
  );
};

export default Tab1;
