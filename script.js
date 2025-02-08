


 

/*ENQUIRY FORM*/
function sendToWhatsApp() {
    var name = document.getElementById("name").value.trim();
    var email = document.getElementById("email").value.trim();
    var contact = document.getElementById("contact").value.trim();
    var address = document.getElementById("address").value.trim();
    var message = document.getElementById("message").value.trim();

    console.log("Name:", name);
    console.log("Email:", email);
    console.log("Contact:", contact);
    console.log("Address:", address);
    console.log("Message:", message);

    // Check if any field is empty after trimming spaces
    if (!name || !email || !contact || !address || !message) {
        alert("Please fill all fields before sending!");
        return;
    }

    // Construct the WhatsApp URL
    var url = "https://wa.me/9335723334?text=" +
        "📌 *New Enquiry!*%0A%0A" +
        "👤 *Name:* " + encodeURIComponent(name) + "%0A" +
        "📧 *Email:* " + encodeURIComponent(email) + "%0A" +
        "📞 *Contact:* " + encodeURIComponent(contact) + "%0A" +
        "🏠 *Address:* " + encodeURIComponent(address) + "%0A" +
        "📝 *Message:* " + encodeURIComponent(message) + "%0A%0A" +
        "🚀 *Sent via Website*";

    // Open WhatsApp with the pre-filled message
    window.open(url, "_blank");
}



function spinLogoAndRedirect() {
    $('.navbar-brand img').css('transform', 'rotate(360deg)');
    setTimeout(() => {
        window.location.href = 'https://www.instagram.com/uzairvibes?igsh=MXEwczdtd290aXl0Zw==';
    }, 600);
}


