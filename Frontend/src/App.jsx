import './App.css';

export function HamButton(){
  return <button className="bg-cyan-400 hover:bg-cyan-600 transition-colors h-10 w-10 rounded-lg border-1 border-blue-500"><svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" viewBox="0 0 24 24">
<path d="M 2 5 L 2 7 L 22 7 L 22 5 L 2 5 z M 2 11 L 2 13 L 22 13 L 22 11 L 2 11 z M 2 17 L 2 19 L 22 19 L 22 17 L 2 17 z"></path>
</svg>
</button>
}
export function Header(){
  return(
    <header className="fixed top-0 left-0 right-0 w-screen h-16 bg-cyan-100 border-b border-cyan-200 px-6 flex items-center justify-between z-50 shadow-sm">
      <HamButton />
      <div>Journal This</div>
    </header>);
}
export default function Main(){
  return(
    <div>
      <Header />
    </div>
    
  )
}
