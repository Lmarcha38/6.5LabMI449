function clickOMatic() {
    alert('clicked!');
}

window.onload = function() {
    const click = document.getElementById('click');

    click.addEventListener("click", (event) => {
        clickOMatic();
    });
};