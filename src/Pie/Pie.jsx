/* @flow */
import * as React from 'react';
import {Pie as _Pie} from 'react-chartjs-2';
import type {Props} from './type';
import enhance from './enhancer';
import * as R from 'ramda';

function Pie(props: Props) {
  const {datasets, refs} = props;

  const data = R.mergeDeepLeft(
    {
      labels: ['Red', 'Green', 'Yellow'],
      datasets: [
        {
          data: [300, 50, 100],
          backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56'],
          hoverBackgroundColor: ['#FF6384', '#36A2EB', '#FFCE56'],
        },
      ],
    },
    {datasets},
  );

  return (
    <div ref={el => refs.store('_Pie', el)}>
      <_Pie data={data} />
    </div>
  );
}

export default enhance(props => <Pie {...props} />);
