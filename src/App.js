import Card from './Card';

import priceList from "./price";

function App() {
  return (
    <section className="pricing py-5">
      <div className="container">
        <div className="row">
         {
           Object.entries(priceList).map(item => {
            return <Card item = {item} />
           })
         }
        </div>
      </div>
    </section>
  );
}

export default App;
