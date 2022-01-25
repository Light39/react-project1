
const myHouse={
  color: 'White',
  etage: '4th',
};

function getTitle1(titlee){
  return titlee;

}

function App(){


  return (
    <div>
      <h1> In here it's called {getTitle1('Reactdd')}</h1>
      <h2>Hello, my house is {myHouse.color}, in the {myHouse.etage} floor</h2>


      <label htmlFor="search"> Search For House: </label>
      <input id="search" type="text"></input>




    </div>
  );
}

export default App;