import CardHolder from "./components/CardHolder";
import SignUpForm from "./components/SignUpForm";



// Wrapper Component for all
function App() {
  return (
    <>
      <div id="head" className="w-screen bg-cyan-600 flex justify-center ">
        <h1 className="text-3xl text-white my-5">Story Cards</h1>
      </div>

      <div className="w-screen px-10 py-10 bg-gray-900 flex justify-center items-center ">
        
        {/* Injecting Cards here */}
        {/* <CardHolder /> */}
        {/* Injecting Sign Up Form */}
        <SignUpForm />
      </div>

      {/* Footer */}
      <div id="foot" className="w-screen bg-cyan-600 flex justify-center">
        <h3 className="text-xl text-white my-5">Created with ❤️ by SPD</h3>
      </div>
    </>
  );
}

export default App;
