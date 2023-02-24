document.getElementById("login").addEventListener("click", () => {
    var id = document.getElementById("id").value;
    var pass = document.getElementById("password").value;
    if (id === "Admin" && pass === "Admin@123") {
        var xhttp = new XMLHttpRequest();
        var myTableDiv = document.getElementById("myDynamicTable");
        var table = document.createElement('TABLE');
        table.border = '1';

        var tableBody = document.createElement('TBODY');
        table.appendChild(tableBody);
        xhttp.onreadystatechange = function () {

            var data = JSON.parse(this.response);

            console.log(data);

            for (var i = 0; i < data.length; i++) {
                var tr = document.createElement('TR');
                tableBody.appendChild(tr);


                var td1 = document.createElement('TD');
                td1.width = '75';
                td1.innerText = data[i].mail;
                tr.appendChild(td1);
                var td3 = document.createElement('TD');
                td3.width = '165';
                td3.appendChild(document.createTextNode(data[i].time));
                tr.appendChild(td3);
                var td2 = document.createElement('TD');

                var img = document.createElement("img");
                img.src = data[i].picture;
                img.style.maxWidth = "200px"
                td2.appendChild(img);
                tr.appendChild(td2);

            }
            myTableDiv.appendChild(table);
            document.getElementById("student").style.display = "none";
        }

    };
    xhttp.open("GET", "http://localhost:8081/student-all", true);
    xhttp.setRequestHeader('Access-Control-Allow-Origin', '*');
    xhttp.setRequestHeader('Content-type', 'application/json');

    xhttp.send();
});