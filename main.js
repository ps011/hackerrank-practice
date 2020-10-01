async function getData() {
    const data = await fetch('https://ps11-backend.herokuapp.com/cc/');
    console.log(data);
    document.body.innerHTML = renderChampions(await data.json());
}

renderChampions = (data) => {
    champions = [];
    data.forEach(champ => {
    const card = `<div class="card m-4">
    <div class="card-body row">
        <div class="col-2">
            <img src="https://robohash.org/${champ.name}" class="card-img-top" alt="${champ.name}">
        </div>
        <div class="col-10 my-auto">
            <div class="row">
                <h3 class="card-title">${champ.name}</h3>
            </div>
            <div class="row">
            <div class="col-8 my-auto p-0">
            <input style="width:200px" class="m-2" type="number" placeholder="# of Problems Solved" id="score-${champ._id}"/>
            <br>
            <input style="width:200px" class="m-2" type="password" placeholder="Password" id="password-${champ._id}"/>
            <br>
            <a href="#" class="btn btn-primary m-2" onclick="updateScore('${champ._id}')">Update</a>
            </div>
            <div class="col-4">
            <h1 style="font-size:100px" id="display-${champ._id}">${champ.score}</h1>
           </div>
            </div>
        </div>
    </div>
</div>`
champions.push(card);
    });
    return champions.join(' ');
}

updateScore = async (champId) => {
    const newScore = document.getElementById(`score-${champId}`).value;
    const password = document.getElementById(`password-${champId}`).value;
    const display = document.getElementById(`display-${champId}`);
    const response = await fetch('https://ps11-backend.herokuapp.com/cc/update-score', {
        method: 'POST', 
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            userId: champId,
            score: newScore,
            password
        })
      });
    if (response.status === 200) {
        const data = await response.json();
        display.innerText = data.data.score;
    } else {
        alert("Score Updated Failed. Try Again");
    }
}

createUser = async(name, password) => {
    const response = await fetch('https://ps11-backend.herokuapp.com/cc/add', {
        method: 'POST', 
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            name,
            password
        })
      });
      if (response.status === 200) {
        await getData();
    } else {
        alert("Score Updated Failed. Try Again");
    }
}

getData();