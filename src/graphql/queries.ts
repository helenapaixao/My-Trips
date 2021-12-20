import { gql } from 'graphql-request'

export const GET_PAGES = gql`
query getPages($first: Int) {
  pages(first: $first) {
    id
    heading
    slug
    body {
      html
    }
}

`

export const GET_PAGE_BY_SLUG = gql`
  query getPagesBySlug($slug: String!) {
    pages(where: { slug: $slug }) {
      id
      slug
      heading
      body {
        html
      }
    }
  }
`
