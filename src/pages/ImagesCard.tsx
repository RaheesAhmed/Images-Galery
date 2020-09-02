import React from 'react';
import { IonMenu,IonPage,IonFabButton, IonHeader, IonCard,IonRow,IonToolbar,IonImg,IonFab,IonFabList, IonTitle, IonContent, IonList, IonItem, IonRouterOutlet } from '@ionic/react';



const ImagesCard: React.FC = () => {
    return (

<IonPage>






<IonCard>
        
            
              <IonImg
                src={
                  "https://img1.mashed.com/img/uploads/2017/06/fruit-main.jpg"
                }
              />
        
          </IonCard>
          <IonCard>
     
           
            <IonImg
              src={"https://img1.mashed.com/img/uploads/2017/06/fruit-main.jpg"}
            />
      
          </IonCard>
         <IonCard>
         
            <IonImg
              src={"https://img1.mashed.com/img/uploads/2017/06/fruit-main.jpg"}
            />
         
         </IonCard>
         </IonPage>

    );
            }
        export default ImagesCard;