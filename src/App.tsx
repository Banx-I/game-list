
import GameList from './comoponents/game-list';
import Grid from './comoponents/grid';

import Layout from './comoponents/layout';


const arrayOfGames = [
  {
    title: "The Witcher 3: Wild Hunt",
    genre: "RPG",
    platform: "PC, PlayStation, Xbox",
    year: 2015,
    imgUrl: "https://i.guim.co.uk/img/static/sys-images/Guardian/Pix/pictures/2015/5/13/1431520130189/8bfad8ae-5a24-4617-988e-ccafee83324f-1020x612.jpeg?width=700&quality=85&auto=format&fit=max&s=8a7d3e78ea1329d9442f2b175bc7eb14" // Dodajemo imgUrl za prvu igru
  },
  {
    title: "The Legend of Zelda: Breath of the Wild",
    genre: "Action-adventure",
    platform: "Nintendo Switch",
    year: 2017,
    imgUrl: "https://assets.nintendo.com/image/upload/c_fill,w_1200/q_auto:best/f_auto/dpr_2.0/ncom/software/switch/70010000000025/7137262b5a64d921e193653f8aa0b722925abc5680380ca0e18a5cfd91697f58" // Dodajemo imgUrl za drugu igru
  },
  {
    title: "Red Dead Redemption 2",
    genre: "Action-adventure",
    platform: "PlayStation, Xbox, PC",
    year: 2018,
    imgUrl: "https://cdn.akamai.steamstatic.com/steam/apps/1174180/header.jpg?t=1695140956" // Dodajemo imgUrl za treću igru
  },
  {
    title: "Cyberpunk 2077",
    genre: "Action RPG",
    platform: "PC, PlayStation, Xbox",
    year: 2020,
    imgUrl: "https://images.gog-statics.com/bed5c0e147f3ddccb83deaf0d2cdf300f5be2db564a9c51a0fea99148e346993_product_card_v2_mobile_slider_639.jpg" // Dodajemo imgUrl za četvrtu igru
  }
];


const App = () => {
  return (
  <>
     <Layout>
        <Grid columns={4} >
          <GameList games={arrayOfGames} />
        </Grid>
       
    </Layout>
  </>
     
    
  );
};

export default App;
