$('document').ready(() => {
    let articles = $('#articles')

    $.ajax("../../models/main.json").then((e) => {
        let data = ""
        e.map((element , index) => {
            let date = new Date(element.date_publish)
            data +=
                `<div class="col-12 col-md-6">
                    <div class="p-2">
                        <div class="card-header">
                            <a href="./view/article.html?id=${index}" class="card-title title">
                            ${element.title}
                            </a>
                            <span class="date-posted">
                            ${date.toLocaleString()}
                            </span>
                        </div>
                        <div class="card-body">
                            <img 
                            class="card-img img" 
                            src="${element.image}" alt="" srcset="">
                        </div>
                    </div>
                </div>`

            articles.html(data)
        })
    })



})