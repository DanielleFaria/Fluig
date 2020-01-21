function verificaAprov(){
	var status = hAPI.getCardValue("aprovReemb");
	
	if (status == 'on')
		return true;
	
	return false;
}