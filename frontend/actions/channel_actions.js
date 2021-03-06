import * as ChannelApiUtil from '../util/channel_api_util';
import { selectChannel } from './session_actions';

export const RECEIVE_CHANNELS = 'RECEIVE_CHANNELS';
export const RECEIVE_CHANNEL = 'RECEIVE_CHANNEL';
export const REMOVE_CHANNEL = 'REMOVE_CHANNEL';

export const fetchChannels = () => {
  return dispatch => {
    return ChannelApiUtil.fetchChannels().then( channels => {
      return dispatch(receiveChannels(channels));
    });
  };
};

export const fetchChannel = (id) => {
  return dispatch => {
    return ChannelApiUtil.fetchChannel(id).then( channel => {
      return dispatch(receiveChannel(channel));
    });
  };
};

export const createChannel = (channel) => {
  return dispatch => {
    return ChannelApiUtil.createChannel(channel).then( newChannel => {
      dispatch(receiveChannel(newChannel));
      //always select that Channel so its messages render when created
      dispatch(selectChannel(newChannel.id));
    });
  };
};

export const updateChannel = (channel) => {
  return dispatch => {
    return ChannelApiUtil.updateChannel(channel).then( updatedChannel => {
      return dispatch(receiveChannel(updatedChannel));
    });
  };
};

export const deleteChannel = (id) => {
  return dispatch => {
    return ChannelApiUtil.deleteChannel(id).then( channel => {
      return dispatch(removeChannel(channel));
    });
  };
};

const receiveChannels = (payload) => ({
  type: RECEIVE_CHANNELS,
  payload
});

const receiveChannel = (payload) => ({
  type: RECEIVE_CHANNEL,
  payload
});

const removeChannel = id => ({
  type: REMOVE_CHANNEL,
  id
});
