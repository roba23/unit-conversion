
    function temprature()
    {
        var c = document.getElementById("c").value;
        var f = (c * 9/5) + 32;
        document.getElementById("f").value= f;
    }

    function weight()
    {
        var kg = document.getElementById("kg").value;
        var lb = kg * 2.205;
        document.getElementById("lb").value = lb;

    }
    function distance()
    {
        var km = document.getElementById("km").value;
        var mile = km / 1.609;
        document.getElementById("mile").value = mile;
    }