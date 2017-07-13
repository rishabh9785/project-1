/**
 * Created by rishabh on 13/7/17.
 */
$(function(){
    $('a').click(function(){
        var id=this.id;
        $.get('database/query2',{id:id},function(data){
            console.log(data);
        })
    })
})