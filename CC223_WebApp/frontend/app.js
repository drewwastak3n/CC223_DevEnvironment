document.getElementById("fetchButton").addEventListener("click", () => {
    fetch("http://localhost:3000/data")
        .then(response => response.json())
        .then(data => {
            document.getElementById("data").textContent = data.message;
        })
        .catch(error => console.error("Error fetching data:", error));
});
