var i = 0;
var j = 0;
var headingArr = [];
var firstParaArr = [];
var secondParaArr = [];

(function getData() {
	var url = 'https://api.myjson.com/bins/13vg19';
	
	if (window.XMLHttpRequest) {
		var xhr = new XMLHttpRequest();
	}
	//support for older browsers
	else {
		var xhr = new ActiveXObject("Microsoft.XMLHTTP");	
	}	
	
	//start the request
	xhr.open('GET', url, true);
	xhr.setRequestHeader('Content-Type', 'application/json');
	xhr.onreadystatechange = function() {
		if(this.readyState == 4) {
			var res = JSON.parse(xhr.responseText);
			var resLen = res.length;
			for (;i < resLen;i++) {
					headingArr.push(res[i].heading);
					firstParaArr.push(res[i].body_one);
					secondParaArr.push(res[i].body_two);
				}
				
			var anchors = document.querySelectorAll('a');
			var anchorsLen = anchors.length;
			
			for(; j < anchorsLen; j++) {
				if (anchors[j].className !== 'collapsed') {
					anchors[j].className += ' active';
				}				
				document.querySelector('div#optionOne h3').textContent = headingArr[0];
				document.querySelector('div#optionOne p').textContent = firstParaArr[0];
				document.querySelector('div#optionOne p + p').textContent = secondParaArr[0];
				
				document.querySelector('div#optionTwo h3').textContent = headingArr[1];
				document.querySelector('div#optionTwo p').textContent = firstParaArr[1];
				document.querySelector('div#optionTwo p + p').textContent = secondParaArr[1];
				
				document.querySelector('div#optionThree h3').textContent = headingArr[2];
				document.querySelector('div#optionThree p').textContent = firstParaArr[2];
				document.querySelector('div#optionThree p + p').textContent = secondParaArr[2];
			}
		}
		else {
			console.log(this.status);	
		}
	}
	xhr.send();
})();
