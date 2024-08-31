import React, {useState} from 'react';
import {View, Text} from 'react-native';

import AFButton from '../../button/AFButton';
import AFSwipeButton from '../../swipe-button/AFSwipeButton';
import AFSlider from '../../slider/AFSlider';

import {PassingData} from '../../../common/types';
import {colors} from '../../../theme';

import IplIcon from '../../../assets/icons/ipl.svg';

import {styles} from './sheetComponent-styles';

interface SheetComponentProps {
  eventCardData?: PassingData;
}

const SheetComponent: React.FC<SheetComponentProps> = ({eventCardData}) => {
  const [isYes, setIsYes] = useState<boolean>(
    eventCardData?.screenName === 'Yes',
  );
  const [sliderValue, setSliderValue] = useState<number>(5);

  const handleYesPress = () => setIsYes(true);
  const handleNoPress = () => setIsYes(false);
  const handleSwipeSuccess = () => {};
  const handleValueChange = (value: number) => setSliderValue(value);

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.heading}>
          {`${eventCardData?.data.firstTeamName} to win the match vs ${eventCardData?.data.secondTeamName}?`}
        </Text>
        <View style={styles.imageWrapper}>
          <IplIcon width={70} height={70} style={styles.icon} />
        </View>
      </View>
      <View style={styles.buttonContainer}>
        <AFButton
          title="Yes"
          buttonHandler={handleYesPress}
          customButtonStyle={[
            styles.choiceButton,
            {
              backgroundColor: isYes
                ? colors.primary
                : colors.palette.eerieBlack,
            },
          ]}
        />
        <AFButton
          title="No"
          buttonHandler={handleNoPress}
          customButtonStyle={[
            styles.choiceButton,
            {
              backgroundColor: !isYes
                ? colors.secondary
                : colors.palette.eerieBlack,
            },
          ]}
        />
      </View>
      <View style={styles.middleContainer}>
        <View style={styles.priceRow}>
          <Text style={styles.priceLabel}>Price</Text>
          <Text style={styles.priceValue}>₹5.3</Text>
        </View>
        <Text style={styles.quantityLabel}>132045 qty available</Text>
        <AFSlider
          minRange={0}
          maxRange={10}
          value={sliderValue}
          onValueChange={handleValueChange}
          steps={0.1}
          tintColor={isYes ? colors.primary : colors.secondary}
        />
        <View style={styles.dashedContainer}>
          <Text style={styles.priceValue}>₹5.3</Text>
          <Text style={[styles.priceValue, {color: colors.secondary}]}>
            ₹10
          </Text>
        </View>
        <View style={styles.resultContainer}>
          <Text style={styles.resultLabel}>You put</Text>
          <Text style={styles.resultLabel}>You get</Text>
        </View>
      </View>
      <AFSwipeButton
        onSwipeSuccess={handleSwipeSuccess}
        title={isYes ? 'Swipe for Yes' : 'Swipe for No'}
        customStyle={{
          backgroundColor: isYes ? colors.primary : colors.secondary,
        }}
      />
      <Text style={styles.balanceLabel}>Available Balance: 400.00</Text>
    </View>
  );
};

export default SheetComponent;
