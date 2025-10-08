const cakeBtn = document.getElementById('cake-btn');
const complimentBtn = document.getElementById('compliment-btn');
const memeBtn = document.getElementById('meme-btn');
const popup = document.getElementById('popup-text');

const cakeSound = document.getElementById('cake-sound');
const complimentSound = document.getElementById('compliment-sound');
const memeSound = document.getElementById('meme-sound');

function showPopup(message, duration = 1500) {
  popup.textContent = message;
  popup.style.opacity = 1;
  popup.style.transform = 'translateX(-50%) translateY(-20px)';

  setTimeout(() => {
    popup.style.opacity = 0;
    popup.style.transform = 'translateX(-50%) translateY(-50px)';
  }, duration);
}

// Cake button
cakeBtn.addEventListener('click', () => {
  showPopup("Yum! 🍰 Molly loved it!");
  if(cakeSound) cakeSound.play();
});

// Compliment button
complimentBtn.addEventListener('click', () => {
  const compliments = [
    "Molly baddiest bitch ever",
    "Molly is ICONICC! 💖",
    "I swear, my clothes were js on 🥰",
    "HOLYMOLY DUDE! 🎂",
    "BEAUTIFUL girl <33",
    "GummyYummy",
    "Gorgeuous!!"
  ];
  const msg = compliments[Math.floor(Math.random() * compliments.length)];
  showPopup(msg, 1800); // slightly longer for compliments
  if(complimentSound) complimentSound.play();
});

// Meme button
memeBtn.addEventListener('click', () => {
  const memes = [
    "Why did the chicken cross the road? Nobody knows.",
    "A potato walked into a bar. End of story.",
    "This is a meme. That's it.",
    "When you stare at the wall for 5 minutes, big mood.",
    "Random text meme: lol what?",
    "Me looking at my fridge: very unfunny.",
    "Insert unfunny meme here →"
  ];
  const msg = memes[Math.floor(Math.random() * memes.length)];
  showPopup(msg, 3000); // longer for memes, 3 seconds
  if(memeSound) memeSound.play();
});
