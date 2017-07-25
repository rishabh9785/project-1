/**
 * Created by rishabh on 13/7/17.
 */
$(function(){

    $('#cultural').click(function(){
        var query1="cultural";
        $.post('/query1',{query1:query1},function(data){
            console.log(data);
            window.location='/culturalsocieties.html';
        })
    })
    $('#technical').click(function(){
        var query1="technical";
        $.post('/query1',{query1:query1},function(data){
            console.log(data);
            window.location= '/techsocieties.html';
        })
    })

})
