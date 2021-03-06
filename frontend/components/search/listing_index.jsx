import React from 'react';
import ListingIndexItem from './listing_index_item';
import { Link } from 'react-router-dom';

class ListingIndex extends React.Component {

  componentDidMount() {
    if (this.props.fetchListings) {
      this.props.fetchListings();
    }
  }

  render() {

    const listings = this.props.listings.map(listing => {
      return (
        <ListingIndexItem
          key={listing.id}
          listing={listing}
          />
      )
    })

    return (
      <div className="listing-index">
        <div className='listing-index-header'>The best camping near me. </div>
        <ul className="listing-index-photos">
          <li>{listings}</li>
        </ul>
      </div>
    );
  }
}

export default ListingIndex;
