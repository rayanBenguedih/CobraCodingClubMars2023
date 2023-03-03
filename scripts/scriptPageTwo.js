// Get the image element

document.addEventListener('DOMContentLoaded', () => {


    // Récupére rl'élément de l'image
    const image = document.querySelector('.snake img');

    // Rajouter un écouteur d'évènement sur chaque sections:

    document.getElementById('cobra-indian').addEventListener('click', () => {
        // Remplacer l'élément de l'image par celle de notre choix
        image.src = '../img/cobra-indien.jpg';
    });

    document.getElementById('cobra-royal').addEventListener('click', () => {
        image.src = '../img/cobra-royal.jpg';
    });

    document.getElementById('cobra-cracheur').addEventListener('click', () => {
        image.src = '../img/cobra-noir.jpg';
    });

    document.getElementById('cobra-forets').addEventListener('click', () => {
        image.src = '../img/cobra-foret.png';
    });

    document.getElementById('naja-mossambica').addEventListener('click', () => {
        image.src = '../img/cobra-cracheur.jpg';
    });
});


