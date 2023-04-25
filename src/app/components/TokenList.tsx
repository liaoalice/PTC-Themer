// import { useState } from "react";

// function TokenList(props) {
//     const availableFilters = [
//         "All",
//         "background",
//         "text",
//         "border",
//         "icon",
//         "overlay",
//         "interaction",
//         "chart",
//         "button",
//         "link"
//     ];

//   const [selectedFilters, setSelectedFilters] = useState(new Set(["All"]));

//   const handleFilterClick = filter => {
//     const newSelectedFilters = new Set(selectedFilters);
//     if (filter === "All") {
//       // If "All" is selected, clear other selections
//       newSelectedFilters.clear();
//       newSelectedFilters.add("All");
//     } else {
//       // Toggle the selected filter
//       if (newSelectedFilters.has(filter)) {
//         newSelectedFilters.delete(filter);
//       } else {
//         newSelectedFilters.add(filter);
//       }
//       // If no filters are selected, default to "All"
//       if (newSelectedFilters.size === 0) {
//         newSelectedFilters.add("All");
//       } else {
//         // If specific filters are selected, remove "All"
//         newSelectedFilters.delete("All");
//       }
//     }
//     setSelectedFilters(newSelectedFilters);
//   };
// }

// export default TokenList;
