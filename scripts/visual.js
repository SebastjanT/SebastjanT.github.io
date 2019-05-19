function p1(action){
	if(action==2){
		if (document.getElementById('paper1').getAttribute('state')=="open"){
			clearInterval(document.getElementById('paper1').getAttribute('iid'));
			setTimeout(function(){
				$('#rn1').html('Loading ...');
				$('#rp1').html('');
				$('#ru1').html('');
				$('#rg1').html('');	
				$('#thisAwaits1').html('');
				document.getElementById('last1').classList.add('invisible');
			}, 500);
			document.getElementById('paper1').setAttribute('state', 'closed');
			document.getElementById('p1').classList.remove('btn-success');
			document.getElementById('p1').classList.add('btn-outline-success');
			if (document.getElementById('showS').getAttribute('select')=='block'){
				document.getElementById('p1').style.backgroundColor='#ffffff';
			}
		}
		else{
			monit(1);
			document.getElementById('paper1').setAttribute('state', 'open');
			document.getElementById('p1').classList.remove('btn-outline-success');
			document.getElementById('p1').classList.add('btn-success');
			if (document.getElementById('showS').getAttribute('select')=='block'){
				document.getElementById('p1').style.backgroundColor='#cce0c6';
			}
		}
	}
	if (action==1){
		if (document.getElementById('paper1').getAttribute('state')=="open"){
			document.getElementById('p1').classList.remove('btn-outline-success');
			document.getElementById('p1').classList.add('btn-success');
			if (document.getElementById('showS').getAttribute('select')=='block'){
				document.getElementById('p1').style.backgroundColor='#cce0c6';
			}
		}
	}
}

function p2(action){
	if(action==2){
		if (document.getElementById('paper2').getAttribute('state')=="open"){
			clearInterval(document.getElementById('paper2').getAttribute('iid'));
			setTimeout(function(){
				$('#rn2').html('Loading ...');
				$('#rp2').html('');
				$('#ru2').html('');
				$('#rg2').html('');	
				$('#thisAwaits2').html('');	
				document.getElementById('last2').classList.add('invisible');
			}, 500);
			document.getElementById('paper2').setAttribute('state', 'closed');
			document.getElementById('p2').classList.remove('btn-success');
			document.getElementById('p2').classList.add('btn-outline-success');
			if (document.getElementById('showS').getAttribute('select')=='block'){
				document.getElementById('p2').style.backgroundColor='#ffffff';
			}
		}
		else{
			monit(2);
			document.getElementById('paper2').setAttribute('state', 'open');
			document.getElementById('p2').classList.remove('btn-outline-success');
			document.getElementById('p2').classList.add('btn-success');
			if (document.getElementById('showS').getAttribute('select')=='block'){
				document.getElementById('p2').style.backgroundColor='#cce0c6';
			}
		}
	}
	if (action==1){
		if (document.getElementById('paper2').getAttribute('state')=="open"){
			document.getElementById('p2').classList.remove('btn-outline-success');
			document.getElementById('p2').classList.add('btn-success');
			if (document.getElementById('showS').getAttribute('select')=='block'){
				document.getElementById('p2').style.backgroundColor='#cce0c6';
			}
		}
	}
}

function p3(action){
	if(action==2){
		if (document.getElementById('paper3').getAttribute('state')=="open"){
			clearInterval(document.getElementById('paper3').getAttribute('iid'));
			setTimeout(function(){
				$('#rn3').html('Loading ...');
				$('#rp3').html('');
				$('#ru3').html('');
				$('#rg3').html('');	
				$('#thisAwaits3').html('');	
				document.getElementById('last3').classList.add('invisible');
			}, 500);
			document.getElementById('paper3').setAttribute('state', 'closed');
			document.getElementById('p3').classList.remove('btn-success');
			document.getElementById('p3').classList.add('btn-outline-success');
			if (document.getElementById('showS').getAttribute('select')=='block'){
				document.getElementById('p3').style.backgroundColor='#ffffff';
			}
		}
		else{
			monit(3);
			document.getElementById('paper3').setAttribute('state', 'open');
			document.getElementById('p3').classList.remove('btn-outline-success');
			document.getElementById('p3').classList.add('btn-success');
			if (document.getElementById('showS').getAttribute('select')=='block'){
				document.getElementById('p3').style.backgroundColor='#cce0c6';
			}
		}
	}
	if (action==1){
		if (document.getElementById('paper3').getAttribute('state')=="open"){
			document.getElementById('p3').classList.remove('btn-outline-success');
			document.getElementById('p3').classList.add('btn-success');
			if (document.getElementById('showS').getAttribute('select')=='block'){
				document.getElementById('p3').style.backgroundColor='#cce0c6';
			}
		}
	}
}

