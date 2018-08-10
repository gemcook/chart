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
      labels: ['Green', 'Yellow', 'Orange', 'pink', 'blue'],
      datasets: [
        {
          data: [200, 50, 100, 80, 220],
          backgroundColor: [
            'rgba(82,156,138,0.8)',
            'rgba(221,170,69,0.8)',
            'rgba(214,109,74,0.8)',
            'rgba(155,51,86,0.8)',
            'rgba(80,109,187,0.8)',
          ],
          hoverBackgroundColor: [
            'rgba(82,156,138,0.7)',
            'rgba(221,170,69,0.7)',
            'rgba(214,109,74,0.7)',
            'rgba(155,51,86,0.7)',
            'rgba(80,109,187,0.7)',
          ],
        },
      ],
    },
    {datasets},
  );

  return (
    <div ref={el => refs.store('_Pie', el)}>
      <h1>Pie Chart</h1>
      <_Pie data={data} />
    </div>
  );
}

export default enhance(props => <Pie {...props} />);
