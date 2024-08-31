import React from 'react';
import {View, Text, ScrollView} from 'react-native';

import EventAccordion from './component/event-accordion/EventAccordion';
import ChartGraph from './component/chart-graph/ChartGraph';
import ProgressCharts from './component/progress-chart/ProgressChart';
import AFAppHeader from '../../components/app-header/AFAppHeader';
import AFButton from '../../components/button/AFButton';
import UserList from './component/user-list/UserList';

import {EventItems} from '../../common/types';
import {APP_HEADER_PRESET, BUTTON_PRESET} from '../../common/constants';
import {accordionData, labels, noData, yesData} from './constants';

import IplIcon from '../../assets/icons/cricket-league.svg';

import {styles} from './event-styles';

interface IEventScreenProps {
  route?: {
    params?: {
      cardData?: EventItems;
    };
  };
}

const Event: React.FC<IEventScreenProps> = ({route}) => {
  const {cardData} = route?.params ?? {};
  const {
    firstTeamName = '',
    secondTeamName = '',
    numberOfDraw = 0,
    firstTeamWonMatches = 0,
    secondTeamWonMatches = 0,
  } = cardData || {};

  // render user accordion
  const renderAccordion = () =>
    accordionData.map(item => (
      <EventAccordion
        key={item.id.toString()}
        title={item.title}
        subTitle={item.subTitle}
      />
    ));

  return (
    <ScrollView style={styles.container}>
      <AFAppHeader
        preset={APP_HEADER_PRESET.SCREEN_HEADER}
        screenName="Events"
      />
      <IplIcon width={200} height={200} style={styles.image} />
      <Text style={styles.heading}>
        {`${firstTeamName} to win the match vs ${secondTeamName}?`}
      </Text>
      <Text style={styles.subHeading}>
        {`LAST 5 T20 : ${firstTeamName} ${firstTeamWonMatches}, ${secondTeamName} ${secondTeamWonMatches}, DRAW ${numberOfDraw}`}
      </Text>
      <Text style={[styles.marketLabel, {textAlign: 'left'}]}>
        THE MARKET PREDICT
      </Text>
      <ProgressCharts yesPercentage={20} />
      <Text style={styles.marketLabel}>THE MARKET TREND / CHART</Text>
      <ChartGraph
        yesMarketPredictionData={yesData}
        noMarketPredictionData={noData}
        labels={labels}
      />
      <UserList />
      {renderAccordion()}
      <Text style={styles.keepTrading}>{`Keep\nTrading!`}</Text>
      <View style={styles.buttonContainer}>
        <AFButton
          title="Yes"
          buttonHandler={() => {}}
          customButtonStyle={styles.primaryButton}
        />
        <AFButton
          title="No"
          buttonHandler={() => {}}
          buttonType={BUTTON_PRESET.SECONDARY}
          customButtonStyle={styles.secondaryButton}
        />
      </View>
    </ScrollView>
  );
};

export default Event;
