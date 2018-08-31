/* @flow */
import * as React from 'react';
import {Pie as _Pie} from 'react-chartjs-2';
import type {Props} from './type';
import enhance from './enhancer';
import * as R from 'ramda';

function Pie(props: Props) {
  const {labels, datasets, refs} = props;

  return (
    <div ref={el => refs.store('_Pie', el)}>
      <h1>Pie Chart</h1>
      <_Pie data={{labels, datasets}} />
    </div>
  );
}

export default enhance(props => <Pie {...props} />);
