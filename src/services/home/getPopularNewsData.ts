import { populerNewsApi } from "..";
import { DataItem } from "../../transfertypes/DataItem";
import { ServiceResponse } from "../../transfertypes/ServiceResponse";
import { httprequest } from "../httprequest";
import { excludeDataItemFrom } from "./excludeDataItem";

export const getPopularNewsData: Function = async function (): Promise<
  ServiceResponse<Array<DataItem>>
> {
  return await httprequest(populerNewsApi())
    .then((result) => result.json())
    .then((data: Array<any>) => ({
      success: true,
      data: data.map((item) => excludeDataItemFrom(item)),
    }))
    .catch((e: string) => ({ success: false, data: [], error: e }));
};
