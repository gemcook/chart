/* @flow */
import * as React from 'react';

import {storiesOf} from '@storybook/react';
import {action} from '@storybook/addon-actions';
import {linkTo} from '@storybook/addon-links';

import {Button, Welcome} from '@storybook/react/demo';
import {Doughnut, Pie, Radar} from '../src';

storiesOf('Welcome', module).add('to Storybook', () => (
  <Welcome showApp={linkTo('Button')} />
));

storiesOf('Chart', module)
  .add('Doughnut', () => (
    <Doughnut
      labels={['Diamond', 'Sapphire', 'Emerald', 'Opal']}
      datasets={[
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
      ]}
    />
  ))
  .add('Pie', () => (
    <Pie
      labels={['Green', 'Yellow', 'Orange', 'pink', 'blue']}
      datasets={[
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
      ]}
    />
  ))
  .add('Radar', () => (
    <Radar
      labels={['食う', '寝る', '遊ぶ', '勉強', '飲む', '趣味']}
      datasets={[
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
      ]}
    />
  ));
