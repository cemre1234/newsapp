import {
  apiPath,
  sliderCategoryId,
  populerNewsCategoryId,
  sliderCount,
  popularNewsCount,
  latestNewsCount,
} from "../appconstants";

export const sliderApi = (): string =>
  `${apiPath()}posts?categories=${sliderCategoryId}&_embed=wp:featuredmedia,wp:term&per_page=${sliderCount}`;

export const populerNewsApi = (): string =>
  `${apiPath()}posts?categories=${populerNewsCategoryId}&_embed=wp:featuredmedia,wp:term&per_page=${popularNewsCount}`;

export const latestNewsApi = (page: number): string =>
  `${apiPath()}posts?_embed=wp:featuredmedia,wp:term&per_page=${latestNewsCount}&page=${page}`;

export const getCategoriesApi = (): string => `${apiPath()}categories`;

export const getCategoriesListApi = (id: number, page: number): string =>
  `${apiPath()}posts?categories=${id}&_embed=wp:featuredmedia,wp:term&per_page=${latestNewsCount}&page=${page}`;

export const getCategoriesDataApi = (id: number): string =>
  `${apiPath()}posts?categories=${id}&_embed=wp:featuredmedia,wp:term`;

export const getDetailItemApi = (id: number): string =>
  `${apiPath()}posts/${id}?_embed=wp:featuredmedia,wp:term`;

export const getSingleCategoryApi = (id: number): string =>
  `${apiPath()}categories/${id}`;
