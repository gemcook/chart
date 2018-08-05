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
      labels: ['食う', '寝る', '遊ぶ'],
      datasets: [
        {
          label: 'Aくん',
          backgroundColor: 'rgba(179,181,198,0.2)',
          borderColor: 'rgba(0, 0, 0, 0)',
          pointBackgroundColor: 'rgba(0, 0, 0, 0)',
          pointBorderColor: '#fff',
          pointHoverBackgroundColor: '#fff',
          pointHoverBorderColor: 'rgba(179,181,198,1)',
          data: [80, 40, 50],
        },
        {
          label: 'Bちゃん',
          backgroundColor: 'rgba(255,99,132,0.2)',
          borderColor: 'rgba(0, 0, 0, 0)',
          pointBackgroundColor: 'rgba(0, 0, 0, 0)',
          pointBorderColor: '#fff',
          pointHoverBackgroundColor: '#fff',
          pointHoverBorderColor: 'rgba(255,99,132,1)',
          data: [60, 20, 80],
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
