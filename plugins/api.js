import User from '~/api/user'

export default (context, inject) => {

  const factories = {
    user: User(context.$axios),
  }

  inject('api', factories)
}
