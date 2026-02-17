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

    const message =
`Hello Yatra Andaman,

Name: ${name}
Mobile: ${mobile}
Email: ${email}
Travel Date: ${date}
Adults: ${adults}
Children: ${children}
Rooms: ${rooms}
Package: ${packageName}
Special Request: ${messageBox}`;

 const encodedMessage = encodeURIComponent(message);

    // WhatsApp open
    window.open(https://wa.me/919679548741?text=${encodedMessage}, "_blank");
});
