import React from 'react';
import ListingIndex from './listing_index';
import ListingMap from './../listing_map/listing_map';

const Search = ({listings, fetchListings}) => (
  <div>
    <ListingMap listings={listings}  />
    <ListingIndex listings={listings} fetchListings={fetchListings}/>
  </div>
)

export default Search;