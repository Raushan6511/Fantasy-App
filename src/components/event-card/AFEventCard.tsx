import React, {useRef} from 'react';
import {View, Text, Pressable} from 'react-native';
import {useNavigation, NavigationProp} from '@react-navigation/native';

import AFButton from '../button/AFButton';
import AFBottomSheet, {BottomSheetMethods} from '../bottom-sheet/AFBottomSheet';
import SheetComponent from '../bottom-sheet/component/SheetComponent';

import {BUTTON_PRESET, STACK_ROUTES} from '../../common/constants';
import {colors} from '../../theme';
import {StackNavigatorParamsList} from '../../navigation/types';

import IplIcon from '../../assets/icons/ipl.svg';

import {styles} from './afEventCard-styles';

interface EventItems {
  id: number;
  firstTeamName: string;
  secondTeamName: string;
  firstTeamWonMatches: number;
  secondTeamWonMatches: number;
  numberOfDraw: number;
}

interface PassingData {
  screenName: string;
  data: EventItems;
}

const AFEventCard: React.FC<EventItems> = props => {
  const navigation = useNavigation<NavigationProp<StackNavigatorParamsList>>();
  const {
    firstTeamName,
    secondTeamName,
    firstTeamWonMatches,
    secondTeamWonMatches,
    numberOfDraw,
  } = props;

  const bottomSheetRef = useRef<BottomSheetMethods>(null);

  const handleOpenSheet = (value: PassingData) => {
    bottomSheetRef.current?.expand();
    bottomSheetRef.current?.bottomSheetName(value);
  };

  const handleEventCardPress = () => {
    navigation.navigate(STACK_ROUTES.EVENT, {cardData: props});
  };

  return (
    <Pressable style={styles.container} onPress={handleEventCardPress}>
      <View style={styles.upperContainer}>
        <View style={styles.leftContainer}>
          <Text style={styles.heading}>
            {`${firstTeamName} to win the match vs ${secondTeamName}?`}
          </Text>
          <Text style={styles.subTitle}>
            {`H2H last 5 T20 : ${firstTeamName} ${firstTeamWonMatches}, ${secondTeamName} ${secondTeamWonMatches}, DRAW ${numberOfDraw}`}
          </Text>
        </View>
        <View style={styles.imageWrapper}>
          <IplIcon width={60} height={60} style={styles.iplImage} />
        </View>
      </View>
      <View style={styles.buttonContainer}>
        <AFButton
          title={'Yes'}
          buttonHandler={() =>
            handleOpenSheet({screenName: 'Yes', data: props})
          }
          customButtonStyle={styles.primaryButton}
        />
        <AFButton
          title={'No'}
          buttonHandler={() => handleOpenSheet({screenName: 'No', data: props})}
          buttonType={BUTTON_PRESET.SECONDARY}
          customButtonStyle={styles.secondaryButton}
        />
      </View>
      <AFBottomSheet
        ref={bottomSheetRef}
        snapTo="82%"
        backgroundColor={colors.background}>
        <SheetComponent />
      </AFBottomSheet>
    </Pressable>
  );
};

export default AFEventCard;
