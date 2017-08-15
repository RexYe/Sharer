"use strict";
//基本组件

import { AppContainer } from 'react-hot-loader';
import React from 'react';
import ReactDOM from 'react-dom';
import CourseTotal from '../pages/CourseTotal'

const rootEl = document.getElementById('app');
const render = Component =>
  ReactDOM.render(
    <AppContainer>
      <Component />
    </AppContainer>,
    rootEl
  );

render(CourseTotal);
if (module.hot) module.hot.accept('../pages/CourseTotal', () => render(CourseTotal));
