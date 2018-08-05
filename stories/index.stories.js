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
  .add('Doughnut', () => <Doughnut />)
  .add('Pie', () => <Pie />)
  .add('Radar', () => <Radar />);
