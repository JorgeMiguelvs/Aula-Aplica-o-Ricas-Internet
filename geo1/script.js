//declara uma function getlocation, que sera responsavel por obter a locaização do usuario 

function getlocation()
{//testar se não existe a localização
    if(!navigator.geolocation)
    {
        return null
    }

    //se ele pssar pelo erro, pegamos a localização
    navigator.geolocation.getCurrentPosition(function(pos){
        //selecionar o elemneto html com o id lat e atular seu texto com a latitude obtida
        //a partir do onj position
        document.getElementById("lat").innerText=pos.coords.latitude

        //selecionar o elemneto html com o id lat e atular seu texto com a longitude obtida
        //a partir do onj position
        document.getElementById("lon").innerText=pos.coords.longitude
    })
   
}
getlocation()