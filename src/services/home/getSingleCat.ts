import { getCategoriesApi, getSingleCategoryApi } from "..";
import { CategoryItem } from "../../transfertypes/CategoryItem";
import { ServiceResponse } from "../../transfertypes/ServiceResponse";
import { httprequest } from "../httprequest";
import { excludeCategoryItemFrom } from "./excludeCategoryItem";

export const getSingleCategoryData: Function = async function (id: number): Promise<
  ServiceResponse<CategoryItem | undefined>
> {
  return await httprequest(getSingleCategoryApi(id))
    .then((result) => result.json())
    .then((data: any) => ({
      success: true,
      data: excludeCategoryItemFrom(data),
    }))
    .catch((e: string) => ({ success: false, data: undefined, error: e }));
};
