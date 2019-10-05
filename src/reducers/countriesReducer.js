export default function countriesReducer(state, action) {
  switch (action.type) {
    case "SEARCH_COUNTRY":
      return {
        ...state,
        searchResult: state.allCountries.filter(
          country =>
            country.name.toUpperCase().indexOf(action.txt.toUpperCase()) > -1
        )
      };
    case "RESET_SEARCH_COUNTRY":
      return {
        ...state,
        searchResult: []
      };
    case "GET_COUNTIRES":
      return {
        ...state,
        allCountries: action.payload,
        countriesForRednder: action.payload,
        immutableCountries: [...action.payload],
        countriesIsLoaded: true
      };

    case "FILTER_CONTINENT":
      return {
        ...state,
        continentSelectValue: action.payload
      };
    case "SORT_COUNTIRES":
      return {
        ...state,
        sortSelectValue: action.payload
      };
    case "SAVE_COUNTRY":
      return {
        ...state,
        savedCountries: [...state.savedCountries, action.payload]
      };
    case "DELETE_SAVED_COUNTRY":
      return {
        ...state,
        savedCountries: state.savedCountries.filter(
          country => country.name !== action.payload
        )
      };
    case "DISPLAY_BY":
      const compare = (country1, country2) => {
        let comparison = 0;
        country1 =
          country1[
            state.sortSelectValue.slice(0, state.sortSelectValue.length - 3)
          ]; //populationMax => population
        country2 =
          country2[
            state.sortSelectValue.slice(0, state.sortSelectValue.length - 3)
          ];
        if (country1 > country2) {
          comparison = 1;
        } else if (country1 < country2) {
          comparison = -1;
        }
        if (
          state.sortSelectValue === "nameMin" ||
          state.sortSelectValue === "populationMin" ||
          state.sortSelectValue === "areaMin"
        ) {
          return comparison;
        } else {
          return comparison * -1;
        }
      };

      const displayBy = () => {
        let result;
        if (state.continentSelectValue !== "All") {
          result = state.allCountries.filter(
            country => country.region === state.continentSelectValue
          );
        } else {
          result = state.allCountries;
        }
        return result;
      };
      return {
        ...state,
        countriesForRednder: displayBy().sort(compare)
      };
    default:
      return state;
  }
}
