document.querySelectorAll('.parent > div').forEach(div => {
    div.addEventListener('mouseover', () => {
        // Aplicar efectos a todos los hermanos excepto al hovered
        div.parentElement.querySelectorAll('div').forEach(sibling => {
            if (sibling !== div) {
                // Aplicar grayscale al div hermano
                sibling.style.filter = 'grayscale(100%)';
                // Aplicar blur a la imagen dentro del div hermano
                const img = sibling.querySelector('img');
                if (img) {
                    img.style.filter = 'blur(2px)';
                }
            }
        });
    });

    div.addEventListener('mouseout', () => {
        // Restaurar valores originales
        div.parentElement.querySelectorAll('div').forEach(sibling => {
            // Quitar grayscale del div
            sibling.style.filter = 'grayscale(0%)';
            // Quitar blur de la imagen
            const img = sibling.querySelector('img');
            if (img) {
                img.style.filter = 'none';
            }
        });
    });
});