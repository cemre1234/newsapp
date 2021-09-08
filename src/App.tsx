import { Redirect, Route } from "react-router-dom";
import {
  IonApp,
  IonContent,
  IonIcon,
  IonLabel,
  IonRouterOutlet,
  IonTabBar,
  IonTabButton,
  IonTabs,
  useIonViewDidEnter,
} from "@ionic/react";
import { IonReactRouter } from "@ionic/react-router";
import Tab1 from "./pages/Tab1";
import Tab2 from "./pages/Tab2";
import Tab3 from "./pages/Tab3";
import Tab4 from "./pages/Tab4";

import { home, apps, person, heart } from "ionicons/icons";

/* Core CSS required for Ionic components to work properly */
import "@ionic/react/css/core.css";

/* Basic CSS for apps built with Ionic */
import "@ionic/react/css/normalize.css";
import "@ionic/react/css/structure.css";
import "@ionic/react/css/typography.css";
import "./core.css";
/* Optional CSS utils that can be commented out */
import "@ionic/react/css/padding.css";
import "@ionic/react/css/float-elements.css";
import "@ionic/react/css/text-alignment.css";
import "@ionic/react/css/text-transformation.css";
import "@ionic/react/css/flex-utils.css";
import "@ionic/react/css/display.css";

/* Theme variables */
import "./theme/variables.css";
import { Menu } from "./components/Header/Menu";
import { DetailScreen } from "./pages/DetailScreen";
import { List } from "./components/List";
import { createRef, useEffect, useRef, useState } from "react";
import OneSignal from 'onesignal-cordova-plugin';

// Call this function when your app starts
/*function OneSignalInit(): void {
  // Uncomment to set OneSignal device logging to VERBOSE  
  // OneSignal.setLogLevel(6, 0);

  // NOTE: Update the setAppId value below with your OneSignal AppId.
  //OneSignal.setAppId("b8ef05bb-a131-4d02-8dde-1a46e93b28f9");
  OneSignal.setNotificationOpenedHandler(function(jsonData) {
      console.log('notificationOpenedCallback: ' + JSON.stringify(jsonData));
  });

  // iOS - Prompts the user for notification permissions.
  //    * Since this shows a generic native prompt, we recommend instead using an In-App Message to prompt for notification permission (See step 6) to better communicate to your users what notifications they will get.
  OneSignal.promptForPushNotificationsWithUserResponse(function(accepted) {
      console.log("User accepted notifications: " + accepted);
  });
}

OneSignalInit();
*/
const App: React.FC = () => {
  const scroll = createRef<HTMLIonContentElement>();
  return (
    <IonApp className="ion-app-side">
      <IonReactRouter>
        <Menu />
        <IonTabs>
          <IonRouterOutlet id="maincontent" animated={true} mode="ios">
            <Route exact path="/tab1"  render={() => {
    return <Tab1 item={scroll}/>}}/>
            <Route exact path="/tab2" component={Tab2} />
            <Route path="/tab3" component={Tab3} />
            <Route path="/tab4" component={Tab4} />
            <Route exact path="/">
              <Redirect to="/tab1" />
            </Route>
            <Route path="/list/:id" component={List} />
            <Route path="/detail/:newid" component={DetailScreen} />
          </IonRouterOutlet>
          <IonTabBar slot="bottom">
            <IonTabButton
              className="tab-button"
              tab="tab1"
              href="/tab1"    
            >
              <IonIcon icon={home} />
              <IonLabel>Home</IonLabel>
            </IonTabButton>
            <IonTabButton className="tab-button" tab="tab2" href="/tab2">
              <IonIcon icon={apps} />
              <IonLabel>Categories</IonLabel>
            </IonTabButton>
            <IonTabButton className="tab-button" tab="tab3" href="/tab3">
              <IonIcon icon={person} />
              <IonLabel>Settings</IonLabel>
            </IonTabButton>
            <IonTabButton className="tab-button" tab="tab4" href="/tab4">
              <IonIcon icon={heart} />
              <IonLabel>Saved</IonLabel>
            </IonTabButton>
          </IonTabBar>
        </IonTabs>
      </IonReactRouter>
    </IonApp>
  );
};

export default App;
