
import './App.css';


const Box = ({number, typeOfNumber}) => {
  let class_name

  if(typeOfNumber === "prime"){
    class_name = "w-20 h-20 m-1 pt-6 bg-red-700"
  } else if(typeOfNumber === "even"){
    class_name = "w-20 h-20 m-1 pt-6 bg-green-700"
  } else{
    class_name = "w-20 h-20 m-1 pt-6 bg-yellow-500"
  }

  return (
    
    <div className={class_name}>{number}</div>
  )
}


function App() {
  const isPrime = (num) => {
    if(num === 2) return true;
    if(num % 2 === 0) return false;
    for(var i = 3; i <= Math.sqrt(num); i += 2){
      if(num % i === 0) return false;
    }
    return num > 1;
  }

  const CheckTypeOfNumber = (number) => {
    let typeOfNumber = ""

    let remainder = number % 2
    console.log(remainder)

    if(remainder === 0) {
      typeOfNumber = "even"
    } else if(isPrime(number) === true){
      typeOfNumber = "prime"
    } 
    else{
      typeOfNumber = "odd"
    }

    return (typeOfNumber)
  }

  return (
    <div className='text-center max-w-3xl m-auto'>
      <h1 className="">30 Days Of React</h1>
      <h3 className=''>Number Generator</h3>
      <div className="flex flex-wrap flex-row font-bold">
        <Box number={1} typeOfNumber={CheckTypeOfNumber(1)}/>
        <Box number={2} typeOfNumber={CheckTypeOfNumber(2)}/>
        <Box number={3} typeOfNumber={CheckTypeOfNumber(3)}/>
        <Box number={4} typeOfNumber={CheckTypeOfNumber(4)}/>
        <Box number={5} typeOfNumber={CheckTypeOfNumber(5)}/>
        <Box number={6} typeOfNumber={CheckTypeOfNumber(6)}/>
        <Box number={7} typeOfNumber={CheckTypeOfNumber(7)}/>
        <Box number={8} typeOfNumber={CheckTypeOfNumber(8)}/>
        <Box number={9} typeOfNumber={CheckTypeOfNumber(9)}/>
        <Box number={10} typeOfNumber={CheckTypeOfNumber(10)}/>
        <Box number={11} typeOfNumber={CheckTypeOfNumber(11)}/>
        <Box number={12} typeOfNumber={CheckTypeOfNumber(12)}/>
        <Box number={13} typeOfNumber={CheckTypeOfNumber(13)}/>
        <Box number={14} typeOfNumber={CheckTypeOfNumber(14)}/>
        <Box number={15} typeOfNumber={CheckTypeOfNumber(15)}/>
        <Box number={16} typeOfNumber={CheckTypeOfNumber(16)}/>
        <Box number={17} typeOfNumber={CheckTypeOfNumber(17)}/>
        <Box number={18} typeOfNumber={CheckTypeOfNumber(18)}/>
        <Box number={19} typeOfNumber={CheckTypeOfNumber(19)}/>
        <Box number={20} typeOfNumber={CheckTypeOfNumber(20)}/>
        <Box number={21} typeOfNumber={CheckTypeOfNumber(21)}/>
        <Box number={22} typeOfNumber={CheckTypeOfNumber(22)}/>
        <Box number={23} typeOfNumber={CheckTypeOfNumber(23)}/>
        <Box number={24} typeOfNumber={CheckTypeOfNumber(24)}/>
      </div>
    </div>
  );
}

export default App;
