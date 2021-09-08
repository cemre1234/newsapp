import React, { useEffect, useState } from "react";
import {
  IonInfiniteScroll,
  IonInfiniteScrollContent,
  IonList,
} from "@ionic/react";
import "./index.css";
import { LeftPictureComponent } from "../LeftPictureComponent";
import { TitleComponent } from "../LeftPictureComponent/title";
import { BigPictureComponent } from "../BigPictureComponent";
import { LeftPictureSkeleton } from "../LeftPictureComponent/LeftPictureSkeleton";
import { BigPictureSkeleton } from "../BigPictureComponent/BigPictureSkeleton";
import { getPopularNewsData } from "../../services/home/getPopularNewsData";
import { DataItem } from "../../transfertypes/DataItem";
import { ServiceResponseLastNews } from "../../transfertypes/ServiceResponseLastNews";
import { ServiceResponse } from "../../transfertypes/ServiceResponse";
import { getLatestNewsData } from "../../services/home/getLatestNewsData";

export const SkeletonHome: React.FC = () => {
  const [populernews, setPopulerNews] = useState<Array<DataItem>>([]);
  const [latestnews, setLatestNews] = useState<Array<DataItem>>([]);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [totalpage, setTotalPage] = useState<number>(1);

  useEffect(() => {
    getPopularNewsData().then((result: ServiceResponse<Array<DataItem>>) => {
      if (result.success) setPopulerNews(result.data);
    });
  }, []);

  useEffect(() => {
    if (totalpage >= currentPage) {
      getLatestNewsData(currentPage).then(
        (result: ServiceResponseLastNews<Array<DataItem>>) => {
          console.log('result', result);

          if (result.success) {
            setLatestNews((prev) => [...prev, ...result.data]);
            result.xWpTotalpages !== null && setTotalPage(result.xWpTotalpages);
          }
        }
      );
    }
  }, [currentPage]);

  return (
    <div>
      {populernews.length ? (
        <>
          <TitleComponent title="Populer News" />
          {populernews.map((item) => (
            <LeftPictureComponent key={`leftpicture${item.id}`} item={item} />
          ))}
          <TitleComponent title="Latest News" />
          {latestnews.map((item) => (
            <BigPictureComponent key={`bigpicture${item.id}`} item={item} />
          ))}
          <IonInfiniteScroll
            onIonInfinite={(evt: CustomEvent<void>) => {
              setTimeout(() => {
                if (totalpage >= currentPage) {
                  setCurrentPage(currentPage + 1);
                }
                (evt.target as HTMLIonInfiniteScrollElement).complete();
              }, 500);
            }}
            threshold="400px"
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
          <TitleComponent title="Populer News" />
          <IonList>
            <LeftPictureSkeleton />
            <LeftPictureSkeleton />
            <LeftPictureSkeleton />
          </IonList>

          <TitleComponent title="Latest News" />
          <IonList>
            <BigPictureSkeleton />
            <BigPictureSkeleton />
            <BigPictureSkeleton />
          </IonList>
        </>
      )}
    </div>
  );
};
