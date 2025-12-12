const URL_API_EMPRESAS = 'https://fabiangeloni.github.io/emprendedores-oct/json/empresas.json';



function fetchEmpresas() {
    return fetch(URL_API_EMPRESAS)
        .then(response => {
            if (!response.ok) {
                throw new Error('Error HTTP ' + response.status);
            }
            return response.json();
        })
        .then(data => {
           
            return data;
        })
        .catch(error => {
            console.error('Error fetching empresas:', error);
            return [];
        });
}

function displayEmpresas(empresas) {
    const container = document.getElementById('contenedor-todas');
    container.innerHTML = '';

    empresas.forEach(empresa => {
        const empresaDiv = document.createElement('div');
        empresaDiv.classList.add('empresa');
        empresaDiv.innerHTML = `
            <div class="tarjeta">
                <img src="${empresa.fotoPerfil}" alt="${empresa.nombre}" class="foto-perfil">
                <h3>${empresa.nombre}</h3>
                <p>${empresa.descripcionCorta}</p>
                <p><strong>Categoría:</strong> ${empresa.categoria}</p>
                ${empresa.telefono ? `${empresa.telefono}` : ''}
            </div>
        `;
        container.appendChild(empresaDiv);
    });
}
//console.log('mostrando ' + empresas.length + ' empresas');
//fetchEmpresas().then(empresas => {console.log(empresas.length); displayEmpresas(empresas);});
//(empresas.filter(e => e.categoria === "Gastronomia" || e.categoria === "Servicios").slice(0, 4)));
fetchEmpresas().then(empresas => displayEmpresas(empresas.slice(0, 10)));



function displayComerciantes(comerciantes) {
    const container = document.getElementById('contenedor-comerciantes');
    container.innerHTML = '';

    comerciantes.forEach(comerciante => {
        const comercianteDiv = document.createElement('div');
        comercianteDiv.classList.add('empresa');
        comercianteDiv.innerHTML = `
            <div class="tarjeta">
                <img src="${comerciante.fotoPerfil}" alt="${comerciante.nombre}" class="foto-perfil">
                <h3>${comerciante.nombre}</h3>
                <p>${comerciante.descripcionCorta}</p>
                <p><strong>Categoría:</strong> ${comerciante.categoria}</p>
                ${comerciante.telefono ? `${comerciante.telefono}` : ''}
            </div>
        `;
        container.appendChild(comercianteDiv);
    });
}

// ✅ Ejecutar cuando la página cargue
fetchEmpresas().then(comerciantes => 
    displayComerciantes(comerciantes.filter(e => e.categoria === "Comerciantes").slice(0, 10))
);


