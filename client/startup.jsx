import React from 'react';
import App from './components/app/App.jsx';
import { mount } from 'react-mounter';

// FlowRouter.route('/',{
//   actioin() {}
// })

Meteor.startup(() => {
  mount(App, {});
  // React.render(<App/>, document.getElementById("render-target"));
})
