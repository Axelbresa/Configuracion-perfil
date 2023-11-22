function handleFileChange(event) {
    const file = event.target.files[0];
    const fileSize = file.size;
  
    const image = new Image();
    image.src = URL.createObjectURL(file);
  
    document.querySelector(".profile-image").innerHTML = "";
    document.querySelector(".profile-image").appendChild(image);
  
    if (fileSize > 1000000) {
      alert("El archivo es demasiado grande. El tamaño máximo permitido es de 1 MB.");
    }
  }
  
  document.querySelector("input[type='file']").addEventListener("change", handleFileChange);
  