/* eslint-disable no-unused-expressions */
import React from 'react';
import { render } from '@testing-library/react';
import Missions from './mockcomponents/Missions';
import Rockets from './mockcomponents/Rockets';

describe('Missions component', () => {
  test('Missions name render', () => {
    const pageMissions = render(<Missions />);
    expect(pageMissions.getAllByText(/Thaicom/)).toBeInTheDocument;
  });
  test('Missions description render', () => {
    const pageMissions = render(<Missions />);
    expect(pageMissions.getByText(/Thaicom is the name/)).toBeInTheDocument;
  });
  test('Missions status render', () => {
    const pageMissions = render(<Missions />);
    expect(pageMissions.getByText(/Active member/)).toBeInTheDocument;
  });
  test('Missions button render', () => {
    const pageMissions = render(<Missions />);
    expect(pageMissions.getByText(/Leave Mission/)).toBeInTheDocument;
  });
});

describe('Rockets component', () => {
  test('Rockets name render', () => {
    const pageRockets = render(<Rockets />);
    expect(pageRockets.getAllByText(/Falcon 1/)).toBeInTheDocument;
  });
  test('Rockets description render', () => {
    const pageRockets = render(<Rockets />);
    expect(pageRockets.getByText(/The Falcon 1 was an expendable/)).toBeInTheDocument;
  });
  test('Missions button render', () => {
    const pageRockets = render(<Rockets />);
    expect(pageRockets.getByText(/Reserve Rocket/)).toBeInTheDocument;
  });
});
