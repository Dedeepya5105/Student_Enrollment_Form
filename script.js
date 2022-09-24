var row = 1;
function add()
{
    console.log("Hello World");
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var website = document.getElementById("Website").value;
    var url_link = document.getElementById("url_link").value;
    var gender = document.querySelector('input[name="gender"]:checked').value;
    var skills = document.getElementsByName("skill");
    var display = document.getElementById("table");
    var newRow = display.insertRow(row);
    var cell1 = newRow.insertCell(0);
    var cell2 = newRow.insertCell(1);

    let Description = `<p>${name}<br>${gender}<br>${email}<br><a href="${website}">${website}</a><br>`;
    for(var i=0;i<skills.length;i++)
    {

        if(skills[i].checked)
        {   
            Description = Description + `${skills[i].value},`;
        }
    }
    Description = Description + `</p>`;
    let image = `<img src="prof.png" class="rounded mx-auto d-block img-thumbnail" alt="Image" width="100" height="100">`;
    cell1.innerHTML = Description;
    cell2.innerHTML = image;
}

function clear()
{
    console.log("Clear it");
    document.getElementById("myForm").reset();
}
