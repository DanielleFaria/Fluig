function afterTaskComplete(colleagueId,nextSequenceId,userList){
	if(nextSequenceId == 5){
		hAPI.setCardValue("statusAtividade", "Aprovação");
	}
	if(nextSequenceId == 13){
		hAPI.setCardValue("statusAtividade", "Analise DP");
	}
	if(nextSequenceId == 15){
		hAPI.setCardValue("statusAtividade", "Avalia Recusa");
	}
	if(nextSequenceId == 18 || nextSequenceId == 9){
		hAPI.setCardValue("statusAtividade", "Finalizada");
	}
}