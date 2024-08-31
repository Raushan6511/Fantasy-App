import React, {useState} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  FlatList,
  StyleSheet,
  Modal,
} from 'react-native';

import AFAppIcons from '../app-icon/AFAppIcons';
import {APP_ICON_TYPES} from '../../common/constants';
import {colors} from '../../theme';
import {styles} from './afDropDown-styles';

interface DropdownItem {
  label: string;
  value: string | number;
}

interface DropdownProps {
  data: DropdownItem[];
  onSelect: (item: DropdownItem) => void;
  placeholder?: string;
}

// TODO i will enhance it later
const AFDropDown: React.FC<DropdownProps> = ({
  data,
  onSelect,
  placeholder = 'Select an option',
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const [selectedItem, setSelectedItem] = useState<DropdownItem | null>(null);

  const handleSelect = (item: DropdownItem) => {
    setSelectedItem(item);
    setIsVisible(false);
    onSelect(item);
  };

  return (
    <View>
      <TouchableOpacity
        style={styles.dropdownButton}
        onPress={() => setIsVisible(!isVisible)}>
        <Text
          style={[styles.dropdownButtonText, {color: colors.palette.white}]}>
          {selectedItem ? selectedItem.label : placeholder}
        </Text>
        <AFAppIcons
          name={'keyboard-arrow-down'}
          type={APP_ICON_TYPES.MATERIAL_ICONS}
          iconPress={() => setIsVisible(!isVisible)}
          color={colors.palette.white}
        />
      </TouchableOpacity>

      <Modal visible={isVisible} transparent animationType="fade">
        <TouchableOpacity
          style={styles.modalOverlay}
          onPress={() => setIsVisible(false)}>
          <View style={styles.modalContainer}>
            <FlatList
              data={data}
              renderItem={({item}) => (
                <TouchableOpacity
                  style={styles.itemContainer}
                  onPress={() => handleSelect(item)}>
                  <Text style={styles.itemText}>{item.label}</Text>
                </TouchableOpacity>
              )}
              keyExtractor={item => item.value.toString()}
            />
          </View>
        </TouchableOpacity>
      </Modal>
    </View>
  );
};

export default AFDropDown;
