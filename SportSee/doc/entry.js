
    window.reactComponents = {};

    window.vueComponents = {};

  
      import React from "react";

      import ReactDOM from "react-dom";


      import ReactWrapper from '../node_modules/better-docs/lib/react-wrapper.js';

      window.React = React;

      window.ReactDOM = ReactDOM;

      window.ReactWrapper = ReactWrapper;

    
    import './styles/reset.css';

    import './styles/iframe.css';

  import Component0 from '../src/Component/BarChart/Activity.js';
reactComponents['Activity'] = Component0;

import Component1 from '../src/Component/LineChart/AverageSessions.js';
reactComponents['AverageSessions'] = Component1;

import Component2 from '../src/Component/Header/Header.js';
reactComponents['Header'] = Component2;

import Component3 from '../src/Component/Navleft/Navleft.js';
reactComponents['Navleft'] = Component3;

import Component4 from '../src/Component/Nutritiondata/Nutritiondata.js';
reactComponents['Nutritiondata'] = Component4;

import Component5 from '../src/Component/RadarChart/RadarPerformance.js';
reactComponents['RadarPerformance'] = Component5;

import Component6 from '../src/Component/PieChart/Score.js';
reactComponents['ScorePerf'] = Component6;