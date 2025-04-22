import React from "react";

const TournestDemo = () => {
  return (
    <div style={{ padding: '2rem', fontFamily: 'Arial' }}>
      <h1 style={{ textAlign: 'center', fontSize: '2.5rem' }}>Tournest</h1>
      <p style={{ textAlign: 'center', marginBottom: '2rem', color: '#555' }}>
        Explore Skardu & Gilgit-Baltistan with Comfort and Ease
      </p>

      <div style={{ display: 'flex', gap: '1rem', marginBottom: '2rem' }}>
        <input placeholder="Where to? (e.g., Skardu)" style={{ flex: 1, padding: '0.5rem' }} />
        <input type="date" style={{ flex: 1, padding: '0.5rem' }} />
        <input type="date" style={{ flex: 1, padding: '0.5rem' }} />
        <button style={{ flex: 1, padding: '0.5rem' }}>Search</button>
      </div>

      <h2 style={{ fontSize: '1.5rem', marginBottom: '1rem' }}>Featured Tours</h2>
      <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
        {[1, 2, 3].map((item) => (
          <div key={item} style={{ border: '1px solid #ccc', borderRadius: '10px', padding: '1rem', width: '30%' }}>
            <img
              src={`https://source.unsplash.com/400x200/?mountains,nature&sig=${item}`}
              alt="Tour"
              style={{ width: '100%', borderRadius: '10px' }}
            />
            <h3>Skardu Adventure {item}</h3>
            <p>5 Days, 4 Nights | Includes Transport & Stay</p>
            <p style={{ color: 'green' }}>PKR 45,000</p>
            <button style={{ marginTop: '0.5rem', padding: '0.5rem', width: '100%' }}>View Details</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TournestDemo;