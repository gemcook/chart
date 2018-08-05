/* @flow */
import {
  compose,
  setDisplayName,
  setPropTypes,
  withProps,
  lifecycle,
  type HOC,
} from 'recompose';
import PropTypes from 'prop-types';
import RefsStore from './RefsStore';
import $ from 'jquery';
import type {InternalProps, ExternalProps} from './type';

const enhance: HOC<InternalProps, ExternalProps> = compose(
  setDisplayName('Radar'),
  setPropTypes({
    datasets: PropTypes.array,
    refs: PropTypes.object,
  }),
  withProps({refs: new RefsStore()}),
  lifecycle({
    componentDidMount() {
      // console.log($(this.props.refs._Radar));
      console.log($("canvas[class='chartjs-render-monitor']"));

      // chartjs-render-monitor
    },
  }),
);

export default enhance;
