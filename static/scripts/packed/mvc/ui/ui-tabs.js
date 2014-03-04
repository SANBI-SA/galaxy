define(["utils/utils"],function(a){var b=Backbone.View.extend({visible:false,list:{},$nav:null,$content:null,first_tab:null,optionsDefault:{title_new:"",operations:null,onnew:null},initialize:function(e){this.options=a.merge(e,this.optionsDefault);var c=$(this._template(this.options));this.$nav=c.find(".tab-navigation");this.$content=c.find(".tab-content");this.setElement(c);this.list={};var d=this;if(this.options.operations){$.each(this.options.operations,function(g,h){h.$el.prop("id",g);d.$nav.append(h.$el)})}if(this.options.onnew){var f=$(this._template_tab_new(this.options));this.$nav.append(f);f.tooltip({title:"Add a new tab",placement:"bottom"});f.on("click",function(g){f.tooltip("hide");d.options.onnew()})}},add:function(d){var f=d.id;var e={$title:$(this._template_tab(d)),$content:$(this._template_tab_content(d)),removable:d.ondel?true:false};this.list[f]=e;if(this.options.onnew){this.$nav.find("#new-tab").before(e.$title)}else{this.$nav.append(e.$title)}e.$content.append(d.$el);this.$content.append(e.$content);if(_.size(this.list)==1){e.$title.addClass("active");e.$content.addClass("active");this.first_tab=f}if(d.ondel){var c=e.$title.find("#delete");c.tooltip({title:"Delete this tab",placement:"bottom"});c.on("click",function(){c.tooltip("destroy");d.ondel();return false})}if(d.onclick){e.$title.on("click",function(){d.onclick()})}},del:function(d){var c=this.list[d];c.$title.remove();c.$content.remove();delete c;if(this.first_tab==d){this.first_tab=null}if(this.first_tab!=null){this.show(this.first_tab)}},delRemovable:function(){for(var d in this.list){var c=this.list[d];if(c.removable){this.del(d)}}},show:function(c){this.$el.fadeIn("fast");this.visible=true;if(c){this.list[c].$title.find("a").tab("show")}},hide:function(){this.$el.fadeOut("fast");this.visible=false},hideOperation:function(c){this.$nav.find("#"+c).hide()},showOperation:function(c){this.$nav.find("#"+c).show()},setOperation:function(e,d){var c=this.$nav.find("#"+e);c.off("click");c.on("click",d)},title:function(e,d){var c=this.list[e].$title.find("#text");if(d){c.html(d)}return c.html()},_template:function(c){return'<div class="tabbable tabs-left"><ul class="tab-navigation nav nav-tabs"/><div class="tab-content"/></div>'},_template_tab_new:function(c){return'<li id="new-tab"><a href="javascript:void(0);"><i style="font-size: 0.8em; margin-right: 5px;" class="fa fa-plus-circle"/>'+c.title_new+"</a></li>"},_template_tab:function(d){var c='<li id="title-'+d.id+'"><a title="" href="#tab-'+d.id+'" data-toggle="tab" data-original-title=""><span id="text">'+d.title+"</span>";if(d.ondel){c+='<i id="delete" style="font-size: 0.8em; margin-left: 5px; cursor: pointer;" class="fa fa-minus-circle"/>'}c+="</a></li>";return c},_template_tab_content:function(c){return'<div id="tab-'+c.id+'" class="tab-pane"/>'}});return{View:b}});