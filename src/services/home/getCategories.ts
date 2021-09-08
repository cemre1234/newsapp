import { getCategoriesApi } from "..";
import { CategoryItem } from "../../transfertypes/CategoryItem";
import { ServiceResponse } from "../../transfertypes/ServiceResponse";
import { httprequest } from "../httprequest";
import { excludeCategoryItemFrom } from "./excludeCategoryItem";

export const getCategories: Function = async function (): Promise<
  ServiceResponse<Array<CategoryItem>>
> {
  return await httprequest(getCategoriesApi())
    .then((result) => result.json())
    .then((data: Array<any>) => ({
      success: true,
      data: data.map((item) => excludeCategoryItemFrom(item)),
    }))
    .catch((e: string) => ({ success: false, data: [], error: e }));
};
