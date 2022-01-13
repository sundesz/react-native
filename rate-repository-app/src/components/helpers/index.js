// export const handleFetchMore = (
//   fetchMore,
//   variables,
//   loading,
//   nextPage,
//   endCursor
// ) => {
//   const canFetchMore = !loading && nextPage;

//   if (!canFetchMore) {
//     return;
//   }

//   fetchMore({
//     variables: {
//       after: endCursor,
//       ...variables,
//     },
//   });
// };
