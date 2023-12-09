$('document').ready(()=>{
    const params = new URLSearchParams(window.location.search)
    let data = ""
    $.ajax("../../models/main.json").then((e) => {
        
        e.map((element , index) => {
            if(index === parseInt(params.get('id'))){
                $('#article-img').attr('src', element.image)
                $('#heading').text(element.title)
                $('#heading2').text(element.header)
                let p = ""
                Object.values(element.extended_content)
                .map((element)=>{
                    p += `<p>${element}</p>`
                })
                let content = $('#content')
                content.html(p)
            }
        })
    })

})