document.body.onload = function() {
    const camposEntrada = document.querySelectorAll('.datoInput');
    const registroDiv = document.querySelector('.registro');
    const tablaHeroes = document.querySelector('table');
    camposEntrada.forEach(function(elemento) {
        elemento.disabled = true;
    });
    Productora.disabled = true
    registroDiv.style.display = 'none';
    tablaHeroes.style.display = 'none';
    addButton.disabled = true;
    saveHeroButton.disabled = true;
}

document.addEventListener("DOMContentLoaded", function() {
    const N_personaje = document.getElementById('N_personaje');
    const N_actor = document.getElementById('N_actor');
    const Edad_a = document.getElementById('Edad_a');
    const Ubicacion = document.getElementById('Ubicacion');
    const Poster = document.getElementById('Poster');
    const Fecha = document.getElementById('fecha');
    const Productora = document.getElementById('Productora');
    const addButton = document.getElementById('addButton');
    const newHeroButton = document.getElementById('newHeroButton');
    const saveHeroButton = document.getElementById('saveHeroButton');
    const cancelButton = document.getElementById('cancelButton');
    const showHeroButton = document.getElementById('showHero');
    const deleteHero = document.getElementById('deleteHero');
    const updateHero = document.getElementById('updateHero');
    const heroTableBody = document.getElementById('heroTableBody');
    const tablenew = document.getElementById('trajenuevo');
    const registroDiv = document.querySelector('.registro');
    const tablaHeroes = document.querySelector('table');

    let Heroes = [];

    function activarCampos() {
        const camposEntrada = document.querySelectorAll('.datoInput');
        camposEntrada.forEach(function(elemento) {
            elemento.disabled = false;
        });
        Productora.disabled = false
        addButton.disabled = false;
        saveHeroButton.disabled = false;
        registroDiv.style.display = 'block';
    }

    function desactivarCampos() {
        const camposEntrada = document.querySelectorAll('.datoInput');
        camposEntrada.forEach(function(elemento) {
            elemento.disabled = true;
        });
        Productora.disabled = true
        addButton.disabled = true;
        saveHeroButton.disabled = true;
        registroDiv.style.display = 'none';
        tablaHeroes.style.display = 'none';
    }

    function limpiarCampos() {
        const campos = [N_personaje, N_actor, Edad_a, Ubicacion, Poster, Fecha];
        campos.forEach(function(elemento) {
            elemento.value = '';
        });
        Productora.value = 'Marvel';
        tablaHeroes.style.display = 'none';
        tablenew.innerHTML = '';

    }

    function agregarHeroe() {
        const nuevoHeroe = {
            N_personaje: N_personaje.value,
            N_actor: N_actor.value,
            Edad_a: Edad_a.value,
            Ubicacion: Ubicacion.value,
            Poster: Poster.value,
            Fecha: Fecha.value,
            Productora: Productora.value
        };
        Heroes.push(nuevoHeroe);
        limpiarCampos();
        desactivarCampos();
    }

    let counter = 1;

    const nombresTrajes = [];
    
    function mostrarInuputTraje() {
        const row = `
            <div class="inputRow">
                <label for="inpuT_${counter}" class="N_traje">Nombre Traje</label>
                <br>
                <input required type="text" class="inputTraje" id="inpuT_${counter}">
                <button class="delButton">-</button>
            </div>
        `;
        tablenew.insertAdjacentHTML('beforeend', row);
        nombresTrajes.push(`inpuT_${counter}`);
        counter++;
        
        const delButtons = document.querySelectorAll('.delButton');
        delButtons.forEach(button => {
            button.addEventListener('click', function() {
                this.parentNode.remove();
            });
        });
    }
    
    
    function agregarHeroe() {
        const nuevoHeroe = {
            N_personaje: N_personaje.value,
            N_actor: N_actor.value,
            Edad_a: Edad_a.value,
            Ubicacion: Ubicacion.value,
            Poster: Poster.value,
            Fecha: Fecha.value,
            Productora: Productora.value,
            NombresTrajes: Array.from(document.querySelectorAll('.inputTraje')).map(input => input.value)
        };
        Heroes.push(nuevoHeroe);
        limpiarCampos();
        desactivarCampos();
    }    

    function mostrarHeroeEncontrado(heroe) {
        tablaHeroes.style.display = 'block';
        heroTableBody.innerHTML = '';
    
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${heroe.N_personaje}</td>
            <td>${heroe.N_actor}</td>
            <td>${heroe.Edad_a}</td>
            <td>${heroe.Ubicacion}</td>
            <td>${heroe.Poster}</td>
            <td>${heroe.Fecha}</td>
            <td>${heroe.Productora}</td>
        `;
    
        heroTableBody.appendChild(row);
    
        const trajesRow = document.createElement('tr');
        const td = document.createElement('td');
        td.setAttribute('colspan', '7'); 
        td.innerHTML = `<strong>Trajes:</strong> ${heroe.NombresTrajes.join(', ')}`;
        trajesRow.appendChild(td);
    
        heroTableBody.appendChild(trajesRow);
    }
    
    
    function buscarHeroe(criterio) {
        let heroeEncontrado = null;
        heroeEncontrado = Heroes.find(hero => hero.N_personaje.toLowerCase() === criterio.toLowerCase());
    
        if (heroeEncontrado) {
            alert("Se encontró un Heroe con ese nombre");
            mostrarHeroeEncontrado(heroeEncontrado);
        } else {
            alert("No se encontró un Heroe con ese nombre");
        }
    }

    function eliminarHeroe(nombreHeroe) {
        Heroes = Heroes.filter(heroe => heroe.N_personaje !== nombreHeroe);
        tablaHeroes.style.display = 'none';
    }

    function BuscarEliminar(criterio) {
        let EliminarH = Heroes.find(hero => hero.N_personaje.toLowerCase() === criterio.toLowerCase());

        if (EliminarH) {
            const confirmacion = confirm(`¿Estás seguro de que quieres eliminar a ${EliminarH.N_personaje}?`);
            if (confirmacion) {
                eliminarHeroe(EliminarH.N_personaje);
            }
        } else {
            alert("No se encontró un Héroe con ese nombre");
        }
    }

    function actualizarHeroe(nombreHeroe) {
        let heroeEncontrado = null;
        heroeEncontrado = Heroes.find(hero => hero.N_personaje.toLowerCase() === nombreHeroe.toLowerCase());
        if (heroeEncontrado) {
            const nuevoNombre = prompt("Ingrese el nombre del héroe:");
            const nuevoActor = prompt("Ingrese el nombre del actor:");
            const nuevaEdad = prompt("Ingrese la edad del actor:");
            const nuevaUbicacion = prompt("Ingrese la nueva ubicación:");
            const nuevoPoster = prompt("Ingrese el nuevo poster:");
    
            if (nuevoNombre && nuevoActor && nuevaEdad && nuevaUbicacion && nuevoPoster) {
                heroeEncontrado.N_personaje = nuevoNombre;
                heroeEncontrado.N_actor = nuevoActor;
                heroeEncontrado.Edad_a = nuevaEdad;
                heroeEncontrado.Ubicacion = nuevaUbicacion;
                heroeEncontrado.Poster = nuevoPoster;
                alert(`El héroe ${nombreHeroe} ha sido actualizado correctamente.`);
            } else {
                alert("Por favor, complete todos los campos.");
            }
        } else {
            alert(`No se encontró un héroe con el nombre ${nombreHeroe}.`);
        }
    }
    

    showHeroButton.addEventListener('click', function() {
        desactivarCampos();
        const criterio = prompt("Ingrese el nombre del héroe:");
        if (criterio) {
            buscarHeroe(criterio);
        }
    });
    addButton.addEventListener('click', mostrarInuputTraje);

    newHeroButton.addEventListener('click', activarCampos);
    cancelButton.addEventListener('click', function() {
        desactivarCampos();
        limpiarCampos();
    });
    saveHeroButton.addEventListener('click', agregarHeroe, desactivarCampos);
    deleteHero.addEventListener('click', function() {
        const criterio = prompt("Ingrese el nombre del héroe que desea eliminar:");
        if (criterio) {
            BuscarEliminar(criterio);
        }
        desactivarCampos();
        limpiarCampos();
    });
    updateHero.addEventListener('click', function() {
        const nombreHeroe = prompt("Ingrese el nombre del héroe que desea actualizar:");
        if (nombreHeroe) {
            actualizarHeroe(nombreHeroe);
        }
        desactivarCampos();
        limpiarCampos();
    });
});