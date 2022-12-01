document.querySelectorAll(".container .item")
    .forEach(item => {
        item.addEventListener("click", () => {
            const blogId = item.querySelector(".placeId").innerText
            window.open(`/blog/${blogId}`, target="_self")
        })
    });