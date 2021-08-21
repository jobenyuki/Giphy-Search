import React, { useState, useCallback } from 'react';
import classnames from 'classnames';
import { useDispatch } from 'react-redux';
import { TextInput } from '../common/TextInput';
import { Button } from '../common/Button';
import { ImageGrid } from '../ImageGrid';
import { TLandingProps } from './Landing.types';
import { fetchGifs } from '../../store/actions/gifAction';
import s from './Landing.module.scss';

export const Landing: React.FC<TLandingProps> = ({ className = '', ...rest }: TLandingProps) => {
  const dispatch = useDispatch();
  const [searchValue, setSearchValue] = useState('');
  const [pageIndex, setPageIndex] = useState(0);

  // Listener when search text input is changed
  const handleSearchValueChange = useCallback((e) => {
    setSearchValue(e.target.value);
  }, []);

  // Listener when search button is clicked
  const handleSearchClick = useCallback(
    (pageIncrement = 0) => {
      const newPageIndex = pageIndex + pageIncrement;

      setPageIndex(newPageIndex);
      dispatch(fetchGifs(searchValue, newPageIndex));
    },
    [dispatch, pageIndex, searchValue],
  );

  return (
    <div className={classnames(s.landingContainer, className)} {...rest}>
      <div className={s.landingSearchBox}>
        <TextInput
          placeholder="Giphy Search"
          value={searchValue}
          onChange={handleSearchValueChange}
        />
        <Button onClick={() => handleSearchClick(0)}>Go!</Button>
      </div>
      <ImageGrid
        pageIndex={pageIndex}
        onNextPage={() => handleSearchClick(1)}
        onPrevPage={() => handleSearchClick(-1)}
      />
    </div>
  );
};
