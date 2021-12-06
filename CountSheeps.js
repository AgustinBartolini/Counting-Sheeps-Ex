let sheepslist = [
    true,  true,  true,  false,
    true,  true,  true,  true ,
    true,  false, true,  false,
    true,  false, false, true ,
    true,  true,  true,  true ,
    false, false, true,  true
];

const container = document.getElementById('sectionContainer');
const btnCount = document.getElementById('btnCount');
btnCount.addEventListener('click', countSheeps);

let sheeps = (sheepslist.filter(Boolean).length);

function countSheeps() {  
    container.innerHTML += `<p> You counted: ${sheeps} sheeps.</p> <br> <p>Are you asleep?</p>`;
    console.log(sheeps);
};

