/* @flow */
import * as React from 'react';
import {Radar as _Radar} from 'react-chartjs-2';
import type {Props} from './type';
import enhance from './enhancer';
import * as R from 'ramda';

function Radar(props: Props) {
  const {labels, datasets, refs} = props;

  return (
    <div ref={el => refs.store('_Radar', el)}>
      <h1>Rader Chart</h1>
      <_Radar data={{labels, datasets}} />
    </div>
  );
}

export default enhance(props => <Radar {...props} />);
