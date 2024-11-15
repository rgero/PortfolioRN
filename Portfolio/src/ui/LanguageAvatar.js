import { Avatar } from "react-native-paper"

const languageImages = {
  python: require('../../assets/languages/python.png'),
  react: require('../../assets/languages/react.png'),
  "react native": require('../../assets/languages/react.png'),
  "c#": require('../../assets/languages/csharp.png'),
};

const LanguageAvatar = ({props, language}) => {
  return (
    <Avatar.Image 
      {...props}
      size={48}
      source={languageImages[language] ? languageImages[language] : require('../../assets/languages/placeholder.png')}
      style={{ backgroundColor: 'transparent' }}
      resizeMode="cover"
    />
  )
}

export default LanguageAvatar