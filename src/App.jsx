export default function App() {
  // Component 1: EventHeader
  function EventHeader() {
    return <h1>🏟️ Sports Day Schedule</h1>;
  }

  // Component 2: EventList
  function EventList() {
    return (
      <ul>
        <li>100m Sprint – 9:00 AM</li>
        <li>Long Jump – 10:00 AM</li>
        <li>Relay Race – 11:00 AM</li>
      </ul>
    );
  }

  // Component 3: EventLocation
  function EventLocation() {
    return (
      <div>
        <h2>📍 Location</h2>
        <p>Main Stadium, City Sports Complex</p>
      </div>
    );
  }

  // Component 4: EventFooter
  function EventFooter() {
    return (
      <footer>
        <p>🎉 See you there! Don’t forget your water bottle 💧</p>
      </footer>
    );
  }

  // Main App component
  return (
    <div>
      <EventHeader />
      <EventLocation />
      <EventList />
      <EventFooter />
    </div>
  );
}
