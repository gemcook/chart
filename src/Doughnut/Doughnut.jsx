/* @flow */
import * as React from 'react';
import {Doughnut as _Doughnut} from 'react-chartjs-2';
import type {Props} from './type';
import enhance from './enhancer';
import * as R from 'ramda';

function Doughnut(props: Props) {
  const {datasets, refs} = props;

  const data = R.mergeDeepLeft(
    {
      labels: ['Diamond', 'Sapphire', 'Emerald', 'Opal'],
      datasets: [
        {
          data: [120, 50, 100, 70],
          backgroundColor: [
            'rgba(250, 102, 129, 1)',
            'rgba(250, 102, 129, 0.7)',
            'rgba(250, 102, 129, 0.45)',
            'rgba(250, 102, 129, 0.2)',
          ],
          hoverBackgroundColor: [
            'rgba(250, 102, 129, 0.9)',
            'rgba(250, 102, 129, 0.6)',
            'rgba(250, 102, 129, 0.35)',
            'rgba(250, 102, 129, 0.1)',
          ],
        },
      ],
    },
    {datasets},
  );

  return (
    <div ref={el => refs.store('_Doughnut', el)}>
      <h1>Doughnut Chart</h1>
      <_Doughnut data={data} />
    </div>
  );
}

export default enhance(props => <Doughnut {...props} />);
