import { newPublisher, PublisherId } from "src/entities";
import { PublisherResolvers } from "src/generated/graphql-types";
import { publisherResolvers } from "src/resolvers/objects/publisher/publisherResolvers";
import { makeRunResolverKeys } from "src/resolvers/testUtils";

describe("publisherResolvers", () => {
  it.withCtx("can return", async (ctx) => {
    const { em } = ctx;
    // Given a Publisher
    const p = newPublisher(em);
    // Then we can query it
    const result = await runPublisher(ctx, p, []);
    expect(result).toMatchObject({});
  });
});

const runPublisher = makeRunResolverKeys<PublisherResolvers, PublisherId>(publisherResolvers);
