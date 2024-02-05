console.log('hoi')
const expandButton = document.querySelector('header button')
const changepfp = document.querySelector('Img')
expandButton.addEventListener('click', expand)

function expand () {
  document.body.classList.toggle('expand')
}

// sphere follows mouse
document.addEventListener('mousemove', (e) => {

  const mouseFollow = document.getElementById('mouse-follow');
  const x = e.clientX - 50; //-50 to center div over mouse
  const y = e.clientY - 50; 
  console.log(x);
   
  mouseFollow.style.top = `${y}px`;
  mouseFollow.style.left = `${x}px`;
})


