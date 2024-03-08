function generateQRCode(){
    const userInput = document.getElementById('userInput');
    const qrBox = document.getElementById('qrBox');
    const qrImage = document.getElementById('qrImage');

    if(userInput.value == ""){
        alert("Please Enter a Text or URL");
    }else{
        
        qrImage.src =  "https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=" + userInput.value ;
    }
    
    
}