function viewassignments() {
    const code = localStorage.getItem("code");
    console.log(code); 
    
    document.getElementById("code").innerHTML = `<input class="input" type="text" placeholder="classId" value="${code}"  name="code">`;
    
    fetch('/auth/assignmentpage?' +  new URLSearchParams ({
        id: code,
    }))
    .then(res => res.json())
    .then(data => {
        console.log(data);
        console.log('hello huys ~~~');
        var i=0;
        var x =0;
        var output = '';
        for(; i<data.length; i++) {
            x += 1;
            linker = data[i].LINK.slice(7);
            output += `
            <tr>
                <td>${x}</td>
                <td>${data[i].NAME}</td>
                <td><a target="_blank" href='../${linker}'>${data[i].LINK}</a></td>
            </tr>`;
        }
    
        document.getElementById('assignments').innerHTML = output;
    })
    .catch(err => console.log(err))
}

function viewstudentassignments() {
    console.log("viewstudentassignments");
    const code = localStorage.getItem("code");
    console.log(code);

   // document.getElementById("codeee").innerHTML = `<input class="input" type="text" name="code" value="${code}">`;

    fetch('/auth/studentassignmentpage?' + new URLSearchParams({
        id: code,
    }))
    .then(res => res.json())
    .then(data => {
        console.log(data);
        console.log('hello huys ~~~');
        var i=0;
        var x =0;
        var output = '';
        for(; i<data.length; i++) {
            x += 1;
            linker = data[i].LINK.slice(7);
            output += `
            <tr>
                <td>${x}</td>
                <td>${data[i].NAME}</td>
                <td><a target="_blank" href='../${linker}'>${data[i].LINK}</a></td>
            </tr>`;
        }
    
        document.getElementById('assignments').innerHTML = output;
    })
    .catch(err => console.log(err))
    
}

function loadtest() {
    const code=localStorage.getItem("code");
    console.log(code);

    fetch('/auth/studenttestpage?' + new URLSearchParams({
        id: code,
    }))
    .then(res => res.json())
    .then(data => {
        console.log(data);
        console.log('hello huys ~~~');
        var i=0;
        var x =0;
        var output = '';
        console.log(data.NAME);
        for(; i<data.length; i++) {
            console.log("what's up bro");
            x += 1;
            output += `
            <tr>
                <td>${x}</td>
                <td>${data[i].NAME}</td>
                <td>${data[i].TEST_DATE}</td>
                <td><a target="_blank" href='${data[i].LINK}'>${data[i].LINK}</a></td>
            </tr>`;
        }
    
        document.getElementById('tests').innerHTML = output;
    })
    .catch(err => console.log(err))

    document.getElementById("codeers").innerHTML = `<input class="input" type="text" placeholder="classId" value="${code}"  name="code">`;

}


function loadstudenttests() {
    const code=localStorage.getItem("code");
    fetch('/auth/studenttestpage?' + new URLSearchParams({
        id: code,
    }))
    .then(res => res.json())
    .then(data => {
        console.log(data);
        console.log('hello huys ~~~');
        var i=0;
        var x =0;
        var output = '';
        console.log(data.NAME);
        for(; i<data.length; i++) {
            console.log("what's up bro");
            x += 1;
            output += `
            <tr>
                <td>${x}</td>
                <td>${data[i].NAME}</td>
                <td>${data[i].TEST_DATE}</td>
                <td><a target="_blank" href='${data[i].LINK}'>${data[i].LINK}</a></td>
            </tr>`;
        }
    
        document.getElementById('upcomingtests').innerHTML = output;

    })
    .catch(err => console.log(err))
    setTimeout(testup, 5000);
}

function testup() {
    const code=localStorage.getItem("code");
    fetch('/auth/studenttestpage?' + new URLSearchParams({
        id: code,
    }))
    .then(res => res.json())
    .then(data => {
        console.log(data);
        console.log('hello huys ~~~');
        var i=0;
        var x =0;
        var output = '';
        console.log(data.NAME);
        for(; i<data.length; i++) {
            console.log("what's up bro");
            x += 1;
            output += `
            <tr>
                <td>${x}</td>
                <td>${data[i].NAME}</td>
                <td>${data[i].TEST_DATE}</td>
                <td><p>Link Disabled</p></td>
            </tr>`;
        }
    
        document.getElementById('upcomingtests').innerHTML = output;

    })
    .catch(err => console.log(err))

}

function verybad() {
    console.log("fuck off");
}