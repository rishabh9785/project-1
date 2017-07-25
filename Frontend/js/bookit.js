/**
 * Created by rishabh on 13/7/17.
 */
$(function(){
    $('#btn').click(function(){
        var nameval1=$('#nameval').val();
        var emailval1=$('#emailval').val();
        var contactval1=$('#contactval').val();
        $.post('/insert/post',{name:nameval1,email:emailval1,contact:contactval1},function(data){
            console.log(data);
            //window.location('../index.html');
        })
        //createUrl(nameval1,emailval1,contactval1);
        // $.post('/select/create',{name:nameval1,email:emailval1,contact:contactval1},function(data){
        //     console.log(data);
        // })
    })
    // function createUrl(nameval1,emailval1,contactval1) {
    //     $.get({url:"https://api.qrserver.com/v1/create-qr-code/?name="+nameval1+"&email="+emailval1+"&contact="+contactval1+"&size=100x100",
    //         success:function(data) {
    //          console.log("requested url");
    //          console.log(data);
    //
    //         }})
    // }
})