
$(document).ready(onReady);

function addThing(){
    console.log('in addThing function');
    let objectToSend = {
        name: $('#nameIn').val()
    };
    $.ajax({
        type: 'POST',
        url: '/things',
        data: objectToSend
    }).then(function(response){
        console.log('back from server with:', response);
        getThings();
    }).catch(function(err){
        alert(err);
    }) //end POST
}

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
    $('#addThing').on('click', addThing);
    getThings();
}