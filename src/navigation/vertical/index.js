// ** Icon imports
import Login from 'mdi-material-ui/Login'
import Table from 'mdi-material-ui/Table'
import CubeOutline from 'mdi-material-ui/CubeOutline'
import HomeOutline from 'mdi-material-ui/HomeOutline'
import FormatLetterCase from 'mdi-material-ui/FormatLetterCase'
import AccountCogOutline from 'mdi-material-ui/AccountCogOutline'
import CreditCardOutline from 'mdi-material-ui/CreditCardOutline'
import WrenchSettingsOutline from 'mdi-material-ui/AccountPlusOutline'
import AlertCircleOutline from 'mdi-material-ui/AlertCircleOutline'
import GoogleCirclesExtended from 'mdi-material-ui/GoogleCirclesExtended'

import EngineeringTwoToneIcon from '@mui/icons-material/EngineeringTwoTone';
import HandymanTwoToneIcon from '@mui/icons-material/HandymanTwoTone';
import ScreenSearchDesktopTwoToneIcon from '@mui/icons-material/ScreenSearchDesktopTwoTone';
import ColorLensOutlinedIcon from '@mui/icons-material/ColorLensOutlined';
import CastForEducationOutlinedIcon from '@mui/icons-material/CastForEducationOutlined';
import StorageOutlinedIcon from '@mui/icons-material/StorageOutlined';

const navigation = () => {
  return [
    {
      title: 'الرئيسية',
      icon: HomeOutline,
      path: '/'
    }
    // // {
    // //   title: 'Account Settings',
    // //   icon: AccountCogOutline,
    // //   path: '/account-settings'
    // // },
  //  {
//      sectionTitle: 'المواد'
 //   },
 //  {
  //     {
//     title: ' اساسيات صيانة الحاسب  ',     title: ' اساسيات صيانة الحاسب  ',
//       icon: HandymanTwoToneIcon,
 //     path: '/subjects/maintenance'
 //   }, 
 //   {
 ////     title: 'الوسائط المتعددة',
  //     icon: ColorLensOutlinedIcon,
  //    path: '/subjects/multimedia',
      // openInNewTab: true
 //   },
    // {
    //   title: 'تحليل نظم المعلومات',
    //   // icon: AlertCircleOutline,
    //   path: '/subjects/is',
    //   // openInNewTab: true
    // },
    
    ,{
      sectionTitle: 'تاريخ تربية '
    },
    {
      title: 'الاول والثاني_1',
      icon: GoogleCirclesExtended,
      path: '/subjects/1'
    },
  //  {
  //    title: '_2الثاني',
   //   icon: GoogleCirclesExtended,
  //    path: '/subjects/2'
//    },
   // {
 //   title: 'الثالث _ الفرعونية',
//      icon: GoogleCirclesExtended,
 //     path: '/subjects/3'
  //  },
 //   {
 //     title: 'الثالث_الفرعونية 2',
//      icon: GoogleCirclesExtended,
  //    path: '/subjects/4'
   // },
  ////  {
   //   title: 'الخامس',
  //    icon: GoogleCirclesExtended,
   //   path: '/subjects/5'
  //  },
  //  {
  //    title: 'السادس',
   //   icon: GoogleCirclesExtended,
   //   path: '/subjects/6'
  //  },
    // {
    //   title: 'Icons',
    //   path: '/icons',
    //   icon: GoogleCirclesExtended
    // },
    // {
    //   title: 'Cards',
    //   icon: CreditCardOutline,
    //   path: '/cards'
    // },
    // {
    //   title: 'Tables',
    //   icon: Table,
    //   path: '/tables'
    // },
    // {
    //   icon: CubeOutline,
    //   title: 'Form Layouts',
    //   path: '/form-layouts'
    // }
  ]
}

export default navigation
