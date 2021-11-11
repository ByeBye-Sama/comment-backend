const getComments = [
  { id: 1, content: 'Hello' },
  { id: 2, content: 'Bye' }]

const deleteComment = 1 

const createComment = {
  content: 'testing comments',
  userId: '2'
}

const findAll = () => getComments;
const destroy = () => deleteComment;
const create = () => createComment;

  module.exports = { findAll, destroy, create }
