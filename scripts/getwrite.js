function monit(el){
	if (el==1){
		var per=0;
		var tper=0;
		var usg=0;
		$.ajax({
			type: 'GET',
			url: 'https://6c68e4ab.ngrok.io/v1/paper/17',
			crossDomain: true,
			headers: {
				'accept': 'application/json',
				'content-type': 'application/json'
			},
			success: function (result){
				console.log('Form sent!');
				per=result.percentile;
				usg=result.lifetimeResets;
				var oper=per;
				document.getElementById('paper'+el).setAttribute('oper', oper);
				var rn='Fallon '+el+' ('+result.room+')';
				var rp='Percentage: '+per+'%';
				var ru='Rolls replaced: '+usg;
				$('#rn'+el).html(rn);
				$('#rp'+el).html(rp);
				$('#ru'+el).html(ru);
				getgraph(per, 'rg'+el);
			},
			error: function(){
				console.log("Form wasn't sent");
			}
		});
		var id=window.setInterval(function(){
			document.getElementById('paper'+el).setAttribute('iid', id);
			$.ajax({
				type: 'GET',
				url: 'https://6c68e4ab.ngrok.io/v1/paper/17',
				crossDomain: true,
				headers: {
					'accept': 'application/json',
					'content-type': 'application/json'
				},
				success: function (result){
					console.log('Form sent!');
					//console.log(result);
					per=result.percentile;
					usg=result.lifetimeResets;
					var oper=document.getElementById('paper'+el).getAttribute('oper');
					var rp='Percentage: '+per+'%';
					var ru='Rolls replaced: '+usg;
					$('#rn'+el).html(rn);
					$('#rp'+el).html(rp);
					$('#ru'+el).html(ru);
					if (per==0){
						stopreplace(el);
					}
					getgraph(per, 'rg'+el);
					if (per+20<oper && tper==0){
						$('#thisAwaits'+el).html('<img src="/images/terrible.gif" width="240" height="125" class="d-inline-block align-top" alt="">');
					}
				},
				error: function(){
					console.log("Form wasn't sent");
				}
			});
		},1000);
	}
	else if(el==2){
		var per=100;
		var oper=per;
		var tper=0;
		var usg=document.getElementById('paper'+el).getAttribute('usg');;
		var rn='Fallon '+el+' (bathroom'+el+')';
		var id=window.setInterval(function(){
			document.getElementById('paper'+el).setAttribute('iid', id);
			var rp='Percentage: '+per+'%';
			var ru='Rolls replaced: '+usg;
			$('#rn'+el).html(rn);
			$('#rp'+el).html(rp);
			$('#ru'+el).html(ru);
			if (per==0){
				usg++;
				document.getElementById('paper'+el).setAttribute('usg', usg.toString());
				stopreplace(el);
			}
			getgraph(per, 'rg'+el);
			var rand=0;
			while(rand==0){
				rand=Math.floor(Math.random()*4);
			}
			per-=rand;
			if (per<0){
				per=0;
			}
			if (per+20<oper && tper==0){
				$('#thisAwaits'+el).html('<img src="/images/terrible.gif" width="240" height="125" class="d-inline-block align-top" alt="">');
			}
		},1000);
	}
	else{
		var usg=document.getElementById('paper'+el).getAttribute('usg');
		var per=0;
		if (usg=='1'){
			per=100;
		}
		var oper=per;
		var tper=0;
		if (document.getElementById('paper'+el).getAttribute('newD')!='Free slot'){
			if (per==0){
				document.getElementById('paper'+el).setAttribute('usg', usg.toString());
				stopreplace(el);
			}
			var rn='Fallon '+document.getElementById('paper'+el).getAttribute('newD')+' ('+document.getElementById('paper'+el).getAttribute('newR')+')';
			var rp='Percentage: '+per+'%';
			var ru='Rolls replaced: '+usg;
			$('#rn'+el).html(rn);
			$('#rp'+el).html(rp);
			$('#ru'+el).html(ru);
			getgraph(per, 'rg'+el);
		}
		else{
			var rn='No data to show. Add a new device...';
			$('#rn'+el).html(rn);
		}
	}
}

function stopreplace(el){
	clearInterval(document.getElementById('paper'+el).getAttribute('iid'));
	$('#thisAwaits'+el).html('<img src="/images/pd.svg" width="240" height="240" class="d-inline-block align-top" alt="">');
	document.getElementById('last'+el).classList.remove('invisible');
}

function iDid(el){
	$('#rn'+el).html('Loading ...');
	$('#rp'+el).html('');
	$('#ru'+el).html('');
	$('#rg'+el).html('');	
	$('#thisAwaits'+el).html('');	
	document.getElementById('last'+el).classList.add('invisible');
	monit(el);
}

function getgraph(per, el) {
	// Enter a speed between 0 and 180
	var level = per*180/100;

	// Trig to calc meter point
	var degrees = 180 - level,
		 radius = .5;
	var radians = degrees * Math.PI / 180;
	var x = radius * Math.cos(radians);
	var y = radius * Math.sin(radians);

	// Path: may have to change to create a better triangle
	var mainPath = 'M -.0 -0.025 L .0 0.025 L ',
		 pathX = String(x),
		 space = ' ',
		 pathY = String(y),
		 pathEnd = ' Z';
	var path = mainPath.concat(pathX,space,pathY,pathEnd);

	var data = [{ type: 'scatter',
	   x: [0], y:[0],
		marker: {size: 28, color:'850000'},
		showlegend: false,
		name: 'Roll %',
		text: level,
		hoverinfo: 'text+name'},
	  { values: [50/6, 50/6, 50/6, 50/6, 50/6, 50/6, 50],
	  rotation: 90,
	  text: ['', '', '', '',
				'', '', ''],
	  textinfo: 'text',
	  textposition:'inside',
	  marker: {colors:['#04cc4b', '#29db69',
							 '#63d88d', '#eab4a1',
							 '#f28c99', '#d8475a',
							 '#ffffff']},
	  labels: ['', '', '', '', '', '', ''],
	  hoverinfo: 'label',
	  hole: .5,
	  type: 'pie',
	  showlegend: false
	}];

	var layout = {
	  shapes:[{
		  type: 'path',
		  path: path,
		  fillcolor: '850000',
		  line: {
			color: '850000'
		  }
		}],
	  title: 'What is the roll status',
	  height: 350,
	  width: 400,
	  xaxis: {zeroline:false, showticklabels:false,
				 showgrid: false, range: [-1, 1]},
	  yaxis: {zeroline:false, showticklabels:false,
				 showgrid: false, range: [-1, 1]}
	};

	Plotly.newPlot(el, data, layout);
}