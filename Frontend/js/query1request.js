/**
 * Created by rishabh on 13/7/17.
 */
$(function(){
    $('#cultural').click(function(){
        $.get('/database/query1?query1='+cultural,function(data){
            console.log(data);
        })
    })
    $('#technical').click(function(){
        $.get('/database/query1?query1='+technical,function(data){
            console.log(data);
        })
    })
})