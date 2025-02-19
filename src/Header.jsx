import reactImg from './assets/react-core-concepts.png' 
const readDescriptions = ['Fundamental', 'Crucial', 'Core']

function genRandomInt(max) {
  return Math.floor(Math.random() * (max + 1)) 
}

export default function Header() {
  const Description = readDescriptions[genRandomInt(2)] 
  return (
    <div>
      <header>
        <img src={reactImg} alt="Stylized atom" /> 
        <h1>React Essentials</h1>
        <p>
          {Description} React concepts you will need for almost any app you are
          going to build!
        </p>
      </header>
    </div>
  )
}


