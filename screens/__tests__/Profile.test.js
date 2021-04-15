import React from 'react';
import { GalioProvider } from 'galio-framework';
import renderer from 'react-test-renderer';
import Profile from '../Profile';
import { materialTheme } from '../../constants/';

describe('Profile', () => {
  it('renders correctly', () => {
    const tree = renderer.create(
      <GalioProvider theme={materialTheme}>
        <Profile />
      </GalioProvider>
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
