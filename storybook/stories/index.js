import React from 'react';
import {Text} from 'react-native';

import {storiesOf} from '@storybook/react-native';
import {action} from '@storybook/addon-actions';
import {linkTo} from '@storybook/addon-links';

import Header from './Header';
import CenterView from './CenterView';
import Welcome from './Welcome';

storiesOf('Welcome', module).add('to Storybook', () => (
  <Welcome showApp={linkTo('Button')} />
));

storiesOf('Header', module)
  .addDecorator(getStory => <CenterView>{getStory()}</CenterView>)
  .add('with text', () => (
    <Header onPress={action('clicked-text')}>
      <Text>Hello Button</Text>
    </Header>
  ))
  .add('with some emoji', () => (
    <Header onPress={action('clicked-emoji')}>
      <Text>😀 😎 👍 💯</Text>
    </Header>
  ));
