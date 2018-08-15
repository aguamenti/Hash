import { connect } from 'react-redux';
import { createChannel } from '../../actions/channel_actions';
import ChannelForm from './channel_form';

const mapStateToProps = state => ({
    title: '',
    private: false,
    formType: 'Create Channel'
});

const mapDispatchToProps = dispatch => {
  return {
    processForm: channel => dispatch( createChannel(channel) )
  };
};

export default connect(mapStateToProps,mapDispatchToProps)(ChannelForm);
