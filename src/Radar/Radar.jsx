/* @flow */
import * as React from 'react';
import {Radar as _Radar} from 'react-chartjs-2';
import type {Props} from './type';
import enhance from './enhancer';
import * as R from 'ramda';

function Radar(props: Props) {
  const {datasets, refs} = props;

  const data = R.mergeDeepLeft(
    {
      labels: [
        'Eating',
        'Drinking',
        'Sleeping',
        'Designing',
        'Coding',
        'Cycling',
        'Running',
      ],
      datasets: [
        {
          label: 'My First dataset',
          backgroundColor: 'rgba(179,181,198,0.2)',
          borderColor: 'rgba(0, 0, 0, 0)',
          pointBackgroundColor: 'rgba(0, 0, 0, 0)',
          pointBorderColor: '#fff',
          pointHoverBackgroundColor: '#fff',
          pointHoverBorderColor: 'rgba(179,181,198,1)',
          data: [65, 59, 90, 81, 56, 55, 40],
        },
        {
          label: 'My Second dataset',
          backgroundColor: 'rgba(255,99,132,0.2)',
          borderColor: 'rgba(0, 0, 0, 0)',
          pointBackgroundColor: 'rgba(0, 0, 0, 0)',
          pointBorderColor: '#fff',
          pointHoverBackgroundColor: '#fff',
          pointHoverBorderColor: 'rgba(255,99,132,1)',
          data: [28, 48, 40, 19, 96, 27, 100],
        },
      ],
    },
    {datasets},
  );

  return (
    <div ref={el => refs.store('_Radar', el)}>
      <_Radar data={data} />
    </div>
  );
}

export default enhance(props => <Radar {...props} />);
