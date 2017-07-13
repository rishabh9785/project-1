/**
 * Created by rishabh on 13/7/17.
 */
$(function(){
    $('#btn').click(function(){
        var nameval1=$('#nameval').val();
        var emailval1=$('#emailval').val();
        var contactval1=$('#contactval').val();
        $.post('insert/post',{name:nameval1,email:emailval1,contact:contactval1},function(data){
        console.log(data);
        })

    })
})