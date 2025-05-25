export default function Page2({params}: any) {
  return (
    <div className="p-5">
      Hello World!
      <br /><br />
      {" "}
      <h1>Welcome, <span className="text-2xl text-yellow-400"> {params.name} </span> </h1>
      <h2>You just sent your name over to the next page in Next.js</h2>

      <br /><br />
      <p>Want to try another name? <a href="/" className="text-blue-300 underline">Click Here!</a></p>
    </div>    
  );
}
