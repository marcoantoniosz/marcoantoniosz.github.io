import tryvia from '../images/tryvia.png';
import iTony from '../images/itony.png';
import pocketCaldron from '../images/pocket-caldron.png';
import vehicles from '../images/vehicles.png';
import cr from '../images/CR.png';
import oo from '../images/OO.png';

const data = [
  {
    title: 'Vehicles Challenge',
    stack: 'Fullstack',
    description: 'Vehicles Challenge é um web app full stack que permite ao usuário cadastrar, editar e excluir anúncios de veículos.',
    techs: ['React', 'CSS', 'NodeJS', 'MySQL', 'Express'],
    url: 'https://marcoantoniosz.github.io/vehicles/',
    image: vehicles
  },
  {
    title: 'iTony',
    stack: 'Frontend',
    description: 'iTony é um web app que permite ao usuário buscar e navegar por álbuns de música, além de salvar suas faixas favoritas.',
    techs: ['React', 'CSS', 'Hook Form', 'iTunes API'],
    url: 'https://marcoantoniosz.github.io/itony/',
    image: iTony,
  },
  {
    title: 'Pocket Cauldron',
    stack: 'Frontend',
    description: 'Pocket Cauldron é um web app que permite ao usuário navegar por receitas e drinks, sendo possivel iniciar e finalizar uma receita, incluindo checking de ingredientes.',
    techs: ['React', 'CSS', 'REDUX', 'TheMealDB API', 'TheCocktailDB API'],
    url: 'https://marcoantoniosz.github.io/pocket-cauldron/',
    image: pocketCaldron
  },
  {
    title: 'Tryvia',
    stack: 'Frontend',
    description: 'Tryvia é um web app que oferece ao usuário uma partida de trivia em 5 rodadas, sendo possível acessar placar e ranking.',
    techs: ['React', 'CSS', 'REDUX', 'OpenTDB API'],
    url: 'https://marcoantoniosz.github.io/tryvia/',
    image: tryvia
  },
  {
    title: 'Página Pessoal - Pintor',
    stack: 'Frontend',
    description: 'Página pessoal de um pintor, com informações sobre o artista e galeria de obras.',
    techs: ['React', 'CSS', 'React Router', 'React SlideShow Image', 'React Bootstrap', 'Floating WhatsApp'],
    url: 'https://portfolio-arte.netlify.app/',
    image: cr
  },
  {
    title: 'Página Institucional - Advocacia',
    stack: 'Frontend (desktop)',
    description: 'Página institucional de um escritório de advocacia, com informações sobre a empresa e serviços prestados.',
    techs: ['React', 'CSS', 'React Router', 'React Bootstrap', 'Floating WhatsApp', 'React SlideShow Image'],
    url: 'https://portfolio-advocacia.netlify.app/',
    image: oo
  }
];

export default data;