var flip=0;

$(document).ready(function() {
	var line='<div class="row">\
					<div class="col">\
						<h1>\
						<button class="btn btn-outline-success btn-block shadow" type="button" data-toggle="collapse" data-target="#paper1" aria-expanded="false" aria-controls="paper1" onclick="p1(2)" id="p1">\
						<img src="/images/p.svg" width="30" height="30" class="d-inline-block align-top" alt="">\
						Fallon 1\
						</button>\
						</h1>\
					</div>\
					<div class="col">\
						<h1>\
						<button class="btn btn-outline-success btn-block shadow" type="button" data-toggle="collapse" data-target="#paper2" aria-expanded="false" aria-controls="paper2" onclick="p2(2)" id="p2">\
						<img src="/images/p.svg" width="30" height="30" class="d-inline-block align-top" alt="">\
						Fallon 2\
						</button></h1>\
					</div>\
					<div class="col">\
						<h1>\
						<button class="btn btn-outline-success btn-block shadow" type="button" data-toggle="collapse" data-target="#paper3" aria-expanded="false" aria-controls="paper3" onclick="p3(2)" id="p3">\
						<img src="/images/p.svg" width="30" height="30" class="d-inline-block align-top" alt="">\
						'+document.getElementById('paper3').getAttribute('newD')+'\
						</button>\
						</h1>\
					</div>\
				</div>';
		
		
	var block='<div class="row">\
					<div class="col">\
						<h1>\
						<button class="btn btn-outline-success btn-block shadow" style="background: #ffffff url('+"'/images/p1.svg'"+')no-repeat; background-size: 170px; width: 200px; background-position: 15px 15px; height: 200px; margin-left: auto; margin-right: auto" type="button" data-toggle="collapse" data-target="#paper1" aria-expanded="false" aria-controls="paper1" onclick="p1(2)" id="p1"></button>\
						</h1>\
					</div>\
					<div class="col">\
						<h1>\
						<button class="btn btn-outline-success btn-block shadow" style="background: #ffffff url('+"'/images/p2.svg'"+')no-repeat; background-size: 170px; width: 200px; background-position: 15px 15px; height: 200px; margin-left: auto; margin-right: auto" type="button" data-toggle="collapse" data-target="#paper2" aria-expanded="false" aria-controls="paper2" onclick="p2(2)" id="p2"></button>\
						</h1>\
					</div>\
					<div class="col">\
						<h1>\
						<button class="btn btn-outline-success btn-block shadow" style="background: #ffffff url('+"'/images/p3.svg'"+') no-repeat; background-size: 170px; width: 200px; background-position: 15px 15px; height: 200px; margin-left: auto; margin-right: auto" type="button" data-toggle="collapse" data-target="#paper3" aria-expanded="false" aria-controls="paper3" onclick="p3(2)" id="p3"></button>\
						</h1>\
					</div>\
				</div>';
				
	
	$('#p2').click(function(p) {
		if (document.getElementById('p2').getAttribute('aria-expanded')=="true"){
			document.getElementById('p2').classList.remove('btn-primary');
			document.getElementById('p2').classList.add('btn-secondary');
		}
		else{
			document.getElementById('p2').classList.remove('btn-secondary');
			document.getElementById('p2').classList.add('btn-primary');
		}
	});
	$('#p3').click(function(p) {
		if (document.getElementById('p3').getAttribute('aria-expanded')=="true"){
			document.getElementById('p3').classList.remove('btn-primary');
			document.getElementById('p3').classList.add('btn-secondary');
		}
		else{
			document.getElementById('p3').classList.remove('btn-secondary');
			document.getElementById('p3').classList.add('btn-primary');
		}
	});
	$('#showS').click(function(p) {
		if (document.getElementById('showS').getAttribute('select')=='line'){
			document.getElementById('showS').setAttribute('select', 'block');
			$('#showS').html('Block view');
			if (document.getElementById('openS').getAttribute('state')=='open'){
				$('#main').html(block);
				p1(1);
				p2(1);
				p3(1);
			}
		}
		else{
			document.getElementById('showS').setAttribute('select', 'line');
			$('#showS').html('Line view');
			if (document.getElementById('openS').getAttribute('state')=='open'){
				var line='<div class="row">\
					<div class="col">\
						<h1>\
						<button class="btn btn-outline-success btn-block shadow" type="button" data-toggle="collapse" data-target="#paper1" aria-expanded="false" aria-controls="paper1" onclick="p1(2)" id="p1">\
						<img src="/images/p.svg" width="30" height="30" class="d-inline-block align-top" alt="">\
						Fallon 1\
						</button>\
						</h1>\
					</div>\
					<div class="col">\
						<h1>\
						<button class="btn btn-outline-success btn-block shadow" type="button" data-toggle="collapse" data-target="#paper2" aria-expanded="false" aria-controls="paper2" onclick="p2(2)" id="p2">\
						<img src="/images/p.svg" width="30" height="30" class="d-inline-block align-top" alt="">\
						Fallon 2\
						</button></h1>\
					</div>\
					<div class="col">\
						<h1>\
						<button class="btn btn-outline-success btn-block shadow" type="button" data-toggle="collapse" data-target="#paper3" aria-expanded="false" aria-controls="paper3" onclick="p3(2)" id="p3">\
						<img src="/images/p.svg" width="30" height="30" class="d-inline-block align-top" alt="">\
						'+document.getElementById('paper3').getAttribute('newD')+'\
						</button>\
						</h1>\
					</div>\
				</div>';
				$('#main').html(line);
				p1(1);
				p2(1);
				p3(1);
			}
		}
	});
	$('#openS').click(function(p) {
		if (document.getElementById('showS').getAttribute('select')=='line'){
			if (document.getElementById('openS').getAttribute('state')=='open'){
				p1(1);
				p2(1);
				p3(1);
			}
			else{
				document.getElementById('openS').setAttribute('state', 'open');
				line='<div class="row">\
					<div class="col">\
						<h1>\
						<button class="btn btn-outline-success btn-block shadow" type="button" data-toggle="collapse" data-target="#paper1" aria-expanded="false" aria-controls="paper1" onclick="p1(2)" id="p1">\
						<img src="/images/p.svg" width="30" height="30" class="d-inline-block align-top" alt="">\
						Fallon 1\
						</button>\
						</h1>\
					</div>\
					<div class="col">\
						<h1>\
						<button class="btn btn-outline-success btn-block shadow" type="button" data-toggle="collapse" data-target="#paper2" aria-expanded="false" aria-controls="paper2" onclick="p2(2)" id="p2">\
						<img src="/images/p.svg" width="30" height="30" class="d-inline-block align-top" alt="">\
						Fallon 2\
						</button></h1>\
					</div>\
					<div class="col">\
						<h1>\
						<button class="btn btn-outline-success btn-block shadow" type="button" data-toggle="collapse" data-target="#paper3" aria-expanded="false" aria-controls="paper3" onclick="p3(2)" id="p3">\
						<img src="/images/p.svg" width="30" height="30" class="d-inline-block align-top" alt="">\
						'+document.getElementById('paper3').getAttribute('newD')+'\
						</button>\
						</h1>\
					</div>\
				</div>';
				$('#main').html(line);
			}
			if (flip==0){
				$('#openS').html('Close your paper roll selector');
				flip=1;
			}
			else{
				$('#openS').html('Open your paper roll selector');
				flip=0;
			}
		}
		else{
			if (document.getElementById('openS').getAttribute('state')=='open'){
				p1(1);
				p2(1);
				p3(1);
			}
			else{
				document.getElementById('openS').setAttribute('state', 'open');
				$('#main').html(block);
			}
			if (flip==0){
				$('#openS').html('Close your paper roll selector');
				flip=1;
			}
			else{
				$('#openS').html('Open your paper roll selector');
				flip=0;
			}
		}
	});
	
	$('#i1').fadeIn(2000);
	$('#i2').delay(1000).fadeIn(2000);
	$('#i3').delay(2000).fadeIn(2000);
	$('#i4').delay(3000).fadeIn(2000);
	$('#i1').delay(1500).fadeOut(1000);
	$('#i2').delay(1500).fadeOut(500);
	$('#i3').delay(1500).fadeOut(500);
	$('#i4').delay(1500).fadeOut(500);
	setTimeout(function(){
		document.getElementById("openS").click();
	}, 8000);
});