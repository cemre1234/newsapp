import { SavedNewsStorageKey } from "../../appconstants";
import { DataItem } from "../../transfertypes/DataItem";
import { getSavedStatus } from "./getSavedStatus";

export const toggleSavedNew = (dataItem: DataItem): boolean => {
  const savedNews = localStorage.getItem(SavedNewsStorageKey);
  if (savedNews) {
    const parsedNews = JSON.parse(savedNews);
    const isSaved = getSavedStatus(dataItem.id);
    if (isSaved) {
      const newResult = parsedNews.filter(
        (item: DataItem) => item.id !== dataItem.id
      );
      localStorage.setItem(SavedNewsStorageKey, JSON.stringify(newResult));
      return false;
    } else {
      parsedNews.push(dataItem);
      localStorage.setItem(SavedNewsStorageKey, JSON.stringify(parsedNews));
      return true;
    }
  }
  localStorage.setItem(SavedNewsStorageKey, JSON.stringify([dataItem]));
  return true;
};
