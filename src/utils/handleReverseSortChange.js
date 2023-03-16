const handleReverseSortChange =
  ({ sort, order }) =>
  () => {
    switch (`${sort}:${order}`) {
      case "price:desc": {
        return "Price : high to low";
      }
      case "price:asc": {
        return "Price : low to high";
      }
      case "createdAt:desc": {
        return "Latest Items";
      }

      case "createdAt:asc": {
        return "Oldest Items";
      }

      default:
        throw new Error("unknown");
    }
  };
export default handleReverseSortChange;
// const FilterData = [
//   { id: 1, name: "Price : high to low" },
//   { id: 2, name: "Price : low to high" },
//   { id: 3, name: "Latest Items" },
//   { id: 4, name: "Oldest Items" },
// ];