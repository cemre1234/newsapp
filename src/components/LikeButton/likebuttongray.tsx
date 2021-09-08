import { IonImg, useIonViewDidEnter } from "@ionic/react";
import { useEffect, useRef, useState } from "react";
import { getSavedStatus } from "../../services/saved/getSavedStatus";
import { toggleSavedNew } from "../../services/saved/toggleSavedNew";
import { DataItem } from "../../transfertypes/DataItem";

import "./index.css";

type LikeButtonProps = {
  data?: DataItem;
};

export const LikeButtonGray: React.FC<LikeButtonProps> = ({ data }) => {
  const [status, setStatus] = useState(data ? getSavedStatus(data.id) : false);
  const isMounted = useRef(true);

  useEffect(() => {
    isMounted.current = true;
    (async () => {
      if(data){
        const x = await getSavedStatus(data.id);
        if (isMounted.current) {
          if (data) setStatus(x);
        }
      }
    })();
    return () => {
      isMounted.current = false;
    };
  }, [data]);

  useIonViewDidEnter(() => {
    if (data) setStatus(getSavedStatus(data.id));
  });

  return (
    <IonImg
      onClick={() => {
        if (data === undefined) return;
        const lastStatus = toggleSavedNew(data);
        setStatus(lastStatus);
      }}
      className="detailscreen-heart-icon-bigpicture"
      id={`heart-icon`}
      src={
        status
          ? "/assets/icon/heart-red.svg"
          : "/assets/icon/heart2.svg"
      }
    />
  );
};
