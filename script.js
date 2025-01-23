const imageInput = document.getElementById('image-input');
const widthInput = document.getElementById('width');
const heightInput = document.getElementById('height');
const resizeBtn = document.getElementById('resize-btn');
const canvas = document.getElementById('canvas');
const downloadLink = document.getElementById('download-link');
const ctx = canvas.getContext('2d');

let image = new Image();

imageInput.addEventListener('change', function (e) {
    const file = e.target.files[0];
    if (file) {
        const reader = new FileReader();
        reader.onload = function (event) {
            image.src = event.target.result;
        };
        reader.readAsDataURL(file);
    }
});

resizeBtn.addEventListener('click', function () {
    const width = parseInt(widthInput.value);
    const height = parseInt(heightInput.value);

    if (width && height && image.src) {
        canvas.width = width;
        canvas.height = height;
        ctx.drawImage(image, 0, 0, width, height);

        // Show download link
        const resizedImage = canvas.toDataURL('image/jpeg');
        downloadLink.href = resizedImage;
        downloadLink.download = 'resized-image.jpg';
        downloadLink.classList.remove('hidden');
    } else {
        alert('Please upload an image and enter valid dimensions.');
    }
});
