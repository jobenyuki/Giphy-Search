import React, { memo, useMemo, useCallback, useState } from 'react';
import classnames from 'classnames';
import { useTypedSelector } from '../../hooks/useTypedSelector';
import { Button } from '../common/Button';
import { ImageGridElement } from './ImageGridElement';
import { ImagePreview } from './ImagePreview';
import { TImageGridProps } from './ImageGrid.types';
import s from './ImageGrid.module.scss';

export const ImageGrid: React.FC<TImageGridProps> = memo(
  ({
    className = '',
    pageIndex = 0,
    onNextPage = undefined,
    onPrevPage = undefined,
    ...rest
  }: TImageGridProps) => {
    const { gifs, loading, error } = useTypedSelector((state) => state.gif);
    const [selectedGifIndex, setSelectedGifIndex] = useState(-1);

    // Define message
    const message = useMemo(() => {
      if (gifs) return null;
      // Return loading message
      if (loading) {
        return 'Loading...';
      }
      // Return error message
      if (error) {
        return error;
      }
      // Return no corresponding gifs message
      return 'No Gif To Show!';
    }, [error, gifs, loading]);

    // Listener when gif element is clicked
    const handleGifElementClick = useCallback((index) => {
      setSelectedGifIndex(index);
    }, []);

    // Listener when preview is closed
    const handleGifPreviewClose = useCallback(() => {
      setSelectedGifIndex(-1);
    }, []);

    return (
      <div className={classnames(s.imageGridContainer, className)} {...rest}>
        {message && <h2>{message}</h2>}
        {gifs && (
          <>
            <div className={s.imageGridPagination}>
              <Button onClick={onPrevPage} disabled={pageIndex === 0}>
                Prev
              </Button>
              <Button onClick={onNextPage}>Next</Button>
            </div>
            {gifs.data.map((gifData, index) => {
              return (
                <ImageGridElement
                  key={gifData.id}
                  className={s.imageGridElement}
                  gifData={gifData}
                  onClick={() => handleGifElementClick(index)}
                />
              );
            })}
            {selectedGifIndex !== -1 && (
              <ImagePreview
                url={gifs.data[selectedGifIndex].images.original.url}
                onClose={handleGifPreviewClose}
              />
            )}
          </>
        )}
      </div>
    );
  },
);
