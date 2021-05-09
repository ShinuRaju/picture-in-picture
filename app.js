let btn = document.querySelector("button");
let vdo = document.querySelector("video");

async function mediaStream() {
  try {
    vdo.srcObject = await navigator.mediaDevices.getDisplayMedia();
    vdo.onloadedmetadata = () => {
      vdo.play();
    };
  } catch (error) {
    console.log(`there is a error ${error}`);
  }
}

btn.addEventListener("click", async () => {
  btn.disabled = true;
  await vdo.requestPictureInPicture();
  btn.disabled = false;
});

mediaStream();
