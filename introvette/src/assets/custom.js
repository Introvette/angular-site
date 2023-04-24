const btn = document.getElementById('button');

document.getElementById('form').addEventListener('submit', function(event) {
  event.preventDefault();

  btn.value = 'Sending...';

  // Your email sending code here
  const serviceID = 'service_bs96q2p';
  const templateID = 'template_ayln9kw';

  emailjs.sendForm(serviceID, templateID, this)
   .then(() => {
     btn.value = 'Send Email';
     alert('Sent!');
   }, (err) => {
     btn.value = 'Send Email';
     alert(JSON.stringify(err));
   });
});
