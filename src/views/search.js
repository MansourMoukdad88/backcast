var SearchView = Backbone.View.extend({
  el: '#search',

  initialize: function() {
   // this.videos = new Videos("exampleVideoData");
    this.render();
  },

  render: function() {
    this.$el.html(this.template());
    return this;
  },

  template: templateURL('src/templates/search.html')

});
