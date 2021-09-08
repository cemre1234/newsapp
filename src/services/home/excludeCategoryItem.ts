import { CategoryItem } from "../../transfertypes/CategoryItem";

export const excludeCategoryItemFrom = (bulk: any): CategoryItem => {
  return {
    id: bulk.id,
    name: bulk.name,
    thumbnail: bulk.thumbnail,
  };
};
