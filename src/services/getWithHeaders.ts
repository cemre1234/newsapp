import { isBeararTokenActive, appBeararToken } from "../appconstants";
import { excludeDataItemFrom } from "./home/excludeDataItem";

export const getWithHeaders = async function (url: string, requestParameters?: any) {
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

  return fetch(url, tmpRequestParameters)
    .then(async (result) => {
      if (!result.ok) {
        // create error object and reject if not a 2xx response code
        let err = new Error("HTTP status code: " + result.status);
        throw err;
      }
      const headersofdata = result.headers.get("x-wp-totalpages");

      const JsonResult = await result.json()

/*
      let bodyString = "[]";
      if (result.body !== null) {
        const bodyReader = result.body.getReader();
        const utf8Decoder = new TextDecoder("utf-8");
        const chunkResult = await bodyReader.read();
        bodyString = utf8Decoder.decode(chunkResult.value);
      }
*/
      return { headers: result.headers, parsedBody: JsonResult };
    })
    .then((data) => {
      const xWpTotalpages = data.headers.get("x-wp-totalpages");
      return {
        success: true,
        data: data.parsedBody.map((item: any) => excludeDataItemFrom(item)),
        xWpTotalpages: xWpTotalpages !== null ? parseInt(xWpTotalpages) : null,
      };
    })
    .catch((e: string) => ({
      success: false,
      data: [],
      xWpTotalpages: null,
      error: e,
    }));
};
