import { useIonViewDidEnter } from "@ionic/react";
import { useEffect, useState } from "react";
import { SavedNewsStorageKey } from "../../appconstants";

export const getSavedStatus = (id: number) => {
  let savedLocal = localStorage.getItem(SavedNewsStorageKey);
  if (savedLocal) {
    const parsedLocal = JSON.parse(savedLocal) as Array<any>;
    return (
      parsedLocal.filter((item) => {
        return item.id === id;
      }).length > 0
    );
  }
  return false;
};

export const GetSavedItems = () => {
  const [savedValue, setSavedValue] = useState([]);
  useEffect(() => {
    setData();
  }, []);
  const setData = () => {
    const sp = localStorage.getItem(SavedNewsStorageKey);
    if (sp) {
      const parsedLocal = JSON.parse(sp);
      setSavedValue(parsedLocal);
    }
  };
  useIonViewDidEnter(() => {
    setData();
  });
  return savedValue;
};
