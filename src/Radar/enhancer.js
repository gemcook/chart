/* @flow */
import {
  compose,
  setDisplayName,
  withProps,
  lifecycle,
  type HOC,
} from 'recompose';
import RefsStore from './RefsStore';
import $ from 'jquery';
import type {Props} from './type';

const enhance: HOC<Props, *> = compose(
  setDisplayName('Radar'),
  withProps({refs: new RefsStore()}),
  lifecycle({
    componentDidMount() {
      console.log($(this.props.refs._Radar).css('display', 'block'));
    },
  }),
);

export default enhance;
