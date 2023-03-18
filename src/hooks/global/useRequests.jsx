function useRequests({ product }) {
  const completedRequests =
    product.offers._count.requests % product.offers.total_people_quantity;
  const requestsLeft = product.offers.total_people_quantity - completedRequests;
  return { completedRequests, requestsLeft };
}

export default useRequests;
