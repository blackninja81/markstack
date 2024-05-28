import {createClient} from '@sanity/client'

 export const client = createClient({
    projectId: 'cv7b298x',
    dataset: 'production',
    useCdn: true
  });

  export async function getSanityItems() {
    const posts = await client.fetch('*[_type == "item"]')
    return posts
  }

  export async function getSanityCategories() {
    const posts = await client.fetch('*[_type == "category"]')
    return posts
  }