export interface AddPostRequest {
  title: string | undefined;
  content: string | undefined;
  summary: string | undefined;
  urlHandle: string | undefined;
  author: string | undefined;
  visible: boolean | undefined;
  publishDate: String | undefined;
  updatedDate: String | undefined;
  featuredImageUrl: String | undefined;
}
