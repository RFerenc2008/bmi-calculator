export function renderCards(arr) {
     const cardString=arr.map(obj=>`
        <div class="card">
            <div class="kepek">
                <img src="./src/img${obj.id}.jpg" alt="">
            </div>
                <h4>BMI: ${obj.min}-${obj.max}</h4>
                <h3>${obj.category}</h3>
                <p>${obj.message}</p>
      </div>
        `).join('')
        document.querySelector('.cards').innerHTML=cardString
}
