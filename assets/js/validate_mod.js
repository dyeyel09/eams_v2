!function(n,t,h){function e(e,t,a,n){this.callback=a||f.callback,this.errors=[],this.fields={},this.form=this._formByNameOrNode(e)||{},this.messages={},this.handlers={},this.conditionals={},this.ajax=n;for(var i=0,s=t.length;i<s;i++){var r=t[i];if((r.name||r.names)&&r.rules)if(r.names)for(var l=0,o=r.names.length;l<o;l++)this._addField(r,r.names[l]);else this._addField(r,r.name);else console.warn("validate.js: The following field is being skipped due to a misconfiguration:"),console.warn(r),console.warn("Check to ensure you have properly configured a name and rules for this field")}var u,d=this.form.onsubmit;this.form.onsubmit=(u=this,function(e){try{return result=u._validateForm(e)&&(d===h||d())}catch(e){}})}function s(e,t){var a;if(!(0<e.length)||"radio"!==e[0].type&&"checkbox"!==e[0].type)return e[t];for(a=0,elementLength=e.length;a<elementLength;a++)if(e[a].checked)return e[a][t]}var f={messages:{required:"The %s field is required.",equalsfield:"The %s field does not match the %s field.",default:"The %s field is still set to default, please change.",valid_email:"The %s field must contain a valid email address.",valid_emails:"The %s field must contain all valid email addresses.",min_len:"The %s field must be at least %s characters in length.",max_len:"The %s field must not exceed %s characters in length.",exact_len:"The %s field must be exactly %s characters in length.",min_numeric:"The %s field must contain a number, equal to or greater than %s.",max_numeric:"The %s field must contain a number, equal to or less than %s.",alpha:"The %s field may only contain letters.",alpha_numeric:"The %s field may only contain letters and numbers.",alpha_dash:"The %s field may only contain letters and dashes.",alpha_space:"The %s field may only contain letters and spaces.",numeric:"The %s field must be a number.",integer:"The %s field must be a number without a decimal.",decimal:"The %s field must contain a decimal number.",is_natural:"The %s field must contain only positive numbers.",is_natural_no_zero:"The %s field must contain a number greater than zero.",valid_ip:"The %s field must contain a valid IP.",valid_base64:"The %s field must contain a base64 string.",valid_credit_card:"The %s field must contain a valid credit card number.",required_file:"The %s field must contain files.",valid_url:"The %s field must contain a valid URL.",greater_than_date:"The %s field must contain a more recent date than %s.",less_than_date:"The %s field must contain an older date than %s.",greater_than_or_equal_date:"The %s field must contain a date that's at least as recent as %s.",less_than_or_equal_date:"The %s field must contain a date that's %s or older.",valid_date:"The %s field must contain a valid date.",valid_name:"The %s should be a valid name",url_exists:"The %s URL does not exist.",contains_list:"The %s selected is invalid.",min_age:"The %s  field needs to have an age greater than or equal to %s .",starts:"The %s  field needs to start with %s .",extensions:"The %s field can only have one of the following extensions: %s",phone_number:"The %s field needs to be a valid Phone Number",regex:"The %s field needs to contain a value with valid format",valid_boolean:"The %s field has to be either true or false.",valid_filesize:"The %s uploaded size exceeds the allowable limit %s.",is_valid_file:"The %s uploading encountered error."},callback:function(e,t){}},c=/^(.+?)\,(.+)$/,a=/^[0-9]+$/,i=/^\-?[0-9]+$/,r=/^\-?[0-9]*\.?[0-9]+$/,l=/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/,o=/^[a-z]+$/i,u=/^[a-z0-9]+$/i,d=/^[a-z_\-]+$/i,p=/^[0-9]+$/i,m=/^[1-9][0-9]*$/i,v=/^((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){3}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})$/i,_=/[^a-zA-Z0-9\/\+=]/i,g=/^[\d\-\s]+$/,y=/^((http|https):\/\/(\w+:{0,1}\w*@)?(\S+)|)(:[0-9]+)?(\/|\/([\w#!:.?+=&%@!\-\/]))?$/,b=/\d{4}-\d{1,2}-\d{1,2}/,T=/^[\+]?(\d[\s-\.]?)?[\(\[\s-\.]{0,2}?\d{3}[\)\]\s-\.]{0,2}?\d{3}[\s-\.]?\d{4,5}$/,x=/^([a-z \p{L} '-])+$/i;e.prototype.setMessage=function(e,t){return this.messages[e]=t,this},e.prototype.registerCallback=function(e,t){return e&&"string"==typeof e&&t&&"function"==typeof t&&(this.handlers[e]=t),this},e.prototype.registerConditional=function(e,t){return e&&"string"==typeof e&&t&&"function"==typeof t&&(this.conditionals[e]=t),this},e.prototype._formByNameOrNode=function(e){return"object"==typeof e?e:t.forms[e]},e.prototype._addField=function(e,t){this.fields[t]={name:t,display:e.display||t,rules:e.rules,depends:e.depends,id:null,element:null,type:null,value:null,checked:null}},e.prototype._validateForm=function(e){for(var t in this.errors=[],this.fields){var a,n;this.fields.hasOwnProperty(t)&&(a=this.fields[t]||{},(n=this.form[a.name])&&n!==h&&(a.id=s(n,"id"),a.element=n,a.type=(0<n.length?n[0]:n).type,a.value=s(n,"value"),a.checked=s(n,"checked"),a.depends&&"function"==typeof a.depends?a.depends.call(this,a)&&this._validateField(a):a.depends&&"string"==typeof a.depends&&this.conditionals[a.depends]&&!this.conditionals[a.depends].call(this,a)||this._validateField(a)))}var i;return"function"==typeof this.callback&&this.callback(this.errors,this.fields,e),0<this.errors.length?(e&&e.preventDefault?e.preventDefault():event&&(event.returnValue=!1),i=!1):(i=!0,1==this.ajax&&(i=!1)),i},e.prototype._validateField=function(e){var t,a,n=e.rules.split("|"),i=e.rules.indexOf("required"),s=!e.value||""===e.value||e.value===h;for("file"==e.type&&(i=e.rules.indexOf("required_file")),t=0,ruleLength=n.length;t<ruleLength;t++){var r=n[t],l=null,o=!1,u=c.exec(r);if((-1!==i||-1!==r.indexOf("!callback_")||!s)&&(u&&(r=u[1],l=u[2]),"!"===r.charAt(0)&&(r=r.substring(1,r.length)),"function"==typeof this._hooks[r]?this._hooks[r].apply(this,[e,l])||(o=!0):"callback_"===r.substring(0,9)&&(r=r.substring(9,r.length),"function"==typeof this.handlers[r]&&!1===this.handlers[r].apply(this,[e.value,l,e])&&(o=!0)),o)){var d,u=this.messages[e.name+"."+r]||this.messages[r]||f.messages[r],o="An error has occurred with the "+e.display+" field.";for(u&&(o=u.replace("%s",e.display),l&&("file"==e.type&&"valid_filesize"==r&&(l=formatBytes(l)),o=o.replace("%s",this.fields[l]?this.fields[l].display:l))),a=0;a<this.errors.length;a+=1)e.id===this.errors[a].id&&(d=this.errors[a]);r=d||{id:e.id,display:e.display,element:e.element,name:e.name,message:o,messages:[],rule:r};r.messages.push(o),d||this.errors.push(r)}}},e.prototype._getValidDate=function(e){if(!e.match("today")&&!e.match(b))return!1;var t=new Date;return e.match("today")||(e=e.split("-"),t.setFullYear(e[0]),t.setMonth(e[1]-1),t.setDate(e[2])),t},e.prototype._hooks={required:function(e){var t=e.value.trim();return"checkbox"===e.type||"radio"===e.type?!0===e.checked:null!==t&&""!==t},default:function(e,t){return e.value!==t},equalsfield:function(e,t){t=this.form[t];return!!t&&e.value===t.value},valid_email:function(e){return l.test(e.value)},valid_emails:function(e){for(var t=e.value.split(/\s*,\s*/g),a=0,n=t.length;a<n;a++)if(!l.test(t[a]))return!1;return!0},min_len:function(e,t){return!!a.test(t)&&e.value.length>=parseInt(t,10)},max_len:function(e,t){return!!a.test(t)&&e.value.length<=parseInt(t,10)},exact_len:function(e,t){return!!a.test(t)&&e.value.length===parseInt(t,10)},max_numeric:function(e,t){return!!r.test(e.value)&&parseFloat(e.value)>=parseFloat(t)},min_numeric:function(e,t){return!!r.test(e.value)&&parseFloat(e.value)<=parseFloat(t)},alpha:function(e){return o.test(e.value)},alpha_numeric:function(e){return u.test(e.value)},alpha_dash:function(e){return d.test(e.value)},alpha_space:function(e){return d.test(e.value)},numeric:function(e){return a.test(e.value)},integer:function(e){return i.test(e.value)},decimal:function(e){return r.test(e.value)},is_natural:function(e){return p.test(e.value)},is_natural_no_zero:function(e){return m.test(e.value)},valid_ip:function(e){return v.test(e.value)},valid_base64:function(e){return _.test(e.value)},valid_url:function(e){return y.test(e.value)},valid_date:function(e){return!!this._getValidDate(e.value)},valid_name:function(e){return x.test(e.value)},valid_credit_card:function(e){if(!g.test(e.value))return!1;for(var t=0,a=0,n=!1,i=e.value.replace(/\D/g,""),s=i.length-1;0<=s;s--){var r=i.charAt(s),a=parseInt(r,10);n&&9<(a*=2)&&(a-=9),t+=a,n=!n}return t%10==0},url_exists:function(e){return!0},required_file:function(e){return"file"==e.type&&""!=e.value},is_valid_file:function(e){return"file"==e.type},greater_than_date:function(e,t){e=this._getValidDate(e.value),t=this._getValidDate(t);return!(!t||!e)&&t<e},less_than_date:function(e,t){e=this._getValidDate(e.value),t=this._getValidDate(t);return!(!t||!e)&&e<t},greater_than_or_equal_date:function(e,t){e=this._getValidDate(e.value),t=this._getValidDate(t);return!(!t||!e)&&t<=e},less_than_or_equal_date:function(e,t){e=this._getValidDate(e.value),t=this._getValidDate(t);return!(!t||!e)&&e<=t},contains_list:function(e,t){t=(t=t.toLowerCase()).trim();e=e.value;e=(e=e.toLowerCase()).trim();t.split(";");return-1<t.indexOf(e)},min_age:function(e,t){return!0},starts:function(e,t){return str1.startsWith(t)},extensions:function(e,t){if("file"!==e.type)return!1;if(""==e.value)return!1;for(var a=e.value.substr(e.value.lastIndexOf(".")+1),n=t.split(";"),i=!1,s=0,r=n.length;s<r;s++)a.toUpperCase()==n[s].toUpperCase()&&(i=!0);return i},valid_filesize:function(e,t){if("file"!==e.type)return!1;if(""==e.value)return!1;var a=!0;return n.FileReader||console.log("The FILE API isn't supported on this browser yet."),e.element.files?e.element.files[0].size>t&&(a=!1):console.log("This browser doesn't seem to support the `files` property of file inputs."),a},phone_number:function(e){return T.test(e.value)},regex:function(e,t){return t.test(e.value)},valid_boolean:function(e){for(var t=["1","true",!0,1,"0","false",!1,0,"yes","no","on","off"],a=!1,n=0,i=t.length,s=e.value;n<i;n++)s.toUpperCase()==t[n].toUpperCase()&&(a=!0);return a}},e.prototype.validateOne=function(e){var t=this.fields[e]||{},e=this.form[t.name];if(this.errors=[],e&&e!==h)if(t.id=s(e,"id"),t.element=e,t.type=(0<e.length?e[0]:e).type,t.value=s(e,"value"),t.checked=s(e,"checked"),t.depends&&"function"==typeof t.depends){if(t.depends.call(this,t))return this._validateField(t),!(0<this.errors.length)||this.errors}else{if(!t.depends||"string"!=typeof t.depends||!this.conditionals[t.depends])return this._validateField(t),!(0<this.errors.length)||this.errors;if(this.conditionals[t.depends].call(this,t))return this._validateField(t),!(0<this.errors.length)||this.errors}return!0},n.FormValidator=e}(window,document),"undefined"!=typeof module&&module.exports&&(module.exports=FormValidator);