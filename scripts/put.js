$(document).ready(function() {
	$('#submitF').click(function(p) {
		fdata=$('form#insF').serialize();
		fval=["Hardware_ID=","Room="];
		ftick=0;
		fsplit=fdata.split("&");
		for(i=0;i<fsplit.length;i++){
			fremove=fsplit[i].replace(fval[i], "");
			if (fremove==""){
				ftick++;
			}
			else{
				fsplit[i]=fremove;
			}
		}
		if (ftick!=0){
			console.log("No no no!");
		}
		else{
			p.preventDefault();
			document.getElementById('paper3').setAttribute('newD', fsplit[0]);
			document.getElementById('paper3').setAttribute('newR', fsplit[1]);
			if (document.getElementById('showS').getAttribute('select')=='line'){
				$('#p3').html('<img src="/images/p.svg" width="30" height="30" class="d-inline-block align-top" alt="">'+fsplit[0]);
			}
			document.getElementById('paper3').setAttribute('usg', '0');
		}
	});
});