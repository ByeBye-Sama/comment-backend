import { makeExecutableSchema } from "graphql-tools";
import { graphql } from "graphql";
import resolvers from "../resolvers";
import mockService from "./mocks/mockService";
import typeDefs from "../schema";

const createCommentTestCase = {
  id: "Delete one comment",
  query: `
    mutation {
      createComment(
        content: "testing content"
        userId: "2"
      ){
        content
        userId
      }
    }
    `,
  variables: {},
  context: { db: { comment: mockService } },
  expected: {
    data: {
      createComment: {
        content: "testing comments",
        userId: "2",
      },
    },
  },
};

describe("Schema", () => {
  const cases = [createCommentTestCase];

  const schema = makeExecutableSchema({ typeDefs, resolvers });

  cases.forEach((obj) => {
    const { id, query, variables, context, expected } = obj;

    test(`${id}`, async () => {
      const result = await graphql(schema, query, null, context, variables);

      return expect(result).toEqual(expected);
    });
  });
});
