import React, { useState } from "react";
import styles from "./style.module.css"
import List from "./Components/list"

import data from "./data"
function App() {
  const[people,setPeople] = useState(data)
  const peopleData = people.map(peopledata => {
    return <List key={peopledata.id} data={peopledata} />
  })
  function handleClick(){
    setPeople([])
  }
  return (
    <main className={styles.app}>
      <section className={styles.container}>
      <h3> {people.length} birthdays today</h3>
      {peopleData}
      <button className={styles.containerbutton} onClick={handleClick} >Clear All</button>
      </section>
    </main>
  );
}

export default App;
