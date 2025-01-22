// envio de formulario a mail
const btn = document.getElementById('button');

document.getElementById('form')
  .addEventListener('submit', function (event) {
    event.preventDefault(); 
    
    btn.textContent = 'Enviando...'; 

    const serviceID = 'default_service';
    const templateID = 'template_18zw3fg';

    // Envía el formulario a través de EmailJS
    emailjs.sendForm(serviceID, templateID, this)
      .then(() => {
        btn.textContent = 'Email'; 
        alert('¡Se envío exitosamente!');
        this.reset();
      })
      .catch((err) => {
        btn.textContent = 'Email'; 
        alert('No se pudo enviar: ' + JSON.stringify(err));
      });
  });


  