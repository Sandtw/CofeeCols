function guardar(){
    const form = document.getElementById('form')
form.addEventListener('submit', e => {
    e.preventDefault();
    const data = Object.fromEntries(
                    new FormData(e.target)
                )
    console.log(data);
});
}
