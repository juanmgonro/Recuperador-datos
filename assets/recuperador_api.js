console.log("Recuperar datos");

const obtenerDatosUsuarios = (url = "https://reqres.in/api/users?delay=3") => {
    fetch(url)
        .then(response => { return response.json() })
        .then(users => {
            const carousel = document.getElementById("carousel");
            localStorage.setItem("savedUsers", JSON.stringify(users.data));
            const datos = JSON.parse(localStorage.getItem("savedUsers"));
            for (let index = 0; index < datos.length; index++) {
                carousel.innerHTML +=
                    `            </div>
               <div class="carousel-item">
                   <div class="row ">
                       <div class="col-4 text-center">
                       <img src="${datos[index].avatar}" class="img-fluid" alt="pixels">           
                       </div>
                       <div class="col-8">
                            <dl>
                            <dt>ID: ${datos[index].id}</dt>
                            <dt>E-mail: ${datos[index].email}</dt>
                            <dt>Nombre: ${datos[index].first_name}</dt>
                            <dt>Apellido: ${datos[index].last_name}</dt>
                            </dl>
                       </div>
                   </div>
               </div>`;
            }
        })

        .catch(error => {
            console.log(error);
        })
}



