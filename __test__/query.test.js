import { makeExecutableSchema } from "graphql-tools";
import { graphql } from "graphql";
import resolvers from "../resolvers";
import mockService from "./mocks/mockService";
import typeDefs from "../schema";

const allCommentsTestCase = {
  id: "All comments",
  query: `
    query{
      comments {
        id
        content
      }
    }
    `,
  variables: {},
  context: { db: { comment: mockService } },
  expected: {
    data: {
      comments: [
        { id: "1", content: "Hello" },
        { id: "2", content: "Bye" },
      ],
    },
  },
};

describe("Schema", () => {
  const cases = [allCommentsTestCase];

  const schema = makeExecutableSchema({ typeDefs, resolvers });

  cases.forEach((obj) => {
    const { id, query, variables, context, expected } = obj;

    test(`${id}`, async () => {
      const result = await graphql(schema, query, null, context, variables);

      return expect(result).toEqual(expected);
    });
  });
});
