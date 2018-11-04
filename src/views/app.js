var AppView = Backbone.View.extend({

  el: '#app',

  initialize: function() {
   this.videos = new Videos(exampleVideoData);
  // this.videos.get('fakeVideoData')
    this.render();
       // this.$el.html(this.template(this.model.attributes));

  },


  render: function() {
    this.$el.html(this.template());
   // alert("teating VIEW")
    return this;
  },

  template: templateURL('src/templates/app.html')

});
var view = new AppView()