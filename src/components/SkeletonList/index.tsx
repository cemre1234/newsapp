import React, { useEffect, useState } from "react";
import {
  IonInfiniteScroll,
  IonInfiniteScrollContent,
  IonList,
} from "@ionic/react";
import "./index.css";
import { ListSkeleton } from "../List/ListSkeleton";
import { LeftPictureComponent } from "../LeftPictureComponent";
import { DataItem } from "../../transfertypes/DataItem";
import { getCategoriesListData } from "../../services/home/getCategoriesListApi";
import { ServiceResponseLastNews } from "../../transfertypes/ServiceResponseLastNews";
type SkeletonTextListProps = {
  id: number;
};
export const SkeletonTextList: React.FC<SkeletonTextListProps> = ({ id }) => {
  const [listItem, setListItem] = useState<Array<DataItem>>([]);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [totalpage, setTotalPage] = useState<number>(1);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    setIsLoading(true);
    setCurrentPage(1);
    setTotalPage(1);
    setListItem([]);
  }, [id]);

  useEffect(() => {
    if (totalpage >= currentPage) {
      getCategoriesListData(id, currentPage).then(
        (result: ServiceResponseLastNews<Array<DataItem>>) => {
          if (result.success) setListItem((prev) => [...prev, ...result.data]);
          result.xWpTotalpages !== null && setTotalPage(result.xWpTotalpages);
          setIsLoading(false);
        }
      );
    }
  }, [id, currentPage]);

  return (
    <div>
      {listItem.length > 0 && isLoading === false ? (
        <>
          {listItem.map((item, index) => (
            <LeftPictureComponent key={`listitem${index}`} item={item} />
          ))}
          <IonInfiniteScroll
            onIonInfinite={(evt: CustomEvent<void>) => {
              setTimeout(() => {
                if (totalpage >= currentPage) {
                  setCurrentPage(currentPage + 1);
                }
                (evt.target as HTMLIonInfiniteScrollElement).complete();
              }, 200);
            }}
            threshold="100px"
            id="infinite-scroll"
          >
            <IonInfiniteScrollContent
              loading-spinner="bubbles"
              loading-text="Loading more data..."
            ></IonInfiniteScrollContent>
          </IonInfiniteScroll>
        </>
      ) : (
        <>
          <IonList>
            <ListSkeleton />
          </IonList>
        </>
      )}
    </div>
  );
};
