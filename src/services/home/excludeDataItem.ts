import moment from "moment";
import { DataItem } from "../../transfertypes/DataItem";

export const excludeDataItemFrom = (bulk: any): DataItem => {
  return {
    id: bulk.id,
    title: bulk.title.rendered,
    image_url: bulk._embedded["wp:featuredmedia"][0].source_url,
    content: bulk.content.rendered,
    date: bulk.date_gmt,
    agophrase: moment(bulk.date_gmt).fromNow(),
    category: bulk._embedded["wp:term"][0]
      ? bulk._embedded["wp:term"][0][0].name
      : undefined,
    categories: bulk.categories[0],
    video: bulk.postmetafields?.video
      ? bulk.postmetafields?.video[0]
      : undefined,
    headers: bulk.headers,
    url: bulk.link,
  };
};
