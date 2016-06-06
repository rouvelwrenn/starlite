Router.configure({
  layoutTemplate: 'mainLayout',
  loadingTemplate: 'loading',
  notFoundTemplate: '404'
});


Router.map(function() {
  this.route('home', {path: '/'});
  this.route('operationalInfo', {path: '/operational-information'});
  


});

