import {withProps} from 'recompose';

import ProfileScreen from './ProfileScreen';

const ProfileScreenProps = withProps({
  sortOptions: [
    {label: 'Default list', value: 'default'},
    {label: 'Correspondent name', value: 'username'},
    {label: 'Date', value: 'date'},
    {label: 'Amount', value: 'amount'},
  ],
  layoutOptions: [
    {label: 'Grid', value: 'grid'},
    {label: 'List', value: 'list'},
  ],
})(ProfileScreen);

export default ProfileScreenProps;
