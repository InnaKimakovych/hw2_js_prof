var obj1 = {
a:1
}
var obj2 = {
b:2
}
var obj3 = {
c:3
}

var mixin = function () {
	var rez = {}, 
		i, 
		key;
	for(i = 0; i < arguments.length; i += 1) {
		for(key in arguments[i]) {
			rez[key] = arguments[i][key];
		}
	}
	console.log(rez);
}

mixin(obj1, obj2, obj3);
