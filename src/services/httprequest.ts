import { isBeararTokenActive, appBeararToken } from "../appconstants";
import { excludeDataItemFrom } from "./home/excludeDataItem";

export const httprequest = async function (
  url: string,
  requestParameters?: any
) {
  let tmpRequestParameters = {
    ...{
      method: "GET",
    },
    ...requestParameters,
  };
  if (isBeararTokenActive) {
    tmpRequestParameters.headers = {
      ...tmpRequestParameters.headers,
      Authorization: `Bearer ${appBeararToken}`,
    };
  }
  console.log("tmpRequestParameters", tmpRequestParameters);
  return await fetch(url, tmpRequestParameters);
};
