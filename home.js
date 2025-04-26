function toggleDropdown() {
    document.getElementById("dropdownMenu").classList.toggle("show");
}


function yes() {
    document.getElementById("if-yes").style.display = "block";
    document.getElementById("if-no").style.display = "none";
}

function no() {
    document.getElementById("if-no").style.display = "block";
    document.getElementById("if-yes").style.display = "none";
}



async function fetchSoilTypes() {
    try {
      const response = await fetch('https://code-brew-backend-5d5142b2402d.herokuapp.com/api/soil');
      if (!response.ok) throw new Error('Failed to fetch soil types');
      const soilTypes = await response.json();

      const dropdownMenu = document.getElementById('dropdownMenu');

      soilTypes.forEach(soil => {
        const option = document.createElement('option');
        option.value = soil;
        option.textContent = soil;
        dropdownMenu.appendChild(option);
      });
    } catch (error) {
      console.error('Error fetching soil types:', error);
    }
  }

  function selectSoil() {
    const selectedSoil = document.getElementById('dropdownMenu').value;
    if (selectedSoil) {
      console.log(`Selected Soil Type: ${selectedSoil}`);
      window.location.href = `./result-tab.html?soil=${encodeURIComponent(selectedSoil)}`;
    } else {
      alert('Please select a soil type.');
    }
  }

  window.onload = fetchSoilTypes;



function fieldvalues() {
    const urlParams = new URLSearchParams(window.location.search);
    const N = urlParams.get('N');
    const P = urlParams.get('P');
    const K = urlParams.get('K');
    const pH = parseFloat(urlParams.get('pH'));
    const loc = urlParams.get('location');



    if (0 > pH || pH > 14) {
        alert('pH must be in range 0-14.');
    }
}