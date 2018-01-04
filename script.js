var fetch = function (isbn, title) {
    titleSearch = `+intitle:${title}`;
    $.ajax({
        method: "GET",
        url: `https://www.googleapis.com/books/v1/volumes?q=isbn:${isbn} ${title ? titleSearch : ""}`, //0439023521
        success: function(data) {
            for (let i=0; data.items && i < data.items.length; i++) {
                let title = data.items[i].volumeInfo.title;
                let description = data.items[i].volumeInfo.description;
                let authors = data.items[i].volumeInfo.authors;
                let thumbLink = data.items[i].volumeInfo.imageLinks.thumbnail;

                bookLookResultTemplate =
                    `<h1>${title}</h1>
                     <p>${description}</p>
                     <h2>Wrriten by:${authors ? authors.join() : authors}</h2>
                     <img src="${thumbLink}">`
                $('.book').append(bookLookResultTemplate)
            }
        },
        error: function(jqXHR, textStatus, errorThrown) {
            console.log(textStatus);
        }
    });
};

$(".search-book").click(function(){fetch($('#isbn').val(),$('#title').val())} );