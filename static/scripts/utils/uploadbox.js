!function(a){jQuery.event.props.push("dataTransfer"),a.uploadpost=function(b){var c=a.extend({},{data:{},success:function(){},error:function(){},progress:function(){},url:null,maxfilesize:2048,error_filesize:"File exceeds 2GB. Please use an FTP client.",error_default:"Please make sure the file is available.",error_server:"Upload request failed.",error_login:"Uploads require you to log in."},b),d=c.data;if(d.error_message)return void c.error(d.error_message);var e=new FormData;for(var f in d.payload)e.append(f,d.payload[f]);var g=0;for(var f in d.files){var h=d.files[f];e.append(h.name,h.file,h.file.name),g+=h.file.size}return g>1048576*c.maxfilesize?void c.error(c.error_filesize):(xhr=new XMLHttpRequest,xhr.open("POST",c.url,!0),xhr.setRequestHeader("Accept","application/json"),xhr.setRequestHeader("Cache-Control","no-cache"),xhr.setRequestHeader("X-Requested-With","XMLHttpRequest"),xhr.onreadystatechange=function(){if(xhr.readyState==xhr.DONE){var a=null;if(xhr.responseText)try{a=jQuery.parseJSON(xhr.responseText)}catch(b){a=xhr.responseText}if(xhr.status<200||xhr.status>299){var d=xhr.statusText;403==xhr.status?d=c.error_login:0==xhr.status?d=c.error_server:d||(d=c.error_default),c.error(d+" ("+xhr.status+")")}else c.success(a)}},xhr.upload.addEventListener("progress",function(a){a.lengthComputable&&c.progress(Math.round(100*a.loaded/a.total))},!1),console.debug("uploadbox::uploadpost() - Posting following data:"),console.debug(c),void xhr.send(e))},a.fn.uploadinput=function(b){var c=this,d=a.extend({},{ondragover:function(){},ondragleave:function(){},onchange:function(){},multiple:!1},b),e=a('<input type="file" style="display: none" '+(d.multiple&&"multiple"||"")+"/>");return c.append(e.change(function(b){d.onchange(b.target.files),a(this).val("")})),c.on("drop",function(a){d.ondragleave(a),a.dataTransfer&&(d.onchange(a.dataTransfer.files),a.preventDefault())}),c.on("dragover",function(a){a.preventDefault(),d.ondragover(a)}),c.on("dragleave",function(a){a.stopPropagation(),d.ondragleave(a)}),{dialog:function(){e.trigger("click")}}},a.fn.uploadbox=function(b){function c(a){if(a&&a.length&&!p){for(var b=n,c=0;c<a.length;c++){var d=String(n++);m[d]=a[c],l.announce(d,m[d]),o++}return b}}function d(a){m[a]&&(delete m[a],o--)}function e(){if(0==o||q)return q=!1,p=!1,void l.complete();p=!0;var b=-1;for(var c in m){b=c;break}m[b];d(b),a.uploadpost({url:l.url,data:l.initialize(b),success:function(a){l.success(b,a),e()},error:function(a){l.error(b,a),e()},progress:function(a){l.progress(b,a)}})}function f(){r.dialog()}function g(a){for(a in m)d(a)}function h(){p||(p=!0,e())}function i(){q=!0}function j(b){return l=a.extend({},l,b)}function k(){return window.File&&window.FormData&&window.XMLHttpRequest&&window.FileList}var l=a.extend({},{dragover:function(){},dragleave:function(){},announce:function(){},initialize:function(){},progress:function(){},success:function(){},error:function(a,b){alert(b)},complete:function(){}},b),m={},n=0,o=0,p=!1,q=!1,r=a(this).uploadinput({multiple:!0,onchange:function(a){c(a)},ondragover:b.ondragover,ondragleave:b.ondragleave});return{select:f,add:c,remove:d,start:h,stop:i,reset:g,configure:j,compatible:k}}}(jQuery);
//# sourceMappingURL=../../maps/utils/uploadbox.js.map