import React, {
  useEffect,
  useRef,
  useState,
} from "react";
import { IonContent, IonImg, IonPage, useIonViewDidEnter } from "@ionic/react";
import { Header } from "../../components/Header";
import {
  IonRow,
  IonCol,
} from "@ionic/react";
import { RelatedNews } from "../../components/RelatedNews";
import "./index.css";
import { BackButton } from "../../components/BackButton";
import { RelatedNewsTitleComponent } from "../../components/RelatedNews/title";
import { DataItem } from "../../transfertypes/DataItem";
import { getDetailItemData } from "../../services/home/getDetailItem";
import { ServiceResponse } from "../../transfertypes/ServiceResponse";
import { LikeButton } from "../../components/LikeButton";
import YouTube from "react-youtube";
import { getCategoriesData } from "../../services/home/getCategoriesData";
import { AdMobPlus, InterstitialAd } from "@admob-plus/capacitor";
import { SocialShareButtons } from "../../social/socialShareButtons";

type DetailScreenProps = {
  match: any;
  image: string;
  content: string;
  title: string;
  subtitle: string;
};

export const DetailScreen: React.FC<DetailScreenProps> = function ({
  match,
  image,
  content,
  title,
  subtitle,
}) {
  const [detail, setDetail] = useState<DataItem>();
  const [relatedItems, setRelatedItems] = useState<Array<DataItem>>();
  const contentRef = useRef<HTMLIonContentElement | null>(null);
  /*(async () => {
    const interstitial = new InterstitialAd({
      adUnitId: 'ca-app-pub-3940256099942544/1033173712',
    })
    await interstitial.load()
    await interstitial.show()
  })()*/
  useEffect(() => {
    getDetailItemData(match.params.newid)
      .then((result: ServiceResponse<DataItem>) => {
        if (result.success) setDetail(result.data);
        return result.data;
      })
      .then((x: DataItem) => {
        getCategoriesData(x.categories).then(
          (result: ServiceResponse<Array<DataItem>>) => {
            if (result.success) setRelatedItems(result.data);
          }
        );
      });
  }, [match.params.newid]);
  useIonViewDidEnter(() => {
    contentRef.current && contentRef.current.scrollToTop(500);
    console.log("didenter");
  });
  const getYoutubeUrl = (url: string): string | boolean => {
    var regExp =
      /^.*((youtu.be\/)|(v\/)|(\/u\/\w\/)|(embed\/)|(watch\?))\??v?=?([^#&?]*).*/;
    var match = url.match(regExp);
    return match && match[7].length == 11 ? match[7] : false;
  };

  const youtubeId =
    detail?.video !== undefined ? getYoutubeUrl(detail.video) : false;

  return (
    <IonPage>
      <Header />
      <IonContent ref={contentRef} scrollEvents={true} fullscreen>
        <IonRow className="detailscreen">
          <IonCol className="detailscreen-innerwrapper">
            <div className="detailscreen-thumbnail">
              {detail?.video === undefined || typeof youtubeId === "boolean" ? (
                <div
                  className="detailscreen-image"
                  style={{
                    width: window.innerWidth,
                    height: window.innerWidth,
                    backgroundImage: `url(${detail?.image_url})`,
                  }}
                />
              ) : (
                <div
                  className="detailscreen-video-wrapper"
                  style={{
                    width: window.innerWidth,
                    height: window.innerWidth,
                  }}
                >
                  <YouTube
                    videoId={youtubeId}
                    opts={{
                      width: window.innerWidth.toString(),
                      height: (window.innerWidth - 40).toString(),
                    }}
                  />
                </div>
              )}
              <BackButton />
              <LikeButton data={detail} />
            </div>
          </IonCol>
        </IonRow>
        <div
          className="detailscreen-wrapper"
          style={{
            marginTop: window.innerWidth - 40,
          }}
        >
          <IonRow>
            <IonCol>
              <div className="ion-text-left detailscreen-category-title">
                {detail?.category}
              </div>
              <div className="ion-text-right detailscreen-category-date">
                {detail?.agophrase}
              </div>
            </IonCol>
          </IonRow>
          <IonRow>
            <IonCol>
              <h3 className="detailscreen-title">{detail?.title}</h3>
            </IonCol>
          </IonRow>
         <SocialShareButtons message={detail !== undefined ? detail.title: ''} subject={detail !== undefined ? detail.title: ''} image={detail !== undefined ? detail.image_url: ''} file={undefined} url={detail !== undefined ? detail.url: ''} />
          <IonRow>
            <IonCol className="ion-text-center detailscreen-margin">
              <IonImg src="/assets/img/admob-img.png"></IonImg>
            </IonCol>
          </IonRow>
          <IonRow>
            <IonCol className="detailscreen-margin">
              <div
                className="detailscreen-content"
                dangerouslySetInnerHTML={{
                  __html: detail?.content ? detail.content : "",
                }}
              />
            </IonCol>
          </IonRow>
          <IonRow>
            <IonCol className="ion-text-center detailscreen-margin">
              <IonImg src="/assets/img/admob-img.png"></IonImg>
            </IonCol>
          </IonRow>
          <RelatedNewsTitleComponent title="Related News" />

          {relatedItems?.map((item) => (
            <RelatedNews
              id={item.id}
              item={item}
              key={`relatednews${item.id}`}
              title={item.title}
              content={item.content}
              subtitle={item.agophrase}
              category={item.category}
            />
          ))}

          <IonRow>
            <IonCol className="ion-text-center detailscreen-margin">
              <IonImg src="/assets/img/admob-img.png"></IonImg>
            </IonCol>
          </IonRow>
        </div>
      </IonContent>
    </IonPage>
  );
};
