const chooseImage = document.querySelector('#choose-image');
const textAbove = document.querySelector('#text-above');
const textBelow = document.querySelector('#text-below');
const canvas = document.querySelector('#canvas');
const button = document.querySelector('#btn');



let image;
chooseImage.addEventListener('change', () => {
    const imageDataURL = URL.createObjectURL(chooseImage.files[0])
    image = new Image();
    image.src = imageDataURL;


if (canvas.getContext('2d')) {
    const loadImage = () => {
        const ctx = canvas.getContext('2d');
        ctx.beginPath();

        const width = image.width;
        const height = image.height;
        const yOffSet = height / 7;

        // load the canvas background
        canvas.width = width;
        canvas.height = height;
        ctx.drawImage(image, 0, 0);

        // styling the meme text
        ctx.font = 'Bold 40px Sans-serif';
        ctx.fillStyle = 'white';
        ctx.strokeStyle = 'black';

        // adding the top meme text
        ctx.textBaseline = 'Top';
        ctx.fillText(textAbove.value, width / 3, yOffSet);
        ctx.strokeText(textAbove.value, width / 3, yOffSet);

        // adding the bottom text
        ctx.textBaseline = 'Bottom';
        ctx.fillText(textBelow.value, width / 3, height - yOffSet);
        ctx.strokeText(textBelow.value, width / 3, height - yOffSet);
        }




    button.addEventListener('click', loadImage);

} else {
    alert('Your browser does not support this image format');
}


})
