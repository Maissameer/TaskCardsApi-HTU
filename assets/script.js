//   const card = document.querySelector('.card');
// //  sending a Request
//   let response = fetch('https://restcountries.com/v2/all');
//   //fetch return promise
//   fetch('https://restcountries.com/v2/all')
//   .then(Response => Response.json())
//   .then((json) => {
//   console.log(json);

//  } );
async function getcards() {
    let url = 'card.json';
    try {
        let res = await fetch('https://restcountries.com/v2/all');
        return await res.json();
    } catch (error) {
        console.log(error);
    }
}

async function rendercards() {
    let cards = await getcards();
    let html = '';
    cards.forEach(cards => {
        let htmlSegment = `<div class="card">
                            <img src="${cards.flag}">
                            <div class="info">
                            <h2>${cards.name}</h2>
                            <h6>${cards.languages}</h6>
                            </div>
                        </div>`;

        html += htmlSegment;
    });

    let container = document.querySelector('.container');
    container.innerHTML = html;
}

rendercards();