 // whatsapp 

function whatsapp() {
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var phone = document.getElementById("phone").value;
    var phone = document.getElementById("address").value;
    var message = document.getElementById("message").value;

    // Format the message content
    var formattedMessage = encodeURIComponent(
        " *Name* : " + name + "\n" +
        " *Email* : " + email + "\n" +
        " *Phone* *Number* : " + phone + "\n" +
        " *address* : " + address + "\n" +
        " *Message* : " + message);

    // Encode the message for the URL
    //   var encodedMessage = encodeURIComponent(formattedMessage);

    // Construct the WhatsApp URL
    var url = "https://wa.me/+919095161931?text=" + formattedMessage;

    // Open the WhatsApp URL in a new tab/window
    window.open(url, 'black');
}


 