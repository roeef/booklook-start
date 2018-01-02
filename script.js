var fetch = function () {
    $.ajax({
        method: "GET",
        url: 'https://www.googleapis.com/books/v1/volumes?q=isbn:0439023521',
        success: function(data) {
            let title = data.items[0].volumeInfo.title;
            let description = data.items[0].volumeInfo.description;
            let authors = data.items[0].volumeInfo.authors;
            let thumbLink = data.items[0].volumeInfo.imageLinks.thumbnail;

            bookLookResultTemplate =
                `<h1>${title}</h1>
                 <p>${description}</p>
                 <h2>Wrriten by:${authors.join()}</h2>
                 <img src="${thumbLink}">`
            $('.book').append(bookLookResultTemplate)
        },
        error: function(jqXHR, textStatus, errorThrown) {
            console.log(textStatus);
        }
    });
};

$(".search-book").click(fetch);