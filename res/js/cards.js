$(function(){
	var selecionado = 0;
	var cards = ['card1', 
				 'card2', 
				 'card4', 
				 'card8', 
				 'cardint', 
				 'cardcoffee'];


	$('.card').click(function(){
		if(selecionado == 0) escolheCarta($(this).attr('id'));
		else listaCartas();
	});

	function escolheCarta(carta){
		selecionado = 1;
		$('.header').hide();
		for (var i = cards.length - 1; i >= 0; i--) {
			if (cards[i] != carta) 
				$('#'+ cards[i]).hide();
		};
	}

	function listaCartas(){
		$('.header').show();	
		selecionado = 0;
		for (var i = cards.length - 1; i >= 0; i--) {
			$('#' + cards[i]).show();
		};	
	}
});