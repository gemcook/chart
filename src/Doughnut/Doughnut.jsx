/* @flow */
import * as React from 'react';
import {Doughnut as _Doughnut} from 'react-chartjs-2';
import type {Props} from './type';
import enhance from './enhancer';

function Doughnut(props: Props) {
  const {labels, datasets, refs} = props;

  return (
    <div ref={el => refs.store('_Doughnut', el)}>
      <h1>Doughnut Chart</h1>
      <_Doughnut data={{labels, datasets}} />
    </div>
  );
}

export default enhance(props => <Doughnut {...props} />);
