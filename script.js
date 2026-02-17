document.getElementById("bookingForm").addEventListener("submit", function(e) {
    e.preventDefault();

    const name = this.querySelector("input[placeholder='Full Name']").value;
    const mobile = this.querySelector("input[placeholder='Mobile Number']").value;
    const email = this.querySelector("input[type='email']").value;
    const date = this.querySelector("input[type='date']").value;
    const adults = this.querySelector("input[placeholder='Adults']").value;
    const children = this.querySelector("input[placeholder='Children']").value;
    const rooms = this.querySelector("input[placeholder='Rooms']").value;
    const packageName = this.querySelector("select").value;
    const messageBox = this.querySelector("textarea").value;

    const message = `Hello Yatra Andaman,%0A
Name: ${name}%0A
Mobile: ${mobile}%0A
Email: ${email}%0A
Travel Date: ${date}%0A
Adults: ${adults}%0A
Children: ${children}%0A
Rooms: ${rooms}%0A
Package: ${packageName}%0A
Special Request: ${messageBox}`;

    // WhatsApp redirect
    window.open(https://wa.me/919679548741?text=${message}, "_blank");

    // Email redirect
    window.location.href = mailto:yatraandaman@gmail.com?subject=New Booking Enquiry&body=${message};
});
