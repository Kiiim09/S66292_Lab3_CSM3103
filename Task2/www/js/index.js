document.addElementById("takepic").addEventListener("click", cameraTakePicture);

function cameraTakePicture(){
    navigator.camera.getPicture(
    onSuccess,
    onFailed,
    {
        quality:50,
        destinationType:Camera.DestinationType.DATA_URL
    }
  );
}

function onSuccess(imageData){
    var image = document.getElementById("myImage");
    image.src = "data:image.webp;base64," + imageData;
}

function onFailed(message){
    alert("Failed because " + message);
}