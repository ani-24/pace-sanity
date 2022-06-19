// import { createClient } from "next-sanity";
import sanityClient from "@sanity/client";

export const client = sanityClient({
  projectId: "52pxlqze",
  dataset: "production",
  useCdn: false,
  token: process.env.NEXT_PUBLIC_SANITY_TOKEN,
});
