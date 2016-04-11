
    var moviesSubmit = $("#movieSubmit");
    var moviesNameInput = $("#Nume");
    var moviesList = $("#moviesList");

    moviesSubmit.click(function () {
        var movieName = moviesNameInput.val();

        var removeBtn = $("<button/>").html("x");
        var newList1 = $("<li/>").html(movieName).hide();
        newList1.append(removeBtn);
       
        moviesList.append(newList1);
        newList1.slideDown();

        removeBtn.click(function () {
            newList1.remove();
            $(this).remove();
           })
        console.log("ok");
    })
