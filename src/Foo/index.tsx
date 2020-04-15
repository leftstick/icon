import React from 'react';
import { ReactComponent as Home } from '../assets/home.svg';

export default ({ title }: { title: string }) => (
  <h1><Home />{title}</h1>
);
