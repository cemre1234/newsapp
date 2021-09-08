import React from "react";

import "./index.css";
import { LeftPictureSkeleton } from "../LeftPictureComponent/LeftPictureSkeleton";
export const ListSkeleton: React.FC = () => (
  <>
    <LeftPictureSkeleton />
    <LeftPictureSkeleton />
    <LeftPictureSkeleton />
    <LeftPictureSkeleton />
    <LeftPictureSkeleton />
    <LeftPictureSkeleton />
    <LeftPictureSkeleton />
    <LeftPictureSkeleton />
  </>
);
