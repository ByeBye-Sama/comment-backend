const resolvers = {
  User: {
    comments: (parent, args, context, info) => parent.getComments(),
  },
  Comment: {
    user: (parent, args, context, info) => parent.getUser(),
  },
  Query: {
    comments: (parent, args, { db }, info) => db.comment.findAll(),
    users: (parent, args, { db }, info) => db.user.findAll(),
    comment: (parent, { id }, { db }, info) => db.comment.findByPk(id),
    user: (parent, { id }, { db }, info) => db.user.findByPk(id),
  },
  Mutation: {
    createComment: (parent, { content, userId }, { db }, info) =>
      db.comment.create({
        content: content,
        userId: userId
      }),
    createUser: (parent, { name, comments }, { db }, info) =>
      db.user.create({
        name: name,
      }),
    updateComment: (parent, { content, id }, { db }, info) =>
      db.comment.update({
        content: content
      },
        {
          where: {
            id: id
          }
        }),
    deleteComment: (parent, { id }, { db }, info) =>
      db.comment.destroy({
        where: {
          id: id
        }
      })
  }
};

export default resolvers
