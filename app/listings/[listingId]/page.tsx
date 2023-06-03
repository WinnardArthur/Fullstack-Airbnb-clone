import getListingById from '@/app/actions/getListingById';
import getCurrentUser from '@/app/actions/getCurrentUser';
import ClientOnly from '@/app/components/ClientOnly';
import EmptyState from '@/app/components/EmptyState';
import ListingClient from '../../components/listings/ListingClient'
import getReservations from '@/app/actions/getReservations';

interface IParams {
    listingId?: string;
}

const ListingPage = async({ params } : {params: IParams}) => {
    const listing = await getListingById(params);
    const currentUser = await getCurrentUser();
    const reservations = await getReservations(params);

    if (!listing) {
        return (
            <ClientOnly>
                <EmptyState />
            </ClientOnly>
        )
    }

    return (
      <ClientOnly>
        <ListingClient reservations={reservations} listing={listing} currentUser={currentUser} />
      </ClientOnly>
    );
}

export default ListingPage;