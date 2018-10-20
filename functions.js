var tmp = {
    repeat3: function(x) {
        for(var i = 1; i <=3; i ++)
        {
            x();
        }
    }, 

    hello: function() {
        console.log("Goodbye");
    }
}

function hello() {
    console.log("hello")
}

tmp.repeat3(tmp.hello);