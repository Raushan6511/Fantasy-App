export interface EventItems {
  id: number;
  firstTeamName: string;
  secondTeamName: string;
  firstTeamWonMatches: number;
  secondTeamWonMatches: number;
  numberOfDraw: number;
}

export interface PassingData {
  screenName: string;
  data: EventItems;
}

export type ProductType = {
  id: string;
  title: string;
  price: string;
};
