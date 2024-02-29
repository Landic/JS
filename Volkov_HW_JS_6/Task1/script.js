const input = document.querySelector('input');
input.addEventListener('input', function(event) {
    const value = event.target.value;
    event.target.value = value.replace(/\d/g, ''); 
});