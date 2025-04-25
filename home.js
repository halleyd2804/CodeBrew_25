function toggleDropdown() {
    document.getElementById("dropdownMenu").classList.toggle("show");
}

function selectSoil(soil) {
    open('./result-tab.html')
    // 
}

async function getPlant(name) {
    try {
      const res = await fetch(`http://localhost:5000/api/plants/${encodeURIComponent(name)}`);
      if (!res.ok) throw new Error('Plant not found');
      const plant = await res.json();
      console.log(plant);
      return plant;
      // e.g. display nutrition, water, etc.
    } catch (err) {
      console.error(err);
    }
  }
  

  const btn = document.querySelector(".learn-more");
  btn.onclick = function () {
      const data = getPlant('Rice');
  }