import * as MessageApiUtil from '../util/message_api_util';

// export const RECEIVE_MESSAGES = 'RECEIVE_MESSAGES';
export const RECEIVE_MESSAGE = 'RECEIVE_MESSAGE';
export const REMOVE_MESSAGE = 'REMOVE_MESSAGE';

export const createMessage = (message) => {
  return dispatch => {
    MessageApiUtil.createMessage(message);
  };
};

// export const deleteMessage = (id) => {
//   return dispatch => {
//     return MessageApiUtil.deleteMessage(id).then( message => {
//       return dispatch(removeMessage(message));
//     });
//   };
// };
//
// export const receiveMessages = (messages) => ({
//   type: RECEIVE_MESSAGES,
//   messages
// });

export const receiveMessage = (message) => ({
  type: RECEIVE_MESSAGE,
  message
});

export const removeMessage = (message) => ({
  type: REMOVE_MESSAGE,
  message
});
