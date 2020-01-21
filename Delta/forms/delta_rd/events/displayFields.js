function displayFields(form,customHTML){
    var Now_State =parseInt(getValue("WKNumState"));

    if(Now_State==0 || Now_State==4){ //Inicio
        var api = consult_API();
        form.setValue("nomeRequisitante",api.fullName);
        
        // instancia o objeto data -----
        var date = new Date();
        var month = date.getMonth()+ 1;
        
        if (month.length <= 1) {
            month = '0' + month;
        } // ---------------------------
        
        // Formata a exibição da data (Dia/mes/ano 00:00:00) 
        var dataAtual = date.getDate() + "/" + month + "/" + date.getFullYear() + " " + date.getHours() + ":" + date.getMinutes();
        //Carrega no input o objeto data
        var inicioP = date.getDate() + "/" + month + "/" + date.getFullYear();

        form.setValue('dtSolic', dataAtual);

        form.setVisibleById("panelAprov", false);
        form.setVisibleById("panelDp", false);
        
    }
    if(Now_State==5){ // Aprovacao responsavel cc
        var api = consult_API();
        form.setValue("NomeAprovador",api.fullName);

        form.setVisibleById("panelDp", false);

        form.setEnabled("ccusto", false);
        form.setEnabled("periodofim", false);
        form.setEnabled("descViagen", false);
        var indexes = form.getChildrenIndexes("tablePaiFilho");
        if (indexes.length > 0) {
          for (var i = 0; i < indexes.length; i++) {
            form.setEnabled("dtCusto___" + indexes[i], false);            
            form.setEnabled("tipo___" + indexes[i], false);
            form.setEnabled("valor___" + indexes[i], false);
          }   
        }
        form.setHideDeleteButton(true);
        form.setVisibleById("btn_add", false);
    }
    if(Now_State==13){ //Informa data reembolso
        var api = consult_API();
        form.setValue("nomeDPessoal",api.fullName);


        form.setEnabled("ccusto", false);
        form.setEnabled("periodofim", false);
        form.setEnabled("descViagen", false);
        var indexes = form.getChildrenIndexes("tablePaiFilho");
        if (indexes.length > 0) {
          for (var i = 0; i < indexes.length; i++) {
            form.setEnabled("dtCusto___" + indexes[i], false);            
            form.setEnabled("tipo___" + indexes[i], false);
            form.setEnabled("valor___" + indexes[i], false);
          }   
        }
        form.setHideDeleteButton(true);
        form.setVisibleById("btn_add", false);
        form.setEnabled("aprovReemb", false);
        form.setEnabled("motivo", false);

    }
    if(Now_State==15){ // Avalia recusa
        form.setVisibleById("panelDp", false);

        form.setEnabled("ccusto", false);
        form.setEnabled("periodofim", false);
        form.setEnabled("descViagen", false);
        var indexes = form.getChildrenIndexes("tablePaiFilho");
        if (indexes.length > 0) {
          for (var i = 0; i < indexes.length; i++) {
            form.setEnabled("dtCusto___" + indexes[i], false);            
            form.setEnabled("tipo___" + indexes[i], false);
            form.setEnabled("valor___" + indexes[i], false);
          }   
        }
        form.setHideDeleteButton(true);
        form.setVisibleById("btn_add", false);
        form.setEnabled("aprovReemb", false);
        form.setEnabled("motivo", false);
    }
 }