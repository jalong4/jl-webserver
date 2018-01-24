import Api from '@/services/Api'

export default {
  index (credentials) {
    return Api().get('media', credentials)
  },

  setFavorite (mediaId, userId) {
    console.log(`calling route: media/${mediaId}/setfav?id=${userId}`)
    return Api().put(`media/${mediaId}/setfav?id=${userId}`)
  },

  clearFavorite (mediaId, userId) {
    console.log(`calling route: media/${mediaId}/clearfav?id=${userId}`)
    return Api().put(`media/${mediaId}/clearfav?id=${userId}`)
  }
}
