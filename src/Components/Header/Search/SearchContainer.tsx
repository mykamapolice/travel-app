import { connect } from 'react-redux';
import Search from './Search';
import { setSearch } from '../../../redux/actionCreators/exampleActionCreator';

const placeholder:any = {

  'ru' : 'набирайте, сударь',
  'en' : 'type, sir',
  'be' :  'набірайце, cпадарства'
};

const MapStateToProps = ({
  searchReducer: { text, disabled },
  langReducer: lang }: any) => {
  return (
    {
      placeholder: placeholder[lang],
      text, disabled
    }
  );
};

const MapDispatchToProps = (dispatch: any) => ({
  setInputText: (inputText: string) => dispatch(setSearch(inputText)),
});


const SearchContainer = connect(MapStateToProps, MapDispatchToProps)(Search);

export default SearchContainer;
