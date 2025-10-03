function Project() {
  return (
    <section>
      <h2 className="text-3xl font-semibold mb-4">Projects</h2>
      <ul className="space-y-4">
        <li className="p-4 border rounded-lg shadow hover:shadow-lg">
          <h3 className="text-xl font-bold">Barber System</h3>
          <p className="text-gray-600">
            A MERN stack project for booking appointments at barber shops.
          </p>
        </li>
        <li className="p-4 border rounded-lg shadow hover:shadow-lg">
          <h3 className="text-xl font-bold">Typing Practice App</h3>
          <p className="text-gray-600">
            A React + Tailwind app that tracks typing speed and accuracy in real-time.
          </p>
        </li>
      </ul>
    </section>
  );
}

export default Project;
