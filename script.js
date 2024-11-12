function submitIssue() {
    const serviceType = document.getElementById("serviceType").value;
    const location = document.getElementById("location").value;
    const description = document.getElementById("description").value;

    const data = {
    data: {
        serviceType: serviceType,
        location: location,
        description: description,
    },
};

    fetch("http://localhost:1337/api/civicteches", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
    })
    .then((response) => response.json())
    .then((data) => {
        document.getElementById("response").innerHTML = "Issue reported successfully!";
        // You can reset the form here if needed
    })
    .catch((error) => {
        document.getElementById("response").innerHTML = "Error reporting the issue.";
        console.error(error);
    });
}
