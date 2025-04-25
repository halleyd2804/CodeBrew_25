async function getPlant(name) {
    try {
      const res = await fetch(`http://localhost:5000/api/plants/${encodeURIComponent(name)}`);
      if (!res.ok) throw new Error('Plant not found');
      const plant = await res.json();
      return plant;
      // e.g. display nutrition, water, etc.
    } catch (err) {
      console.error(err);
    }
  }

const result = getPlant('Wheat');