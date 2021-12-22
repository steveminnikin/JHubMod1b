export interface Alert {
    pageSize: number;
    total: number;
    items:Item[],
    currentPage: number,
    totalPages: number

}

export interface Item {
  basePath: string,
  threatId: string,
  publishedDate: number,
  title: string,
  versionedNode: boolean,
  summary: string
}
