const db = require('../config/db');

exports.addSchool = async (req, res) => {
  const { name, address, latitude, longitude } = req.body;
  if (!name || !address || isNaN(latitude) || isNaN(longitude)) {
    return res.status(400).json({ message: 'Invalid input data' });
  }
  try {
    await db.execute(
      'INSERT INTO schools (name, address, latitude, longitude) VALUES (?, ?, ?, ?)',
      [name, address, latitude, longitude]
    );
    res.status(201).json({ message: 'School added successfully' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.listSchools = async (req, res) => {
  const { latitude, longitude } = req.query;

  if (isNaN(latitude) || isNaN(longitude)) {
    return res.status(400).json({ message: 'Invalid coordinates' });
  }

  try {
    // Fetch all schools
    const [schools] = await db.execute('SELECT * FROM schools');

    // Helper function to calculate distance using the Haversine formula
    const calculateDistance = (lat1, lon1, lat2, lon2) => {
      const R = 6371; // Radius of Earth in kilometers
      const toRad = Math.PI / 180;
      
      const latDiff = (lat2 - lat1) * toRad;
      const lonDiff = (lon2 - lon1) * toRad;

      const a = Math.sin(latDiff / 2) * Math.sin(latDiff / 2) +
                Math.cos(lat1 * toRad) * Math.cos(lat2 * toRad) *
                Math.sin(lonDiff / 2) * Math.sin(lonDiff / 2);
      const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));

      const distanceKm = R * c; // Distance in kilometers

      return distanceKm < 1 ? distanceKm * 1000 : distanceKm; // Convert to meters if less than 1 km
    };

    // Map over the schools and calculate distance
    const sortedSchools = schools.map(school => {
      const distance = calculateDistance(
        parseFloat(latitude),
        parseFloat(longitude),
        school.latitude,
        school.longitude
      );

      // Convert distance to meters or kilometers
      const formattedDistance = distance < 1000
        ? `${distance.toFixed(2)} meters`
        : `${distance.toFixed(2)} km`;

      return { ...school, distance: formattedDistance };
    }).sort((a, b) => {
      const distA = parseFloat(a.distance);
      const distB = parseFloat(b.distance);
      return distA - distB;
    });

    res.json(sortedSchools);  // Send sorted schools with distance
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
