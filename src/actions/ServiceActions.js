export const UPDATE_SELECTED_SERVICE = 'UPDATE_SELECTED_SERVICE'
export const updateSelectedService = (service) => {
  return {
    type: UPDATE_SELECTED_SERVICE,
    payload: service
  }
}
