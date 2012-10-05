window.HomeView = Backbone.View.extend({
	template: _.template($('#home').html()),

	render: function(eventName){
		$(this.el).html(this.template());
		return this;
	}
});

window.Page1View = Backbone.View.extend({
	template: _.template($('#page1').html()),

	render: function(eventName){
		$(this.el).html(this.template());
		return this;
	}
});

window.Page2View = Backbone.View.extend({
	template: _.template($('#page2').html()),

	render: function(eventName){
		$(this.el).html(this.template());
		return this;
	}
});

var AppRouter = Backbone.Router.extend({
	routes:{
		"": "home",
		"page1" : "page1",
		"page2" : "page2"
	},

	initialize: function(){
		$('.back').on('click', function(event){
			window.history.back();
			return false;
		});
		this.firstPage = true;
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
		var transition = $.mobile.defaultPageTransition;
		$.mobile.changePage($(page.el), {changeHash: false});
		if(this.firstPage){
			transition = 'none';
			this.firstPage = false;
		}
		$.mobile.changePage($(page.el), {changeHash: false, transition: transition});
	}
});

$(document).ready(function(){
	console.log('document ready');
	app = new AppRouter();
	Backbone.history.start();
});