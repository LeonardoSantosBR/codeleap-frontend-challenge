import { api } from "../api";

export function getPosts(offset: number, pageSize: number) {
  return api.get(`/careers/`, { params: { offset, limit: pageSize } });
}

export function createPost(data: {
  username: string;
  title: string;
  content: string;
  author_ip: string;
}) {
  return api.post("/careers/", data);
}

export function updatePost(
  id: number,
  data: {
    title: string;
    content: string;
  }
) {
  return api.patch(`/careers/${id}/`, data);
}

export function deletePost(id: number) {
  return api.delete(`/careers/${id}/`);
}
