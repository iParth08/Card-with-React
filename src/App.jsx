import Card from "./Card";
import data from "./assets/databank";

// Wrapper Component for all
function App() {
  return (
    <>
      <div id="head" className="w-screen bg-cyan-600 flex justify-center ">
        <h1 className="text-3xl text-white my-5">Story Cards</h1>
      </div>

      <div className="w-screen h-[40rem] px-10  bg-gray-900 ">
        <div
          id="cards-container"
          className="overflow-y-auto w-auto h-[40rem] bg-inherit flex flex-row gap-4 items-center justify-around"
        >
          {/* Inject Cards here with map */}
          {/* No Props are send for this first card */}
          <Card /> 
          {/* Rest cards are mapped from data array with props */}
          {data.map((item) => {
            return (
              <Card
                key={item.id}
                heading={item.heading}
                para={item.para}
                imgSrc={item.imgSrc}
                authorlight={item.authorLight}
                authordark={item.authorDark}
              />
            );
          })}
        </div>
      </div>

      {/* Footer */}
      <div id="foot" className="w-screen bg-cyan-600 flex justify-center">
        <h3 className="text-xl text-white my-5">Created with ❤️ by SPD</h3>
      </div>
    </>
  );
}

export default App;
