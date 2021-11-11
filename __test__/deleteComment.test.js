import { makeExecutableSchema } from "graphql-tools";
import { graphql } from "graphql";
import resolvers from "../resolvers";
import mockService from "./mocks/mockService";
import typeDefs from "../schema";

const deleteCommentTestCase = {
  id: "Delete one comment",
  query: `
    mutation{
      deleteComment(
        id: 1
      )
    }
    `,
  variables: {},
  context: { db: { comment: mockService } },
  expected: {
    data: {
      deleteComment: 1,
    },
  },
};

describe("Schema", () => {
  const cases = [deleteCommentTestCase];

  const schema = makeExecutableSchema({ typeDefs, resolvers });

  cases.forEach((obj) => {
    const { id, query, variables, context, expected } = obj;

    test(`${id}`, async () => {
      const result = await graphql(schema, query, null, context, variables);

      return expect(result).toEqual(expected);
    });
  });
});
