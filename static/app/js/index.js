function shengcheng() {
/*    domtoimage.toBlob(document.getElementById('phone'))
        .then(function (blob) {
            window.saveAs(blob, 'my-node.png');
        });*/
    var node = document.getElementById("phone");

    domtoimage.toPng(node)
        .then(function (dataUrl) {
            var img = new Image();
            img.src = dataUrl;
            document.body.appendChild(img);
        })
        .catch(function (error) {
            console.error("oops, something went wrong!", error);
        });

    /* html2canvas(document.getElementById("phone"), {
         // width: 30, //截图宽度
         // height: 50, //截图高度
         backgroundColor: null, //画出来的图片有白色的边框,不要可设置背景为透明色（null）
         useCORS: true, //支持图片跨域
         scale: 1, //设置放大的倍数
     }).then((canvas) => {
         let url = canvas.toDataURL("image/png"); // toDataURL: 图片格式转成 base64
         // let blob = toBlob(url);//封装toBlob方法，转为blob类型
         var blob = canvas.msToBlob();
         var file = new File([blob], "123", {type: "image/png", lastModified: Date.now()});//转为File类型
         let blobUrl = URL.createObjectURL(file);
         console.log(blob)
         console.log(file)
         console.log(blobUrl)
     });*/
    /* html2canvas(document.getElementById("phone"), {
         width: 1125, //截图宽度
         height: 2436, //截图高度
         backgroundColor: null, //画出来的图片有白色的边框,不要可设置背景为透明色（null）
         useCORS: true, //支持图片跨域
         // scale: 1, //设置放大的倍数
     }).then((canvas) => {
         let dataURL = canvas.toDataURL("image/jpeg");
         setTimeout(() => {
             let a = document.getElementById("phone");
             let img = document.createElement("img");
             img.src = dataURL;

             img.style.width = "1125px";
             img.style.height = "2436px";
             img.style.display = "none";
             img.id = "my_poster";
             a.appendChild(img);
         }, 100);

         let link = document.createElement("a");
         link.download =  "my_poster.jpeg";
         link.href = dataURL;
         link.click();
     });
 */


}
