import * as APIUtil from '../util/listing_api_util';

export const RECEIVE_LISTINGS = 'RECEIVE_LISTINGS';
export const RECEIVE_LISTING = 'RECEIVE_LISTING';

export const receiveListings = listings => ({
  type: RECEIVE_LISTINGS,
  listings,
});

export const receiveListing = listing => ({
  type: RECEIVE_LISTING,
  listing
});


export const fetchListings = (filters) => dispatch => (
  APIUtil.fetchListings(filters).then(listings => dispatch(receiveListings(listings)))
);

export const fetchListing = id => dispatch => (
  APIUtil.fetchListing(id).then(listing => dispatch(receiveListing(listing)))
);
