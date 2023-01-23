// lightGallery(document.getElementById("gallery-container"), {
// licenseKey: '7EC452A9-0CFD441C-BD984C7C-17C8456E',
// speed: 500,
// download: false,
// plugins: [lgFullscreen, lgZoom],

// mobileSettings: {
//           controls: false,
//           showCloseIcon: true,
//           download: false
// }

// });

var elements = document.getElementsByClassName('demo-lightgallery');
for (let item of elements) {
    lightGallery(item, {
      licenseKey: '7EC452A9-0CFD441C-BD984C7C-17C8456E',
speed: 500,
download: false,
plugins: [lgFullscreen, lgZoom, lgVideo],

mobileSettings: {
          controls: false,
          showCloseIcon: true,
          download: false
}
    })
}


