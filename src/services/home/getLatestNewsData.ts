import { latestNewsApi } from "..";
import { getWithHeaders } from "../getWithHeaders";

export const getLatestNewsData: Function = async function (
  page: number
): Promise<any> {
  return await getWithHeaders(latestNewsApi(page));
};
