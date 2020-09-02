import React from 'react';
import { IonMenu,IonPage,IonFabButton, IonHeader, IonCard,IonRow,IonToolbar,IonImg,IonFab,IonFabList, IonTitle, IonContent, IonList, IonItem, IonRouterOutlet } from '@ionic/react';

import {
  add,
  settings,
  share,
  person,
  arrowForwardCircle,
  arrowBackCircle,
  arrowUpCircle,
  logoVimeo,
  logoFacebook,
  logoInstagram,
  logoTwitter,
  menuOutline,
  camera,
  personCircle, search, star, ellipsisHorizontal, ellipsisVertical
} from "ionicons/icons";
import ImagesCards from './ImagesCard';
const Tab2: React.FC = () => {
  return (
    <IonPage>
     <IonHeader>
<IonToolbar>
  <IonTitle color="primary">Photo Gallery</IonTitle>
</IonToolbar>
</IonHeader>
    
  
      <IonContent>
       
         <ImagesCards /> 
      </IonContent>
    </IonPage>
  );
};

export default Tab2;
