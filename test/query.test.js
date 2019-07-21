import { makeExecutableSchema } from 'graphql-tools'
import { graphql } from 'graphql'
import resolvers from '../resolvers'
import mockService from './mocks/mockService'
import typeDefs from '../schema';


const allCommentsTestCase = {
  id: 'All comments with the user who wrote it',
  query: `
    query{
      comments {
        id
        content
      }
    }
    `,
  variables: {},

  context: { db: mockService },

  expected: {
    data: {
      comments: [
        { id: '1', content: 'Hello' },
        { id: '2', content: 'Bye' }]
    }
  }
}

describe('Schema', () => {
  const cases = [allCommentsTestCase]
  const schema = makeExecutableSchema({ typeDefs, resolvers })
  /* console.log('defs',typeDefs)
  console.log('reso',resolvers) */
  cases.forEach(obj => {
    const { id, query, variables, context, expected } = obj
    test(`${id}`, async () => {
      const result = await graphql(schema, query, null, context, variables)
      return expect(result).toEqual(expected)
    })
  })
})
