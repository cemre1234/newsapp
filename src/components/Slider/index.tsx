import React, { useEffect, useState } from "react";
import { IonSpinner, IonSlides, IonSlide, IonRouterLink } from "@ionic/react";
import "./index.css";
import { getSliderData } from "../../services/home/getSliderData";
import { DataItem } from "../../transfertypes/DataItem";
import { ServiceResponse } from "../../transfertypes/ServiceResponse";

const slideOpts = {
  initialSlide: 0,
  speed: 400,
  pagination: {
    el: ".swiper-pagination",
    type: "bullets",
  },
};

export const Slider: React.FC = () => {
  const [slides, setSlides] = useState<Array<DataItem>>([]);

  const slidestemp = [1, 2, 3, 4];

  useEffect(() => {
    getSliderData().then((result: ServiceResponse<Array<DataItem>>) => {
      if (result.success) setSlides(result.data);
    });
  }, []);
  return (
    <>
      {slides.length === 0 ? (
        <div
          className="ion-text-center spinner-wrapper"
          style={{ height: window.innerWidth }}
        >
          <IonSpinner />
        </div>
      ) : (
        <>
          <IonSlides options={slideOpts}>
            {slides.map((item, index) => {
              return (
                <IonSlide key={`slideitem${index}`}>
                  <IonRouterLink
                    routerLink={`/detail/${item.id}`}
                    routerDirection="forward"
                  >
                    <div className="slide">
                      <div
                        className="slide-image"
                        style={{
                          width: window.innerWidth,
                          height: window.innerWidth,
                          backgroundImage: `url(${item.image_url})`,
                        }}
                      />
                      <div
                        className="slide-gradient"
                        style={{
                          width: window.innerWidth,
                          height: window.innerWidth,
                        }}
                      >
                        <p className="slide-label">{item.title}</p>
                      </div>
                    </div>
                  </IonRouterLink>
                </IonSlide>
              );
            })}
          </IonSlides>
          <div className="ion-text-center">
            <div className="swiper-pagination"></div>
          </div>
        </>
      )}
    </>
  );
};
