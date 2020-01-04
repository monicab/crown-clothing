import React from "react";

import './collection-preview.styles.scss';
import { CollectionItem } from '../collection-item/collection-item.component';

export const CollectionPreview = ({ title, items }) => {
  let itemsToPreview = items.slice(0, 4)

  return (
    <div className='collection-preview'>
      <h1 className='title'>{title}</h1>
      <div className='preview'>
        {itemsToPreview
          .map(item => (
                    <CollectionItem key={item.id} {...item} />
                )
            )
        }
      </div>
      <p>Total items {items.length}</p>
    </div>
  );
};
