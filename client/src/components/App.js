import { useState, useEffect } from "react";

function App() {
  const [avocado, setBacon] = useState(null);

  useEffect(() => {
    fetch("/bacon")
      .then((res) => res.json())
      .then((data) => setBacon(data));
  }, []);

  return <div>
    <>
    {avocado ? avocado : `...where's my stuff?...`}
    <p>test !</p>
    </>
    </div>;
}

export default App;
