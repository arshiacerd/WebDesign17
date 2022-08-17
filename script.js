var input = document.getElementById("searchData");
getVal = document.getElementById("searchData").value;

const handleSubmit = () => {
  fetch(`https://api.github.com/users/${getVal}`)
    .then((response) => response.text())
    .then((data) => {
      {
        const head = document.createElement("h3");
        head.innerText = data;
        document.body.appendChild(head)
        // document.getElementById("myData").innerHTML=data;
      }
      document.getElementById("searchData").value = "";
    });
};
