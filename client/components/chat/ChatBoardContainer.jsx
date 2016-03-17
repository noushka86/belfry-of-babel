import { composeWithTracker } from 'react-komposer';
import ChatBoard from '/client/components/chat/ChatBoard.jsx';


Session.set('translateTo', 'ru');

function composer(props, onData) {
  const lang = Session.get('translateTo');
  const subscription = Meteor.subscribe('posts');
  if (subscription.ready()) {
    const posts = Posts.find().fetch();
    let translatedPosts;
    Meteor.call('translate', posts, lang, (err, success) => {
      if (!err) {
        translatedPosts = success;
        onData(null, { translatedPosts, languages });
      }
    });
  }
}

export default composeWithTracker(composer)(ChatBoard);

var languages = [
      { language: 'English', value: 'en' },
      { language: 'Albanian', value: 'sq' },
      { language: 'Arabic', value: 'ar' },
      { language: 'Armenian', value: 'hy' },
      { language: 'Azerbaijan', value: 'az' },
      { language: 'Afrikaans', value: 'af' },
      { language: 'Basque', value: 'eu' },
      { language: 'Belarusian', value: 'be' },
      { language: 'Bulgarian', value: 'bg' },
      { language: 'Bosnian', value: 'bs' },
      { language: 'Welsh', value: 'cy' },
      { language: 'Vietnamese', value: 'vi' },
      { language: 'Hungarian', value: 'hu' },
      { language: 'Haitian (Creole)', value: 'ht' },
      { language: 'Galician', value: 'gl' },
      { language: 'Dutch', value: 'nl' },
      { language: 'Greek', value: 'el' },
      { language: 'Georgian', value: 'ka' },
      { language: 'Danish', value: 'da' },
      { language: 'Yiddish', value: 'he' },
      { language: 'Indonesian', value: 'id' },
      { language: 'Irish', value: 'ga' },
      { language: 'Italian', value: 'it' },
      { language: 'Icelandic', value: 'is' },
      { language: 'Spanish', value: 'es' },
      { language: 'Kazakh', value: 'kk' },
      { language: 'Catalan', value: 'ca' },
      { language: 'Kyrgyz', value: 'ky' },
      { language: 'Chinese', value: 'zh' },
      { language: 'Korean', value: 'ko' },
      { language: 'Latin', value: 'la' },
      { language: 'Latvian', value: 'lv' },
      { language: 'Lithuania', value: 'lt' },
      { language: 'Malagasy', value: 'mg' },
      { language: 'Malay', value: 'ms' },
      { language: 'Maltese', value: 'mt' },
      { language: 'Macedonian', value: 'mk' },
      { language: 'Mongolian', value: 'mn' },
      { language: 'German', value: 'de' },
      { language: 'Norwegian', value: 'no' },
      { language: 'Persian', value: 'fa' },
      { language: 'Polish', value: 'pl' },
      { language: 'Portuguese', value: 'pt' },
      { language: 'Romanian', value: 'ro' },
      { language: 'Russian', value: 'ru' },
      { language: 'Serbian', value: 'sr' },
      { language: 'Slovakian', value: 'sk' },
      { language: 'Slovenian', value: 'sl' },
      { language: 'Swahili', value: 'sw' },
      { language: 'Tajik', value: 'tg' },
      { language: 'Thai', value: 'th' },
      { language: 'Tagalog', value: 'tl' },
      { language: 'Tatar', value: 'tt' },
      { language: 'Turkish', value: 'tr' },
      { language: 'Uzbek', value: 'uz' },
      { language: 'Ukrainian', value: 'uk' },
      { language: 'Finish', value: 'fi' },
      { language: 'French', value: 'fr' },
      { language: 'Croatian', value: 'hr' },
      { language: 'Czech', value: 'cs' },
      { language: 'Swedish', value: 'sv' },
      { language: 'Estonian', value: 'et' },
      { language: 'Japanese', value: 'ja' },
    ]

