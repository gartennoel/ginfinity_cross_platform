import React from 'react';
import { GalioProvider } from 'galio-framework';
import renderer from 'react-test-renderer';
import Greeting from '../Greeting';
import { materialTheme } from '../../constants/';


describe('Greeting', () => {
  it('renders correctly', () => {
    const tree = renderer.create(
      <GalioProvider theme={materialTheme}>
        <Greeting />
      </GalioProvider>
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
