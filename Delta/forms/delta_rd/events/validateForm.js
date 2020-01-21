function validateForm(form){
    var activity = getValue('WKNumState');	
    var WKCompletTask = getValue("WKCompletTask");
    var msg = "";
    
    if(WKCompletTask.equals("true")){

        if (activity == 0 || activity == 4) {
            var indexes = form.getChildrenIndexes("tablePaiFilho");

            if (form.getValue("ccusto") == 0){
                msg += "Selecione o centro de custo\n";
            }if (form.getValue("periodofim") == 0){
                msg += "Preencha a data de retorno da viagem\n";
            }if (form.getValue("descViagen") == 0){
                msg += "Faça uma breve descrição de sua viagen\n";
            }

            if(indexes.length == 0 ){
                msg += "Inclua ao menos um lançamento \n";
            }    
            if(indexes.length >= 1 ){                
                var count = 0 ;
                for (var i = 0; i < indexes.length; i++) {   
                    count = i + 1
                    if(form.getValue("dtCusto___" + indexes[i]) == ""){
                        msg += "Informe a data referente o lançamento da linha" + count + "\n" ;
                    }
                    if(form.getValue("tipo___" + indexes[i]) == null){
                        msg += "Informe o tipo referente o lançamento da linha" + count + "\n"  ;
                    }
                    if(form.getValue("valor___" + indexes[i]) == ""){
                        msg += "Informe o valor referente o lançamento da linha" + count + "\n"  ;
                    }
                }  
            }
        }
        if(activity == 5){
            if (form.getValue("aprovReemb") != "on" && form.getValue("motivo") == 0){
                msg += "Para recusar a solicitação é necessario especificar o motivo\n" ;
            }
        }
        if(activity == 13){
            if ( form.getValue("dtaReemb") == 0){
                msg += "Preencha a data prevista para reembolso\n" ;
            }
        }
    }
    if (msg != "") {
        throw msg
    }
}