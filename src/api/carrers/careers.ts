import type { CreateCareerPayload } from "../../types/create-career-payload";
import { api } from "../api";

export function createCareer(data: CreateCareerPayload) {
  return api.post("/careers/", data);
}
