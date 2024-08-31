import React, {useState} from 'react';
import {View, Text} from 'react-native';
import {styles} from './userList-styles';
import AFAppIcons from '../../../../components/app-icon/AFAppIcons';
import {APP_ICON_TYPES} from '../../../../common/constants';
import {userData} from './constant';
import {colors} from '../../../../theme';
import AFButton from '../../../../components/button/AFButton';

const UserList: React.FC = () => {
  const [visibleUsers, setVisibleUsers] = useState(5);

  const handleShowMore = () => setVisibleUsers(prev => prev + 5);

  const UserAmount: React.FC<{investAmount: number; receiveAmount: number}> = ({
    investAmount,
    receiveAmount,
  }) => (
    <View style={styles.amountContainer}>
      <Text style={[styles.label, styles.investAmount]}>₹{investAmount}</Text>
      <Text style={[styles.label, styles.receiveAmount]}>₹{receiveAmount}</Text>
    </View>
  );

  const UserInfo: React.FC<{label: string}> = ({label}) => (
    <Text style={styles.label}>{label}</Text>
  );

  const renderUserActivity = () =>
    userData.slice(0, visibleUsers).map(item => (
      <View key={item.id} style={styles.subContainer}>
        <View style={styles.bottomContainer}>
          <AFAppIcons
            name="user-circle"
            type={APP_ICON_TYPES.FONT_AWESOME}
            color={colors.palette.white}
            size={50}
          />
          <UserAmount
            investAmount={item.investAmount}
            receiveAmount={item.receiveAmount}
          />
          <AFAppIcons
            name="user-circle"
            type={APP_ICON_TYPES.FONT_AWESOME}
            color={colors.palette.white}
            size={50}
          />
        </View>
        <View style={styles.bottomContainer}>
          <UserInfo label={item.investorName} />
          <Text style={styles.subLabel}>{item.timeStamp}</Text>
          <UserInfo label={item.receiverName} />
        </View>
      </View>
    ));

  return (
    <View style={styles.container}>
      {renderUserActivity()}
      {visibleUsers < userData.length && (
        <AFButton
          title="Show More"
          buttonHandler={handleShowMore}
          customButtonStyle={styles.showMore}
        />
      )}
    </View>
  );
};

export default UserList;
