import { Formik } from 'formik';
import { FormElement, FieldElement, FieldTitle } from './Filter.styled';
import { useSelector, useDispatch } from 'react-redux';
import { setFilter } from 'redux/filterSlice';

const Filter = () => {
  const filter = useSelector(store => store.filter);
  const dispatch = useDispatch();

  const onChangeFilterInput = evt => {
    dispatch(setFilter(evt.target.value.toLowerCase().trim()));
  };

  return (
    <Formik>
      <FormElement>
        <FieldTitle>Find contacts by name</FieldTitle>
        <FieldElement
          name="filter"
          value={filter}
          onChange={onChangeFilterInput}
        />
      </FormElement>
    </Formik>
  );
};

export default Filter;
