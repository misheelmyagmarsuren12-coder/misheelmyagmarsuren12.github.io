const memories = document.querySelectorAll('.memory');

function showMemory() {
  const triggerBottom = window.innerHeight / 5 * 4;
  memories.forEach(memory => {
    const memoryTop = memory.getBoundingClientRect().top;
    if(memoryTop < triggerBottom) {
      memory.classList.add('show');
    } 
  });
}

window.addEventListener('scroll', showMemory);
showMemory(); // run on load
