$( document ).ready(function() {

    $("#btn-0").click(function(){
        $("#txt-display").val($("#txt-display").val() + $("#btn-0").html());
    });
    
    $("#btn-1").click(function(){
        $("#txt-display").val($("#txt-display").val() + $("#btn-1").html());
    });
    $("#btn-2").click(function(){
        $("#txt-display").val($("#txt-display").val() + $("#btn-2").html());
    });
    $("#btn-3").click(function(){
        $("#txt-display").val($("#txt-display").val() + $("#btn-3").html());
    });
    $("#btn-4").click(function(){
        $("#txt-display").val($("#txt-display").val() + $("#btn-4").html());
    });
    $("#btn-5").click(function(){
        $("#txt-display").val($("#txt-display").val() + $("#btn-5").html());
    });
    $("#btn-6").click(function(){
        $("#txt-display").val($("#txt-display").val() + $("#btn-6").html());
    });
    $("#btn-7").click(function(){
        $("#txt-display").val($("#txt-display").val() + $("#btn-7").html());
    });

    $("#btn-8").click(function(){
        $("#txt-display").val($("#txt-display").val() + $("#btn-8").html());
    });

    $("#btn-9").click(function(){
        $("#txt-display").val($("#txt-display").val() + $("#btn-9").html());
    });

    $("#btn-sum").click(function(){
        $("#txt-display").val($("#txt-display").val() + $("#btn-sum").html());
    });

    $("#btn-sub").click(function(){
        $("#txt-display").val($("#txt-display").val() + $("#btn-sub").html());
    });

    $("#btn-mul").click(function(){
        $("#txt-display").val($("#txt-display").val() + $("#btn-mul").html());
    });

    $("#btn-result").click(function(){
        resultado($("#txt-display").val());
    });

    $("#btn-ce").click(function(){
        $("#txt-display").val('');
    });
});

function resultado(calc){
    var resultado = eval(calc);
    $("#txt-display").val(resultado);
}