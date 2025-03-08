import './Square.css'

interface Props {
  image?: string;
  number: number;
 // highlight: boolean;
}

export default function Square({ number }: Props) {
  const className: string = ["square",
    number % 2 === 0 && "dark-square",
    number % 2 !== 0 && "light-square",
    //highlight && "square-highlight",
    //image && "chess-piece-square"
    ].filter(Boolean).join(' ');


  return (
    <div className={className}>
      {
      //image && 
      <div 
      //style={{ backgroundImage: `url(${image})` }}
       className="chess-piece"></div>}
    </div>
  );
}