import Manager from './components/chat/Manager.jsx';
import { mount } from 'react-mounter';


Meteor.startup( () => {
  mount(
    Manager,
    {}
  );
});
