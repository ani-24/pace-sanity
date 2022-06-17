import { createClient } from "next-sanity";

export const client = createClient({
  projectId: "22nit0ju",
  dataset: "production",
  useCdn: false,
});
