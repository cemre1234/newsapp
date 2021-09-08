import { getDetailItemApi } from "..";
import { DataItem } from "../../transfertypes/DataItem";
import { ServiceResponse } from "../../transfertypes/ServiceResponse";
import { httprequest } from "../httprequest";
import { excludeDataItemFrom } from "./excludeDataItem";

export const getDetailItemData: Function = async function (
  id: number
): Promise<ServiceResponse<DataItem | undefined>> {
  return await httprequest(getDetailItemApi(id))
    .then((result) => result.json())
    .then((data: any) => ({
      success: true,
      data: excludeDataItemFrom(data),
    }))
    .catch((e: string) => ({ success: false, data: undefined, error: e }));
};
