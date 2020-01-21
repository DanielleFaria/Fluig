function beforeStateLeave(sequenceId){
	
	if (sequenceId == 13){
		 var folderDto = docAPI.newDocumentDto();		 
		    folderDto.setDocumentDescription("RDV "+ " - Solicitação: " + getValue("WKNumProces") + " - Solicitante: " +  hAPI.getCardValue("nomeRequisitante"));
		    folderDto.setDocumentType("1");
		    folderDto.setParentDocumentId(188771); // Id da pasta principal onde vão ser criadas as pastas filhas

		    // cria a pasta onde serão salvos os anexos
		    var folder = docAPI.createFolder(folderDto, null, null);

		    var attachments = hAPI.listAttachments();

		    for (var i = 0; i < attachments.size(); i++) {
		        var attachment = attachments.get(i);

		        // verifica se é um anexo externo ao GED (tipo 7)
		        if (attachment.getDocumentType() == "7") {

		            // copia o anexo para a pasta de upload para poder recriá-lo na pasta destino
		            docAPI.copyDocumentToUploadArea(attachment.getDocumentId(), attachment.getVersion());

		            attachment.setParentDocumentId(folder.getDocumentId());
		            attachment.setInheritSecurity(true);

		            var attachArray = new java.util.ArrayList();
		            var mainAttach = docAPI.newAttachment();
		            mainAttach.setFileName(attachment.getPhisicalFile());
		            mainAttach.setPrincipal(true);
		            mainAttach.setAttach(false);
		            attachArray.add(mainAttach);

		            // recria o anexo na pasta criada
		            docAPI.createDocument(attachment, attachArray, null, null,null);
		        }
		    }
	}	
}