function openLetter(envelope) {
  const content = envelope.nextElementSibling;
  if(content.style.display === "block"){
    content.style.display = "none";
  } else {
    content.style.display = "block";
  }
}
