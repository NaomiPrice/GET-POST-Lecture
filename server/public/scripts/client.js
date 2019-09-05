console.log('js');
$(document).ready(onReady());

function getThings(){
    //use AJAX to make get requwest
    $.ajax({
        type: 'GET',
        url: '/things'
    }).then(function(response){
        console.log('back from server with:', response);
        let el = $('#thingsOut');
        el.empty();
        for (let i=0; i<response.length; i++){
            el.append(`<li>${response[i].name}</li>`);
        }//end loop
    }).catch(function(err){
        //catch errors here
        alert(err);
    })
    // console log out response
}// end getThings

function onReady(){
    console.log('JQ');
    getThings();
}