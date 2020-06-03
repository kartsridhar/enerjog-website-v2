export const state = () => ({
  current_model : '',
  current_colour : '',
  models: [
    {id: 1, name: 'Standard'},
    {id: 2, name: 'Pro'},
    {id: 3, name: 'Custom'}
  ],
  colours: [
    {id: 1, name: 'Bold Blue'},
    {id: 2, name: 'Cool Cyan'},
    {id: 3, name: 'Pretty Pink'},
    {id: 4, name: 'Powerful Purple'},
    {id: 5, name: 'Brilliant Black'}
  ],
})

export const mutations = ()=>({
  changeModel(state,newValue){
    state.current_model = newValue
  }

})

export const getters = {
    isAuthenticated(state) {
      return state.auth.loggedIn
    },
  
    loggedInUser(state) {
      return state.auth.user
    }
  }

