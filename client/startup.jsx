import App from './components/app/App.jsx';
import { mount } from 'react-mounter';

Meteor.startup(() => {
  mount(App, {});
});
