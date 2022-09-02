const qrFormEl=document.getElementById("qrForm");
const qrContainerEl=document.getElementById("qrContainer");
const qrImageEl=document.getElementById("qrImage")
const qrTextInputEl=document.getElementById("qrTextInput");
const genrateBtnEl=document.getElementById("genrateBtn");

const renderQRcode=(url)=>{
    if(!url)return;
    genrateBtnEl.innerHTML="Generateing QR Code...";
    qrImageEl.src=url;
    qrContainerEl.classList.add("show");



    const onImageLoad=()=>{
        const Interval=setInterval(()=>{
            clearInterval(Interval);
            genrateBtnEl.innerHTML="Gerate QR Code"
        }, 500);
    }

    genrateBtnEl.addEventListener("load", onImageLoad);
}

qrFormEl.addEventListener("submit",(event)=>{
    event.preventDefault();

    const formData=new FormData(qrFormEl);
    const text=formData.get("qrText");
    const qrCodeUrl=` https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${text} `
    
    renderQRcode(qrCodeUrl);
})

qrTextInputEl.addEventListener("keyup", () => {
    if (!qrTextInputEl.value.trim()) {
      qrContainerEl.classList.remove("show");
    }
  });

