const INITIAL_STATE = {
  contacts: {
    items: [],
  },
  filters: {
    name: '',
  },
};

export const filtersReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case 'filter/changeFilter': {
      return {
        ...state,
        filters: {
          name: state.filters.name,
        },
      };
    }
  }
};

// action
export const changeFilter = payload => {
  return {
    type: 'filter/changeFilter',
    payload,
  };
};
