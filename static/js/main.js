setTimeout(() => {
    let data = Array.from(document.querySelectorAll("div"));
    data.map((i) => {
        if (i.innerHTML == "Powered By iiCreator")
            i.innerHTML = "";
        else if (i.style.backgroundImage.includes('url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAQAAAACgCAMAAADUx0IOAAAAA3NCSVQICAjb4U/gAAAC8VBMV'))
            i.remove();
    })

    data = Array.from(document.querySelectorAll("g"));
    data.map((i) => {
        if (i.style.opacity == '0.2')
            i.remove();
    })
}, 1000);