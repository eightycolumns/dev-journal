import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('journal-entries');
  this.route('new-journal-entry');
  this.route('not-found', {path: '/*path'});
});

export default Router;
