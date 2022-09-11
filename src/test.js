

for (var i = 0; i <= 10; i++){

    const showMe = (index) => () => {
        console.log(index)
    }

    setTimeout(showMe(i), 100);


}


