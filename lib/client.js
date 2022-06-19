import { createClient } from "next-sanity";

export const client = createClient({
  projectId: "22nit0ju",
  dataset: "production",
  apiVersion: "2022-06-19",
  useCdn: false,
  token: process.env.NEXT_PUBLIC_SANITY_TOKEN,
});
