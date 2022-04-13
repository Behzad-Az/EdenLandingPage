import sanityClient, { SanityClient } from '@sanity/client';
import imageUrlBuilder from '@sanity/image-url';
import { ImageUrlBuilder } from '@sanity/image-url/lib/types/builder';
import { SanityImageSource } from '@sanity/image-url/lib/types/types';

export const client: SanityClient = sanityClient({
  projectId: process.env.REACT_APP_SANITY_PROJECT_ID,
  dataset: 'production',
  apiVersion: '2022-02-01',
  useCdn: true,
  token: process.env.REACT_APP_SANITY_TOKEN
});

const builder: ImageUrlBuilder = imageUrlBuilder(client);

export const urlFor = (source: SanityImageSource) => builder.image(source);