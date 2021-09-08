import { getCategoriesListApi } from "..";
import { DataItem } from "../../transfertypes/DataItem";
import { ServiceResponseLastNews } from "../../transfertypes/ServiceResponseLastNews";
import { getWithHeaders } from "../getWithHeaders";


export const getCategoriesListData: Function = async function (
  id: number,
  page: number
): Promise<ServiceResponseLastNews<Array<DataItem>>> {
  return await getWithHeaders(getCategoriesListApi(id, page));
};
