var AppRouter = Backbone.Router.extend({
	routes:{
		"": "home",
		"page1" : "page1",
		"page2" : "page2"
	},

	home: function(){
		this.changePage(new HomeView());
	},

	page1: function(){
		this.changePage(new Page1View());
	},

	page2: function(){
		this.changePage(new Page2View());
	},

	changePage: function(page){
		$(page.el).attr('data-role', 'page');
		page.render();
		$('body').append($(page.el));
		$.mobile.changePage($(page.el), {changeHash: false});
	}
});