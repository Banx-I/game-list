

type Game = {
  title: string;
  genre: string;
  platform: string;
  year: number;
  imgUrl: string;
 
}

type Props = {
  games: Game[];
 
}

const GameList = ({ games }: Props) => {
  return (
    <div>
      {games.map((game, index) => (
        <div 
        
        className='game__card' 
        key={index}>
          <h2>{game.title}</h2>
          <p>Genre: {game.genre}</p>
          <p>Platform: {game.platform}</p>
          <p>Year: {game.year}</p>
          <img src={game.imgUrl} alt={`Image of ${game.title}`} />
        </div>
      ))}
    </div>
  );
};

export default GameList;
