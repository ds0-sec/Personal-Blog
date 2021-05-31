
window.addEventListener("load", (e) => {
    // Fetch Github info

    fetch("https://api.github.com/users/ds0-sec/repos")
    .then((res) => {
        return res.json();
    })
    .then((data) => {
        console.log(data);

        let output = "";
        data.forEach((result) => {
            output += `
            <div class="card">
                <div class="card-body">
                    <h2 class="card-title">
                       <a class="card-url" href="${result.html_url}" target="_blank">${result.name}</a>
                    </h2>
                    <p class="card-text">
                        ${result.description}
                    </p>
                </div>
            </div>
            `
        });

        document.getElementById("github-projects").innerHTML = output;
    })


    // parse data



    // add data to DOM

})