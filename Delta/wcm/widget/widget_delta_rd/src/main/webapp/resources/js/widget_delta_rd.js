var MyWidget = SuperWidget.extend({
	init: function () {
        
        $(document).ready(function() {
            var ds = DatasetFactory.getDataset("ds_delta_rd").values;
            var userLogado = WCMAPI.userCode;
            
            for(var i = ds.length - 1; ; i--) {
            	
            	var solicitante = ds[i]['nomeRequisitante'];
                var pid = ds[i]['numeroSolicita'];
                var valor = ds[i]['vlrTotal'];
                var ccusto =  ds[i]['ccusto'];
                var dtaAbertura =  ds[i]['dtSolic'];
                var aprovador =  ds[i]['loginResponsaCc'];
              
                var URL = WCMAPI.getServerURL() + "/portal/p/01/pageworkflowview?app_ecm_workflowview_detailsProcessInstanceID=" + pid;
                var status = ds[i]['statusAtividade'];
                
                if (status == "Aprovação" && userLogado == aprovador){
                	$('#table tbody').append('' +
                            '<tr>' +
                                '<td>' +
                                    '<a href="'+ URL +' ">' +
                                        '<i class="fluigicon fluigicon-export icon-xs" style="margin-right:4px;"></i>' + pid +
                                    '</a>' +
                                '</td>' +
                                '<td>'+ solicitante +'</td>' +
                                '<td>'+ ccusto +'</td>' +
                                '<td>'+ dtaAbertura +'</td>' +
                                '<td>'+ valor +'</td>' +
                            '</tr>' +
                        '');
                }
            }
        });
    },
});

