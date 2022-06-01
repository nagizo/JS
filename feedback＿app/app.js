const stars = document.querySelectorAll('.fa-star');
const faces = document.querySelectorAll('.fa-face');
const faces_color = ['red', 'purple' , 'blue', 'lightgreen', 'green'];
const cursor = document.getElementById("cursor");

updateRating(0);

stars.forEach((stars, index) => {
    stars.addEventListener('click', () => {
        updateRating(index)
    });
});

function updateRating(index) {
    stars.forEach((stars, idx) =>{
        if(idx < index + 1) {
            stars.classList.add('initial')
        } else {
            stars.classList.remove('initial')
        }
    });
    faces.forEach((face) => {
        face.style.transform = `translateX(-${index*80}px)`;
        face.style.color = faces_color[index];
    });
}

document.addEventListener("mousemove", function (e) {
  cursor.style.transform = `translate(${e.clientX}px, ${e.clientY}px)`;
});

