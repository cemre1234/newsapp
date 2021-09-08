import {
  IonImg,
  useIonViewDidEnter,
} from "@ionic/react";
import { useEffect, useState } from "react";
import { getSavedStatus } from "../../services/saved/getSavedStatus";
import { toggleSavedNew } from "../../services/saved/toggleSavedNew";
import { DataItem } from "../../transfertypes/DataItem";

import "./index.css";

type LikeButtonProps = {
  data?: DataItem;
};

export const LikeButton: React.FC<LikeButtonProps> = ({ data }) => {
  const [status, setStatus] = useState(data ? getSavedStatus(data.id) : false);

  useEffect(() => {
    if (data) setStatus(getSavedStatus(data.id));
  }, [data]);

  useIonViewDidEnter(() => {
    console.log('ionViewDidEnter event fired');
  });

  return (
    <IonImg
      onClick={() => {
        if (data === undefined) return;
        const lastStatus = toggleSavedNew(data);
        setStatus(lastStatus);
      }}
      className="detailscreen-heart-icon"
      id={`heart-icon`}
      src={
        status
          ? "/assets/icon/heart-red-icon-detail.svg"
          : "/assets/icon/heart-icon-detail.svg"
      }
    />
  );
};
