import { CORE_CONCEPTS } from './Data.js';
import Header from './components/Header.jsx'
import CoreConcept from './components/CoreConcept.jsx';
import TabButton from './components/TabButton.jsx';

function App() {
   function handleSelect (selectedButton) {
    console.log(selectedButton);
   } 
    
  return (
    <div>
      <Header />
      <main>
        <section id='core-concepts'>
          <h2>Core Concepts</h2>
          <ul>
            <CoreConcept
              title={CORE_CONCEPTS[0].title}
              description={CORE_CONCEPTS[0].description}
              image={CORE_CONCEPTS[0].image}
            />
            <CoreConcept
              title={CORE_CONCEPTS[1].title}
              description={CORE_CONCEPTS[1].description}
              image={CORE_CONCEPTS[1].image}
            />
            <CoreConcept
              title={CORE_CONCEPTS[2].title}
              description={CORE_CONCEPTS[2].description}
              image={CORE_CONCEPTS[2].image}
            />
            <CoreConcept {...CORE_CONCEPTS[3]} />
          </ul>
        </section>
        <section id='examples'>
          <h2>Examples</h2>
          <menu>
            <TabButton onSelect={() =>handleSelect('components')}>Components</TabButton>
            <TabButton onSelect={() =>handleSelect('jsx')}>JSX</TabButton>
            <TabButton onSelect={() =>handleSelect('props')}>Props</TabButton>
            <TabButton onSelect={() =>handleSelect('state')}>State</TabButton>
          </menu>
          Dynamic content
        </section>
      </main>
    </div>
  );
}

export default App;