import {STACK_ROUTES} from '../common/constants';
import {EventItems} from '../common/types';

type StackNavigatorParamsList = {
  [STACK_ROUTES.BOTTOM_HOME]: undefined;
  [STACK_ROUTES.EVENT]: {cardData: EventItems} | undefined;
  [STACK_ROUTES.TEST]: undefined;
};

export type {StackNavigatorParamsList};
