import FootBallIcon from '../../assets/icons/foot-league.svg';
import BitCoinIcon from '../../assets/icons/bitcoin.svg';
import EthereumIcon from '../../assets/icons/ethereum.svg';
import CricketIcon from '../../assets/icons/cricket-league.svg';
import TataIplIcon from '../../assets/icons/tata-ipl.svg';

const carouselData = [
  {
    id: 1,
    title: 'Bitcoin',
    subTitle: '$5438',
    profit: '+0.23',
    imageUrl: BitCoinIcon,
  },
  {
    id: 2,
    title: 'IPL',
    subTitle: '2024',
    imageUrl: TataIplIcon,
  },
  {
    id: 3,
    title: 'Ethereum',
    subTitle: '$5438',
    profit: '+0.23',
    imageUrl: EthereumIcon,
  },
  {
    id: 4,
    title: `Men's world cup`,
    subTitle: 'Cricket',
    imageUrl: CricketIcon,
  },
  {
    id: 5,
    title: 'Champion league',
    subTitle: 'Football',
    imageUrl: FootBallIcon,
  },
];

const bannerData = [
  {id: 1, source: require('../../assets/images/america_football.jpg')},
  {id: 2, source: require('../../assets/images/indvspak.jpg')},
  {id: 3, source: require('../../assets/images/football.jpg')},
  {id: 4, source: require('../../assets/images/bitcoin.jpg')},
];

const teamsEventsData = [
  {
    id: 1,
    firstTeamName: 'Kolkata',
    secondTeamName: 'Mumbai',
    firstTeamWonMatches: 2,
    secondTeamWonMatches: 2,
    numberOfDraw: 1,
  },
  {
    id: 2,
    firstTeamName: 'Chennai',
    secondTeamName: 'Mumbai',
    firstTeamWonMatches: 4,
    secondTeamWonMatches: 1,
    numberOfDraw: 0,
  },
  {
    id: 3,
    firstTeamName: 'Delhi',
    secondTeamName: 'Chennai',
    firstTeamWonMatches: 1,
    secondTeamWonMatches: 3,
    numberOfDraw: 1,
  },
  {
    id: 4,
    firstTeamName: 'Kolkata',
    secondTeamName: 'Punjab',
    firstTeamWonMatches: 3,
    secondTeamWonMatches: 1,
    numberOfDraw: 1,
  },
  {
    id: 5,
    firstTeamName: 'Hyderabad',
    secondTeamName: 'Mumbai',
    firstTeamWonMatches: 2,
    secondTeamWonMatches: 3,
    numberOfDraw: 0,
  },
  {
    id: 6,
    firstTeamName: 'Delhi',
    secondTeamName: 'Mumbai',
    firstTeamWonMatches: 2,
    secondTeamWonMatches: 3,
    numberOfDraw: 0,
  },
  {
    id: 7,
    firstTeamName: 'Hyderabad',
    secondTeamName: 'Chennai',
    firstTeamWonMatches: 2,
    secondTeamWonMatches: 3,
    numberOfDraw: 0,
  },
  {
    id: 8,
    firstTeamName: 'Hyderabad',
    secondTeamName: 'Kolkata',
    firstTeamWonMatches: 4,
    secondTeamWonMatches: 1,
    numberOfDraw: 0,
  },
];

export {carouselData, teamsEventsData, bannerData};
