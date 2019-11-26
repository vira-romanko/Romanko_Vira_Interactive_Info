const myVM = (() => {
    // get the user buttons and fire off an async DB query with Fetch
    let userButtons = document.querySelector("#elements").querySelectorAll('g[id*=_element]'),
    lightbox = document.querySelector('.lightbox');
      name = document.querySelector('.name');

       function GetElementData(element) {

          let targetDiv = document.querySelector(' .lb-content')
        
      
           let elementDescription = `
        <h4 class="el-name"> Element Name:<span>${element.name}<span></h4>
        <p class="desc-js">${element.description}</p>
        <p class="el-abb">${element.abbreviation}</p>
        
       `;
          
        

        console.log(elementDescription);
        targetDiv.innerHTML = elementDescription;
        lightbox.classList.add('show-lb');
        

        }
  



    function getBookData(event) {
        event.preventDefault();// kill the default a tag behaviour (dont navigate anywhere)
        //debugger;

        let param = this.id.split("_")[0];

        
        let url = `/elements/${this.id.split("_")[0]}`;
        fetch(url)// go get the data fetch boy!
          .then(res => res.json())// parse the json result into a plain object
          .then(data => {
              console.log("my data resutl is: ", data);

         


              GetElementData(data[0]);
          })
          .catch((err) => {
              console.log(err)
          });
    }

    userButtons.forEach(button => button.addEventListener('click', getBookData));
    lightbox.querySelector(' .close').addEventListener('click',  function() {
        lightbox.classList.remove('show-lb');
    });

})();