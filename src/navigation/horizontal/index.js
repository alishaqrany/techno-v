const navigation = () => {
    return [
      {
        badgeColor: 'error',
        badgeContent: 'New',
        title: 'Form Validation',
        path: '/forms/form-validation',
        icon: 'mdi:checkbox-marked-circle-outline'
      },
      {
        disabled: true,
        icon: 'mdi:eye-off-outline',
        title: 'Disabled Menu'
      },
      {
        icon: 'mdi:material-ui',
        title: 'MUI Docs',
        externalLink: true,
        openInNewTab: true,
        path: 'https://mui.com/material-ui/getting-started/usage/'
      }
    ]
  }
  
  export default navigation