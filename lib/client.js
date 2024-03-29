const sanityClient = require("@sanity/client");
import imageUrlBuilder from "@sanity/image-url";

export const client = sanityClient({
  projectId: "z3q2ypfl",
  dataset: "production",
  apiVersion: "2022-12-16",
  token: process.env.NEXT_PUBLIC_SANITY_TOKEN,
  useCdn: true,
});

const builder = imageUrlBuilder(client);

export const urlFor = (source) => builder.image(source);
