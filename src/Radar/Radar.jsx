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
      labels: ['食う', '寝る', '遊ぶ', '勉強', '飲む', '趣味'],
      datasets: [
        {
          label: 'Aくん',
          backgroundColor: 'rgba(200,71,102,0.4)',
          borderColor: 'rgba(200,71,102,0)',
          pointBackgroundColor: 'rgba(0, 0, 0, 0)',
          pointBorderColor: 'rgba(0, 0, 0, 0)',
          pointHoverBackgroundColor: '#fff',
          pointHoverBorderColor: 'rgba(165,71,102,1)',
          data: [80, 60, 70, 80, 65, 80],
        },
        {
          label: 'Bちゃん',
          backgroundColor: 'rgba(221,170,69,0.4)',
          borderColor: 'rgba(221,170,69,0)',
          pointBackgroundColor: 'rgba(0, 0, 0, 0)',
          pointBorderColor: 'rgba(0, 0, 0, 0)',
          pointHoverBackgroundColor: '#fff',
          pointHoverBorderColor: 'rgba(103,103,103,1)',
          data: [70, 75, 80, 80, 75, 50],
        },
        {
          label: 'Cさん',
          backgroundColor: 'rgba(82,156,138,0.4)',
          borderColor: 'rgba(82,156,138,0)',
          pointBackgroundColor: 'rgba(0, 0, 0, 0)',
          pointBorderColor: 'rgba(0, 0, 0, 0)',
          pointHoverBackgroundColor: '#fff',
          pointHoverBorderColor: 'rgba(221,170,69,1)',
          data: [75, 70, 70, 80, 70, 70],
        },
      ],
    },
    {datasets},
  );

  return (
    <div ref={el => refs.store('_Radar', el)}>
      <h1>Rader Chart</h1>
      <_Radar data={data} />
    </div>
  );
}

export default enhance(props => <Radar {...props} />);
