function init() {
    $("input[id^='valor___']:last").blur(doFormTotal);
    FLUIGC.calendar('.data')
    var inputs = $("[mask]");
    MaskEvent.initMask(inputs); //Atualiza os campos com 'mask'
} 

function doFormTotal() {    
    var totalr = 0;
    $("input[id^='valor']").each(function() {
        if ($(this).val()) {
            var index = $(this).prop('id').replace('valor___', '');
            
            totalr += parseFloat($(this).val());
            
        }
    });
    parseFloat($("#vlrTotal").val(totalr.toFixed(2)));
}

function fnCustomDelete(oElement){
    fnWdkRemoveChild(oElement);
    doFormTotal();
}

function setSelectedZoomItem(selectedItem) { 
    if(selectedItem.inputId == "ccusto"){
        var selectedColleagueId = selectedItem["nomeRespCentroCusto"];
        var colleagueIds = $('#nomeResponsaCc').val();
        var selectedColleagueId2 = selectedItem["loginRespCentroCusto"];
        var colleagueIds2 = $('#loginResponsaCc').val();
       
        if (colleagueIds) {
            colleagueIds += ',';
            }
        colleagueIds += selectedColleagueId;
        $('#nomeResponsaCc').val(colleagueIds);
        
        if (colleagueIds2) {
            colleagueIds2 += ',';
            }
        colleagueIds2 += selectedColleagueId2;
        $('#loginResponsaCc').val(colleagueIds2);

    }
}

function removedZoomItem(removedItem) {
    if(removedItem.inputId == "ccusto"){
        var removedColleagueId = removedItem["nomeRespCentroCusto"];
        var colleagueIds = $('#nomeResponsaCc').val().split(',');
        var removedColleagueId2 = removedItem["loginRespCentroCusto"];
        var colleagueIds2 = $('#loginResponsaCc').val().split(',');               

        colleagueIds.splice(colleagueIds.indexOf(removedColleagueId), 1);
        colleagueIds2.splice(colleagueIds2.indexOf(removedColleagueId2), 1);
        
        $('#nomeResponsaCc').val(colleagueIds.join(','));
        $('#loginResponsaCc').val(colleagueIds.join(','));
      
    }
}   

$(document).ready(function() {  
    var onlyDate1 = FLUIGC.calendar('#periodofim', {
    pickDate : true,   
    pickTime : false  
    });
    var onlyDate2 = FLUIGC.calendar('#dtaReemb', {
    pickDate : true,   
    pickTime : false  
    });       

});

